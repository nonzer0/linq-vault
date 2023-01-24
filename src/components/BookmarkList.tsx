import List from "@mui/material/List";

import { Bookmark } from "./Bookmark";
import { Link } from "../types/types";

interface BookmarkListProps {
  links: Link[];
}

export function BookmarkList({ links }: BookmarkListProps) {
  return (
    <List>
      {links ? (
        links.map((link: Link) => <Bookmark link={link} />)
      ) : (
        <>Loading...</>
      )}
    </List>
  );
}
