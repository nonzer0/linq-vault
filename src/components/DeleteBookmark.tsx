import {  LibLinkButton as LinkBtn } from "./ui_lib/LibLinkButton";
import { ref, remove } from "firebase/database";
import { useDatabase } from "reactfire";

interface DeleteProps {
  bookmarkId: string;
}

export function DeleteBookmark({ bookmarkId }: DeleteProps) {
  const db = useDatabase();

  function handleDelete() {
    const bookmarkRef = ref(db, `bookmarks/${bookmarkId}`);
    remove(bookmarkRef);
  }

  return (
    <LinkBtn text="delete" onClick={handleDelete} />
  );
}
