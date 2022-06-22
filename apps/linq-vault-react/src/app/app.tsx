// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useState } from 'react';
import { Link } from './components/Link';
// import styles from './app.module.scss';

export function App() {
  const [links, setLinks] = useState([]);

  async function callBackendAPI() {
    const response = await fetch('/api/links');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    setLinks(body)
    return body;
  }


  useEffect(() => {
    callBackendAPI();
  }, []);

  return (
    <>
      <header>
        <div />
        <h1>linq vault</h1>
      </header>
      <Link links={links} />
      <div />
      <footer>footer</footer>
    </>
  );
}

export default App;
