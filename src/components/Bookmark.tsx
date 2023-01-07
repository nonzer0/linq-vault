import { DeleteBookmark } from "./DeleteBookmark";
import { Tags } from "./Tags";
import { Link } from "../types/types";

import styles from "../styles/Home.module.css";

interface BookmarkProps {
  link: Link;
}

export function Bookmark({ link }: BookmarkProps) {
  function convertedDate(ms: EpochTimeStamp) {
    const date = new Date(ms);
    const dateString = date.toDateString().toString();
    return dateString.split(" ").slice(1).join(" ");
  }

  return (
    <div className={styles.bookmark}>
      <a className={styles.bookmarkTitle} href={link.url}>
        {link.title}
      </a>
      <Tags tags={link.tags} linkId={link.id} />
      <div className={styles.subSetOne}>
        <div className={styles.createdAt}>
          {link?.createdAt ? convertedDate(link?.createdAt) : "date"} &mdash;
        </div>
        <div>
          <button className={styles.editButton}>edit</button>
          <button className={styles.editButton}>archive</button>
          <DeleteBookmark bookmarkId={link.id} />
        </div>
      </div>
    </div>
  );
}
