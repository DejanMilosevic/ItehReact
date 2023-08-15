import React, { useState } from "react";
import RedTabele from "./RedTabele";

function Aplikacije({ applications, reviews }) {
  const [search, setSearch] = useState("");

  const filteredApps = applications.filter((app) =>
    app.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Spisak aplikacija</h1>
      <input
        type="text"
        placeholder="Pretrazi aplikacije..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Naziv aplikacije</th>
            <th>Recenzije</th>
          </tr>
        </thead>
        <tbody>
          {filteredApps.map((app, index) => (
            <RedTabele key={index} app={app} reviews={reviews} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Aplikacije;
