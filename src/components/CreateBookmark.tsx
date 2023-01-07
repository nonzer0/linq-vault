import { useState } from "react";
import {
  onValue,
  push,
  ref,
  serverTimestamp,
  set,
} from "firebase/database";
import { useDatabase } from "reactfire";

import { Link, LinkRecords } from "../types/types";

import styles from "../styles/Home.module.css";

export function CreateBookmark() {
  const db = useDatabase();

  const initLink = { url: "", title: "", tags: [], archived: false, id: "" };
  const [newLink, setNewLink] = useState<Link>(initLink);
  const [links, setLinks] = useState<LinkRecords | undefined>(undefined);

  const saveBookmark = (event: any) => {
    event.preventDefault();
    const { url, title, tags } = newLink;
    const bookmarkListRef = ref(db, `/bookmarks`);
    const newBookmarkRef = push(bookmarkListRef);
    set(newBookmarkRef, {
      url,
      title,
      tags,
      createdAt: serverTimestamp(),
      archived: false,
    })
      .then(() => {
        onValue(bookmarkListRef, (snapshot) => {
          setLinks(snapshot.val());
          setNewLink(initLink);
        });
      })
      .catch((e) => {
        throw new Error(`oops ${e}`);
      });
  };

  function handleChange(e: any) {
    const { value } = e.target;
    console.log("ch");
    if (e.target.name === "tags") {
      const tags = e.target.value.split(",").map((tag: string) => tag.trim());
      setNewLink({
        ...newLink,
        [e.target.name]: tags,
      });
    } else {
      setNewLink({
        ...newLink,
        [e.target.name]: value,
      });
    }
  }

  return (
    <aside className={styles.createNewBookmark}>
      <div className={styles.inputContainer}>
        <h3>Add New Bookmark</h3>
        <form onSubmit={saveBookmark}>
          <input
            id="url"
            className={styles.input}
            type="text"
            name="url"
            placeholder="Enter url"
            value={newLink.url}
            onChange={handleChange}
          />
          <input
            id="title"
            className={styles.input}
            name="title"
            placeholder="Enter title"
            value={newLink.title}
            onChange={handleChange}
          />
          <input
            id="tags"
            className={styles.input}
            name="tags"
            placeholder="Enter tag(s)"
            value={newLink.tags}
            onChange={handleChange}
          />
          <button className={styles.btnCreateBookmark} type="submit">
            Create Bookmark
          </button>
        </form>
      </div>
    </aside>
  );
}
