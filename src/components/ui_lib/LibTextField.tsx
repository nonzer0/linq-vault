import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import styles from "../../styles/Home.module.css";

interface LibTextFieldProps {
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder: string;
  id: string;
  className?: string;
  disabled?: boolean;
  fullwidth?: boolean;
  type?: string;
  value?: string | number | boolean | string[];
  error?: boolean | undefined;
}

export function LibTextField({
  onChange,
  id,
  placeholder,
  className,
  disabled,
  fullwidth,
  type,
  value,
  error,
}: LibTextFieldProps) {
  return (
    <Box
      className={styles.search}
      sx={{
        "& .MuiInputLabel-root": { color: "#767676" },
        "& .MuiOutlinedInput-root": {
          "& > fieldset": { borderColor: "#767676" },
        },
        "& .MuiOutlinedInput-root:hover": {
          "& > fieldset": { borderColor: "white" },
        },
      }}
    >
      <TextField
        className={className}
        sx={{
          input: {
            color: "white",
          },
        }}
        fullwidth={fullwidth}
        id={id}
        variant="outlined"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        type={type}
        error={error}
      ></TextField>
    </Box>
  );
}
