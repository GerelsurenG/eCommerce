import { useEffect, useState } from "react";
export default function useData(url, defaultValue = {}) {
  /*     defaultValue utga bwal awaad bhgui bol hooson {} ywuulna */
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error);
        setData(defaultValue);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { data, loading };
}
