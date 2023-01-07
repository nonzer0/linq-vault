import { useEffect, useState } from "react";
import { orderByChild, query, ref } from "firebase/database";
import { useDatabase, useDatabaseListData } from "reactfire";
import { BookmarkList, CreateBookmark, Search } from "./components";

import styles from "./styles/Home.module.css";
import "./styles/globals.css";

function App() {
  const db = useDatabase();
  const dbRef = ref(db, "/bookmarks");
  const linksQuery = query(dbRef, orderByChild("title"));

  const { status, data: links } = useDatabaseListData(linksQuery, {
    idField: "id",
  });

  const [filterLinks, setFilterLinks] = useState<any | undefined>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setFilterLinks(links);
  }, [links]);

  return (
    <div className="App">
      <header>
        <title>Bookmarks</title>
        <meta name="description" content="bookmarking app" />
        <link rel="icon" href="/favicon.ico" />
      </header>
      <div className={styles.heading}>
        <h2 className={styles.bookmarkHeading}>Bookmarks</h2>
        <div className={styles.login}>
          <div>login/register</div>
        </div>
      </div>
      <Search filterLinks={setFilterLinks} />
      <div className={styles.container}>
        <main className={styles.section}>
          <div className={styles.mainContainer}>
            <BookmarkList links={filterLinks} />
          </div>
        </main>
        <CreateBookmark />

        <footer className={styles.footer}>footer</footer>
      </div>
    </div>
  );
}

export default App;
