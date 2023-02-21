import { useContext, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
// import { orderByChild, query, ref } from "firebase/database";
// import { useDatabase, useDatabaseListData } from "reactfire";
import { supabase } from './supabaseClient';
import type { AuthSession } from '@supabase/supabase-js'
import Auth from './components/Auth';
import { AddBookmarkModal, BookmarkList, Search } from "./components";
import { SupabaseContext } from "./supabaseContext";

import styles from "./styles/Home.module.css";
import "./styles/globals.css";

function App() {
  const { session } = useContext(SupabaseContext);
  // const db = useDatabase();
  // const dbRef = ref(db, "/bookmarks");
  // const linksQuery = query(dbRef, orderByChild("title"));

  // const { status, data: links } = useDatabaseListData(linksQuery, {
  //   idField: "id",
  // });

  // const [filterLinks, setFilterLinks] = useState<any | undefined>();
  // const [loading, setLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   setFilterLinks(links);
  // }, [links]);

  // const [session, setSession] = useState<AuthSession | null>(null)
  // const [username, setUsername] = useState<string | null>(null)

  // useEffect(() => {
  //   supabase.auth.getSession().then(({ data: { session } }) => {
  //     setSession(session)
  //     console.log('session', session)
  //   });

  //   supabase.auth.onAuthStateChange((_event, session) => {
  //     setSession(session)
  //   });
  // }, []);

  return (
    <div className="App">
    {!session ? <Auth /> : 
    <div>
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
          py: "10px",
        }}
      >
        <Grid2 container spacing={2}>
          <Grid2 xs={8}>
            <div className={styles.appBarActions}>
              <AddBookmarkModal />
            </div>
            <div className={styles.appbarContents}>
              <h2>Bookmarks</h2>
              {/* <Search filterLinks={} /> */}
            </div>
          </Grid2>
          <Grid2 sx={{ display: "flex", alignItems: "flex-end" }}>
            <div className={styles.appbarContentsMinor}>
              <h4 style={{ marginBottom: "0px" }}>Tags</h4>
            </div>
          </Grid2>
        </Grid2>
      </AppBar>
      <Grid2 container spacing={2}>
        <Grid2 xs={8}>
          <BookmarkList />
        </Grid2>
        <Grid2 xs={4}></Grid2>
        <Grid2 xs={12}>
          <footer className={styles.footer}>footer</footer>
        </Grid2>
      </Grid2>
      </div>}
    </div>
  );
}

export default App;
