import { useState, useEffect } from "react";
import axios from "axios";

const useTableData = (url: string) => {
  const [data, setData] = useState<Record<string, unknown>[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [pageCount, setPageCount] = useState<number>(0);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
      setPageCount(Math.ceil(response.data.length / 10)); // Assuming 10 rows per page
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, fetchData, loading, pageCount };
};

export default useTableData;
