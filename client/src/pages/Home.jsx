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
        // check for data and authorisation
        const res = await axios.get("/top-players");
        setData(res.data);
        setLoading(false);
      } catch (err) {
         if (err.response.status === 401 || err.response.status === 403) {
           // Token is not valid or other error occurred, redirect to login
           navigator("/login");
           return;
         }
        setError(err);
        setLoading(false);
      }
    })();
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
