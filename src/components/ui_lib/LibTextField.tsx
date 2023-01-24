import Box from "@mui/material/Box";
import TextField, { TextFieldProps } from "@mui/material/TextField";

import styles from "../../styles/Home.module.css";
 
export function LibTextField({
  onChange,
  id,
  placeholder,
  className,
  disabled,
  fullWidth,
  type,
  value,
  error,
}: TextFieldProps) {
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
        fullWidth={fullWidth}
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
