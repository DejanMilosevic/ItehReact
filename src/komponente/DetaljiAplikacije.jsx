import React, { useState } from "react";
import { useParams } from "react-router-dom";

function DetaljiAplikacije({ applications, reviews, onAdd }) {
  let { id } = useParams();
  const application = applications.find((app) => app.id === Number(id));
  const appReviews = reviews.filter(
    (review) => review.applicationId === application.id
  );

  const [reviewRating, setReviewRating] = useState("");

  const handleSubmit = (e) => {
    if (reviewRating >= 1 && reviewRating <= 5) {
      onAdd({
        applicationId: application.id,
        rating: reviewRating,
      });
    } else {
      alert("Ocena aplikacije moze biti od 1 do 5!");
    }
    e.preventDefault();
    setReviewRating("");
  };
  return (
    <div>
      <h1>{application.name}</h1>
      <p>{application.description}</p>
      <p>Broj preuzimanja: {application.numberOfDownloads}</p>
      <h1>Recenzije</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Ocena aplikacije</th>
          </tr>
        </thead>
        <tbody>
          {appReviews.map((review) => (
            <tr key={review.id}>
              <td>{review.id}</td>
              <td>{review.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <form onSubmit={handleSubmit}>
        <label>Ocena:</label>
        <input
          type="number"
          value={reviewRating}
          onChange={(e) => setReviewRating(e.target.value)}
          required
        />
        <button type="submit">Dodaj recenziju</button>
      </form>
    </div>
  );
}

export default DetaljiAplikacije;
