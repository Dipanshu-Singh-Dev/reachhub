import React from "react";
import Loading from "../components/Loading/Loading";
import Error from "../components/Error/Error";
import axios from "../configs/axios";
import Table from "../components/Table/Table";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(false);
  const navigator = useNavigate();

  React.useEffect(() => {
    (async () => {
      try {
        // Check if token exists in cookies, if not, redirect to login
        if (!document.cookie.includes("token")) {
          navigator("/login");
          return;
        }

        // Check if data is present in local storage and is not older than a day
        const storedData = JSON.parse(localStorage.getItem("data"));
        const storedDate = JSON.parse(localStorage.getItem("date"));
        if (storedData && storedDate && storedDate > Date.now() - 86400000) {
          setData(storedData);
          setLoading(false);
        } else {
          const res = await axios.get("/top-players");
          console.log(res.data);
          setData(res.data);
          setLoading(false);
          // Store fetched data and current date in local storage
          localStorage.setItem("data", JSON.stringify(res.data));
          localStorage.setItem("date", JSON.stringify(Date.now()));
        }
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    })()
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error message={error.message} />
      ) : (
        <Table data={data} />
      )}
    </>
  );
};

export default Home;
