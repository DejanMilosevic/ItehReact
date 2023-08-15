import "./App.css";
import { useState } from "react";
import Aplikacije from "./komponente/Aplikacije";

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

  const [reviews] = useState([
    {
      applicationId: 2,
      rating: 5,
      comment: "Odlicna aplikacija za gledanje slika",
    },
    {
      applicationId: 2,
      rating: 3,
      comment: "Solidna aplikacija, bolji je Facebook",
    },
    {
      applicationId: 1,
      rating: 4,
      comment: "Vrlo dobra aplikacija, bolja je od Viber-a",
    },
    {
      applicationId: 3,
      rating: 4,
      comment: "Super aplikacija, jedina mana su reklame",
    },
  ]);

  return (
    <div className="App">
      <Aplikacije applications={applications} reviews={reviews} />
    </div>
  );
}

export default App;
