import { ref, remove } from "firebase/database";
import { useDatabase } from "reactfire";

import styles from "../styles/Home.module.css";

interface DeleteProps {
  bookmarkId: string;
}

export function DeleteBookmark({bookmarkId}: DeleteProps) {

  const db = useDatabase();

  function handleDelete() {
    console.log('delete?');
    const bookmarkRef = ref(db, `bookmarks/${bookmarkId}`);
    remove(bookmarkRef);
  }

  return (
    <button className={styles.editButton} onClick={handleDelete}>
      delete
    </button>
  );
}
