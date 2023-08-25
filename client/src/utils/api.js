import { useState } from "react";

function useFetch() {
  const baseApiUrl = "https://todo-mern-lsb8.onrender.com"; // Base URL

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData(endpoint) {
    const url = `${baseApiUrl}${endpoint}`;
    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      setData(jsonData);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }

  async function postData(endpoint, newData) {
    const url = `${baseApiUrl}${endpoint}`;
    try {
      setLoading(true);
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });
      const jsonData = await response.json();
      setLoading(false);
      return jsonData;
    } catch (error) {
      setLoading(false);
    }
  }

  async function putData(endpoint, updatedData) {
    const url = `${baseApiUrl}${endpoint}`;
    try {
      setLoading(true);
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      const jsonData = await response.json();
      setLoading(false);
      return jsonData;
    } catch (error) {
      setLoading(false);
    }
  }

  return { data, loading, error, fetchData, postData, putData };
}

export default useFetch;
