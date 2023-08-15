import React from "react";

function Aplikacije({ applications, reviews }) {
  return (
    <div>
      <h1>Spisak aplikacija</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Naziv aplikacije</th>
            <th>Recenzije</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
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
          ))}
          ;
        </tbody>
      </table>
    </div>
  );
}

export default Aplikacije;
