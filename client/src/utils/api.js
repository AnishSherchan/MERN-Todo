import { useState } from "react";

function useFetch() {
  const baseApiUrl = "https://todo-mern-lsb8.onrender.com"; // Base URL
  // const baseApiUrl = "http://localhost:5000";
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData(endpoint) {
    const url = `${baseApiUrl}${endpoint}`;
    try {
      setLoading(true);
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          user_id: localStorage.id, // Add the token to the Authorization header
          token: localStorage.token, // Add the token to the Authorization header
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      setData(jsonData);
      setLoading(false);
      return jsonData;
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }

  async function postData(endpoint, newData) {
    console.log(newData);
    const url = `${baseApiUrl}${endpoint}`;
    try {
      setLoading(true);
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.token, // Add the token to the Authorization header
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
          token: localStorage.token, // Add the token to the Authorization header
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
