// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Link } from './components/Link';
import { link } from 'fs';
import styles from './app.module.scss';

export function App() {
  const links = [
    {
      link: 'https://www.google.com',
      title: 'google',
      tags: ['search', 'bigco'],
    },
    {
      link: 'https://www.ally.com',
      title: 'ally bank',
      tags: ['bank', 'financial'],
    },
    {
      link: 'https://www.marginalrevolution.com',
      title: 'marginal revolution',
      tags: ['economics', 'blog'],
    },
  ];
  console.log('links', links);
  return (
    <>
      <header>
        <div />
        <h1>linq vault</h1>
      </header>
      <Link links={links} />
      <div />
      <footer>
        footer
      </footer>
    </>
  );
}

export default App;

