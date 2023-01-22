import Button from "@mui/material/Button";

import styles from "../../styles/Home.module.css";

interface LibLinkButtonProps {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export function LibLinkButton({ text, onClick }: LibLinkButtonProps) {
  return (
    <Button
      sx={{
          marginRight: '5px',
        }}
      size="small"
      variant="text"
      className={styles.editButton}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}
