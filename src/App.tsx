import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import { orderByChild, query, ref } from "firebase/database";
import { useDatabase, useDatabaseListData } from "reactfire";
import { AddBookmarkModal, BookmarkList, CreateBookmark, Search } from "./components";

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
      <AppBar
        className={styles.appBarCustom}
        sx={{
          backgroundColor: "black",
          position: "sticky",
          top: "0",
          py: "10px"
        }}
      >
        <Grid2 container spacing={2}>
          <Grid2 xs={8}>
            <div className={styles.appBarActions}>
            <AddBookmarkModal />
            </div>
            <div className={styles.appbarContents}>
              <h2>Bookmarks</h2>
              <Search filterLinks={setFilterLinks} />
            </div>
          </Grid2>
          <Grid2 sx={{ display: "flex", alignItems: "flex-end" }}>
            <div className={styles.appbarContentsMinor}>
              <h4 style={{marginBottom: "0px"}}>Tags</h4>
            </div>
          </Grid2>
        </Grid2>
      </AppBar>
      <Grid2 container spacing={2}>
        <Grid2
          xs={8}
          sx={
            {
              // marginTop: "74px",
            }
          }
        >
          <BookmarkList links={filterLinks} />
        </Grid2>
        <Grid2
          xs={4}
          sx={
            {
              // marginTop: "74px",
            }
          }
        >
          <CreateBookmark />
        </Grid2>
        <Grid2 xs={12}>
          <footer className={styles.footer}>footer</footer>
        </Grid2>
      </Grid2>
    </div>
  );
}

export default App;
