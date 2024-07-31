import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setjokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes") // http://localhost:4000
      .then((resonse) => {
        setjokes(resonse.data);
        console.log(resonse.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <h1>Jokes</h1>
      <p> JOKES : {jokes.length} </p>

      {
      jokes.map((joke, index) => {
        return(<div key={joke.id}>
          <h3>{joke.title}</h3>
          <h3>{joke.content}</h3>
        </div>)
      })
      }
    </>
  );
}

export default App;
