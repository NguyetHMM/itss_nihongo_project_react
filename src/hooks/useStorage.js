import { useState, useEffect } from "react";

const STORAGE_KEY = "itss-todo";

function useStorage() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      setItems(JSON.parse(data));
    } else {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    }
  }, []);

  const putItems = (items) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    setItems(items);
  };

  return [items, putItems];
}

export default useStorage;
