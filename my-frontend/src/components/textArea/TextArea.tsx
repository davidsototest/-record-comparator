import { SxProps, TextField, Theme, useTheme } from "@mui/material";

interface Props {
  label: string;
  dataArchivo: string[];
}

const TextArea: React.FC<Props> = ({ label, dataArchivo }) => {
  const theme = useTheme();

  // estilos del textField
  const textFieldStyles: SxProps<Theme> = {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.primary.main, // Color del borde cuando no está enfocado
      },
      "&:hover fieldset": {
        borderColor: theme.palette.primary.light, // Color del borde al pasar el mouse por encima
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.primary.main, // Color del borde cuando está enfocado
      },
    },
    "& .MuiInputLabel-root": {
      color: theme.palette.primary.main, // Color del label
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: theme.palette.primary.main, // Color del label cuando está enfocado
    },
    "& .MuiFormHelperText-root": {
      color: "red", // Color del texto de ayuda
    },
  };

  return (
    <TextField
      multiline
      fullWidth
      // disabled
      rows={6}
      variant="outlined"
      value={dataArchivo
        .map((line, index) => `${index + 1}. ${line}`)
        .join("\n")}
      // value={dataArchivo}
      sx={textFieldStyles}
      placeholder={label}
    />
  );
};

export default TextArea;
