import React from "react";
import RedTabele from "./RedTabele";

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
          {applications.map((app, index) => (
            <RedTabele key={index} app={app} reviews={reviews} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Aplikacije;
