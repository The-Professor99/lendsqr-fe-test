import React, { useState, useEffect } from "react";

import { fetchWrapper } from "_helpers";
import { UserProfile } from "_models";

export const useRemoteService = (url: string, initial: UserProfile[]) => {
  const [data, setData] = useState(initial);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setError(false);
      setLoading(true);
      fetchWrapper
        .get(url)
        .then((res) => {
          console.log(res);
          setData(res);
        })
        .catch(() => {
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchData();
  }, []);
  return { data, loading, error };
};
