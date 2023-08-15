import React from "react";

function RedTabele({ app, reviews }) {
  return (
    <tr key={app.id}>
      <td>{app.id}</td>
      <td>{app.name}</td>
      <td>
        <button
          onClick={() => {
            const appReviews = reviews.filter(
              (review) => review.applicationId === app.id
            );
            console.log(appReviews);
          }}
        >
          Detalji
        </button>
      </td>
    </tr>
  );
}

export default RedTabele;
