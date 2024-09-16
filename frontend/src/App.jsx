import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <h1>chai and full stack</h1>
      <p>Jokes: {jokes.length}</p>
      {jokes.map((jokes, index) => (
        <div key={jokes.id}>
          <h3>{jokes.joke}</h3>
        </div>
      ))}
    </>
  );
}

export default App;
