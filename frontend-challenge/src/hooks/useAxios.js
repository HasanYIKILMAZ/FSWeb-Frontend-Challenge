import axios from "axios";
import { useState } from "react";

const useAxios = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async (config) => {
    setLoading(true);
    try {
      const result = await axios(config);
      setResponse(result.data);
      return result.data;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { response, loading, error, sendRequest };
};

export default useAxios;