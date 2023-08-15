import React from "react";
import { useNavigate } from "react-router-dom";

function RedTabele({ app, reviews }) {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/product/${app.id}`);
  };
  return (
    <tr key={app.id}>
      <td>{app.id}</td>
      <td>{app.name}</td>
      <td>
        <button onClick={handleDetailsClick}>Detalji</button>
      </td>
    </tr>
  );
}

export default RedTabele;
