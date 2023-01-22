import React from "react";
import { useDatabase, useDatabaseListData } from "reactfire";
import { orderByChild, query, ref } from "firebase/database";

import { LibTextField as TextField } from "./ui_lib/LibTextField";
import type { Link } from "../types/types";

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

  function onEnterText(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    console.log(e.currentTarget.value);
    if (links) {
      filterLinks(
        links.filter((link: any) =>
          link.title.toLowerCase().includes(e.currentTarget.value.toLowerCase())
        )
      );
    }
  }

  return (
    <TextField id={"search"} placeholder={"search..."} onChange={onEnterText} />
  );
}
