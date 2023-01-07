import { Bookmark } from "./Bookmark";
import { Link } from "../types/types";

import styles from "../styles/Home.module.css";

interface BookmarkListProps {
  links: Link[];
}

export function BookmarkList({ links }: BookmarkListProps) {

  return (
    <div className={styles.bookmarkList}>
      <ul className="ul">
        {links ? (
          links.map((link: Link) => (
            <li key={link.id}>
              <Bookmark link={link} />
            </li>
          ))
        ) : (
          <>Loading...</>
        )}
      </ul>
    </div>
  );
}
