import React from 'react'
import { Link } from 'react-router-dom'
const Table = ({data}) => {
  return (
    <div className='table-container'>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">ID</th>
            <th scope="col">View Ratings</th>
          </tr>
        </thead>
        <tbody>
          {data.map((player,i) => (
            <tr key={player._id}>
              <th scope="row">{i+1}</th>
              <td>{player.username}</td>
              <td>{player.id}</td>
              <td><Link to={`/player/${player.username}`}>View Ratings</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table