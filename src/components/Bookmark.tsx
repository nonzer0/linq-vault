import ListItem from "@mui/material/ListItem";
import ButtonGroup from "@mui/material/ButtonGroup";

import { DeleteBookmark } from "./DeleteBookmark";
import { EditBookmark } from "./EditBookmark";
import { LibLinkButton as LinkBtn } from "./ui_lib/LibLinkButton";
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

  console.log('link', link);
  return (
    <ListItem sx={{ display: "flex" }} key={link.id}>
      <div className="link-container">
        <a className={styles.bookmarkTitle} href={link.url}>
          {link.title}
        </a>
        {/* <Tags tags={link.tags} linkId={link.id} /> */}
        <div className={styles.createdAt}>
          {link?.createdAt ? convertedDate(link?.createdAt) : "date"}
        </div>
        <ButtonGroup
          sx={{
              marginLeft: '-5px',
            }}
          size="small"
          variant="outlined"
          aria-label="outlined button group"
        >
          <EditBookmark />
          <LinkBtn text={"archive"} onClick={() => {}} />
          {/* <DeleteBookmark bookmarkId={link.id} /> */}
        </ButtonGroup>
      </div>
    </ListItem>
  );
}
