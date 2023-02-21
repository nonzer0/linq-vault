import List from "@mui/material/List";
import type { AuthSession } from "@supabase/supabase-js";

import { Bookmark } from "./Bookmark";
import { Link } from "../types/types";
import { supabase } from "../supabase";
import { SupabaseContext } from "../supabaseContext";
import { useCallback, useContext, useEffect, useState } from "react";

interface BookmarkListProps {
  // links: Link[];
  // session: AuthSession;
}

export function BookmarkList() {
  // const { session } = useContext(SupabaseContext);
  const [links, setLinks] = useState<any | undefined>();
  const cachedGetBookmarks = useCallback(getBookmarks, []);

  useEffect(() => {
    cachedGetBookmarks();
  }, [cachedGetBookmarks]);


  async function getBookmarks() {
    try {
      // setLoading(true);
      // const { user } = session;

      let { data, error, status } = await supabase
        .from("links")
        .select(`url, title, description, id`);

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setLinks(data);
      }
    } catch (error: any) {
      console.log(error.message);
    } finally {
      // setLoading(false);
    }
  };

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
