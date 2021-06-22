import { useState, useEffect } from "react";
import "./styles.css";

//https://api.github.com/users/amitbiran

export default function App({ login }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!login) return;

    setLoading(true);
    fetch(`https://api.github.com/users/${login}`)
      .then((resp) => resp.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [login]);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  }
  if (!data) return null;

  return (
    <div>
      <h1>{data.login}</h1>
      <p>{data.location}</p>
      <img alt={data.login} src={data.avatar_url} height="200" />
    </div>
  );
}
