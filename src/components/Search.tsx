import React from "react";
import { useDatabase, useDatabaseListData } from "reactfire";
import { orderByChild, query, ref } from "firebase/database";

import styles from "../styles/Home.module.css";

interface SearchProps {
  filterLinks: (list: any) => any;
}

export function Search({ filterLinks }: SearchProps) {
  const db = useDatabase();
  const dbRef = ref(db, "/bookmarks");
  const linksQuery = query(dbRef, orderByChild("title"));
  const { status, data: links } = useDatabaseListData(linksQuery, {
    idField: "id",
  });

  // const db = useDatabase();
  // const linksRef = ref(db, `/bookmarks`);
  //
  // const { status, data: links } = useDatabaseObjectData(linksRef, {
  //   idField: "title",
  // });

  function onEnterText(e: React.SyntheticEvent<HTMLInputElement>) {
    console.log(e.currentTarget.value)
    if (links) {
      filterLinks(
        links.filter((link: any) => link.title.includes(e.currentTarget.value))
        // Object.fromEntries(
        //   Object.entries(links).filter(([key, link]) => {
        //     if (typeof link !== "string") {
        //       return link.title.includes(e.currentTarget.value);
        //     }
        //   })
        // )
      );
    }
  }

  return (
    <div className={styles.search}>
      <label className={styles.searchLabel}>Search Bookmarks</label>
      <input
        className={styles.searchBox}
        type="text"
        onChange={onEnterText}
        placeholder="enter text to search"
        // disabled={!filterLinks}
      ></input>
    </div>
  );
}
