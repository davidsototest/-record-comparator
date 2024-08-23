import { Button, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Fade } from "react-awesome-reveal";

interface Props {
  label: string;
  handleFileChange: (file: File, archivo: number) => void;
  archivo: number;
}

const ButtonInputSecondary: React.FC<Props> = ({
  label,
  handleFileChange,
  archivo,
}) => {
  const handleFileChangeInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      handleFileChange(file, archivo); // Pasa el archivo a la función
    }
  };

  return (
    <Fade triggerOnce={true}>
      <Button
        variant="outlined"
        color="primary"
        startIcon={<CloudUploadIcon />}
        onClick={() => document.getElementById(label)?.click()} // abre el input al cli en el boton
        sx={{ width: 300 }}
      >
        <Typography style={{ fontWeight: 600, fontSize: "13px" }} variant="h6">
          {label}
        </Typography>
        <input
          id={label}
          type="file"
          accept=".csv, .txt"
          style={{ display: "none" }}
          onChange={handleFileChangeInput}
        />
      </Button>
    </Fade>
  );
};

export default ButtonInputSecondary;
