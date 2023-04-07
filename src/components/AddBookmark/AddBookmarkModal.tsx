import { useContext, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import type { AuthSession } from "@supabase/supabase-js";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Input from "@mui/material/Input";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// import { LibTextField as TextField } from "../ui_lib/LibTextField";
import { SupabaseContext } from "../../supabaseContext";
import { Link, LinkRecords } from "../../types/types";

import styles from "../../styles/Home.module.css";

const theme = createTheme({
  components: {
    // Name of the component ⚛️
    MuiButtonBase: {
      defaultProps: {
        // The default props to change
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
  },
});

export function AddBookmarkModal() {
  const { session, supabaseClient } = useContext(SupabaseContext);
  const initLink = { url: "", title: "", tags: [], archived: false, id: "" };
  const [newLink, setNewLink] = useState<Link>(initLink);
  const [links, setLinks] = useState<LinkRecords | undefined>(undefined);
  const [newTags, setNewTags] = useState<any | undefined>([]);

  const schema = yup
    .object({
      url: yup.string().url().required(),
      title: yup.string().required(),
      tags: yup.string().required(),
    })
    .required();

  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      url: initLink.url,
      title: initLink.title,
      tags: initLink.tags,
    },
  });

  const saveBookmark = async (event: any) => {
    // event.preventDefault();
    console.log(newLink);
    const { url, title, tags } = newLink;

    // const currentTags = getTags(tags);
    getTags(tags);

    const { data, error } = await supabaseClient
      .from("links")
      .insert([{ url, title, user_id: session?.user.id }]);


    // .catch((error: any) => {
    //   console.error(error);
    // });
    // const bookmarkListRef = ref(db, `/bookmarks`);
    // const newBookmarkRef = push(bookmarkListRef);
    // set(newBookmarkRef, {
    //   url,
    //   title,
    //   tags,
    //   createdAt: serverTimestamp(),
    //   archived: false,
    // })
    //   .then(() => {
    //     onValue(bookmarkListRef, (snapshot) => {
    //       setLinks(snapshot.val());
    //       setNewLink(initLink);
    //       toggleModal();
    //     });
    //   })
    //   .catch((e: any) => {
    //     throw new Error(`oops ${e}`);
    //   });
  if (error) console.log('insert error', error);
  };


  function getTags(tagList: string[]) {
    console.log("taglist", tagList);
    supabaseClient
      .from("tags")
      .select()
      .in("name", tagList) // use the in operator to match any value in the list
      .then((result) => {
        const { data } = result;
        const tmpTags: any = [];
        data?.forEach((tag: any) => {
          if (!tagList.includes(tag)) tmpTags.push(tag);
        });
        console.log("result", result.data); // an array of objects containing the selected rows
        setNewTags(tmpTags);
      });
  }

  function onChange(e: any) {
    const { value } = e.target;
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

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const toggleModal = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Bookmark
      </Button>
      <Dialog
        PaperProps={{
          sx: { width: "40%", height: "100%" },
        }}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Add Bookmark</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(saveBookmark)}>
            <Controller
              name="url"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  {...register("url", { required: true })}
                  className={styles.modalTextField}
                  placeholder="Enter url"
                  onChange={onChange}
                  value={newLink.url}
                  aria-invalid={errors.url ? "true" : "false"}
                />
              )}
            />
            <p>{errors.url?.message}</p>
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  {...register("title", { required: true })}
                  className={styles.modalTextField}
                  placeholder="Enter title"
                  onChange={onChange}
                  value={newLink.title}
                />
              )}
            />
            <p>{errors.title?.message}</p>
            <Controller
              name="tags"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  {...register("tags", { required: true })}
                  className={styles.modalTextField}
                  placeholder="Enter tag(s)"
                  onChange={onChange}
                  value={newLink.tags}
                />
              )}
            />
            <p>{errors.tags?.message}</p>
            <Button color="primary" variant="contained" type="submit">
              Create
            </Button>
          </form>
        </DialogContent>
        {/*<DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add</Button>
        </DialogActions>*/}
      </Dialog>
    </div>
  );
}
