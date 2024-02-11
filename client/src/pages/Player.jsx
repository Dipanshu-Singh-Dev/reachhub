import React, { Suspense, useEffect, lazy } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from '../configs/axios';
const Loading = lazy(() => import("../components/Loading/Loading"));
const Chart = lazy(() => import("../components/Chart"));
const Player = () => {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState();
  const [error, setError] = React.useState(false);
  const {id} = useParams();
  const navigator = useNavigate();
  useEffect(() => {
    (async()=>{
      axios.get(`/ratings/${id}`).then((res) => {
        setData(res.data);
      }).catch((err) => {
        setError(err.response.data.message);
        if (!document.cookie.includes("token")) {
          navigator("/login");
          return;
        }
      });
    })()
  },[])
  return (
    <>
      <Link to="/">
        <svg
          width="48px"
          height="48px"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          fill="#008080"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fill="#008080"
              d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
            ></path>
            <path
              fill="#008080"
              d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
            ></path>
          </g>
        </svg>
      </Link>
      <div id="player-container">
        <h1>{id}</h1>
        {data?.ratings?.map((el) => (
          <Suspense key={el._id} fallback={<Loading />}>
            <Chart ratings={el} />
          </Suspense>
        ))}
      </div>
    </>
  );
}

export default Player