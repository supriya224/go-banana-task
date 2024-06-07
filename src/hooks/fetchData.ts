/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable import/extensions */
// hooks/fetchData.ts

import { useState, useEffect } from 'react';
import constants from '../utils/constants';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const useFetchData = () => {
  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(constants.API_URL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setData(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useFetchData;
