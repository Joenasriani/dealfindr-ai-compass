
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Search } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface SearchLog {
  id: string;
  search_term: string;
  category: string | null;
  created_at: string;
  user_id: string;
}

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [searchHistory, setSearchHistory] = useState<SearchLog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate('/auth');
      return;
    }

    const fetchSearchHistory = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('search_logs' as any)
          .select('*')
          .order('created_at', { ascending: false })
          .limit(50) as { data: SearchLog[] | null, error: any };

        if (error) throw error;
        setSearchHistory(data || []);
      } catch (error) {
        console.error('Error fetching search history:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchHistory();
  }, [user, navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Your Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Search History</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{searchHistory.length}</p>
                <p className="text-sm text-gray-500">Total searches</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Searches</h2>
            
            {loading ? (
              <div className="flex justify-center py-8">
                <div className="animate-spin h-8 w-8 border-4 border-blue-500 rounded-full border-t-transparent"></div>
              </div>
            ) : searchHistory.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <Search className="mx-auto h-12 w-12 text-gray-300 mb-3" />
                <p>You haven't made any searches yet.</p>
                <p className="mt-2">Start searching to see your history here!</p>
              </div>
            ) : (
              <div className="space-y-3">
                {searchHistory.map((log) => (
                  <div key={log.id} className="border rounded-md p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium">{log.search_term}</p>
                        <div className="flex items-center mt-2 text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{formatDistanceToNow(new Date(log.created_at), { addSuffix: true })}</span>
                        </div>
                      </div>
                      {log.category && log.category !== 'all' && (
                        <Badge variant="outline" className="bg-gray-100">
                          {log.category}
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
