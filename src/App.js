import "./App.css";
import { useState } from "react";
import Aplikacije from "./komponente/Aplikacije";
import { BrowserRouter as BRouter, Routes, Route } from "react-router-dom";
import Navbar from "./komponente/NavBar";
import DetaljiAplikacije from "./komponente/DetaljiAplikacije";

function App() {
  const [applications] = useState([
    {
      id: 1,
      name: "Whatsapp",
      description: "Drustvena mreza za dopisivanje.",
      numberOfDownloads: 400000,
    },
    {
      id: 2,
      name: "Instagram",
      description: "Drustvena mreza za postavljanje slika.",
      numberOfDownloads: 800000,
    },
    {
      id: 3,
      name: "Youtube",
      description: "Aplikacija za slusanje muzike i gledanje video-snimaka.",
      numberOfDownloads: 300000,
    },
  ]);

  const [reviews, setReviews] = useState([
    {
      id: 1,
      applicationId: 2,
      rating: 5,
    },
    {
      id: 2,
      applicationId: 2,
      rating: 3,
    },
    {
      id: 3,
      applicationId: 1,
      rating: 4,
    },
    {
      id: 4,
      applicationId: 3,
      rating: 4,
    },
  ]);

  const handleAddReview = (review) => {
    review.id = reviews.length + 1;
    setReviews((prevReviews) => [...prevReviews, review]);
  };

  return (
    <BRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Aplikacije applications={applications} reviews={reviews} />}
        ></Route>
        <Route
          path="/application/:id"
          element={
            <DetaljiAplikacije
              applications={applications}
              reviews={reviews}
              onAdd={handleAddReview}
            />
          }
        ></Route>
      </Routes>
    </BRouter>
  );
}

export default App;
