import { Button, Typography } from "@mui/material";
import { Fade } from "react-awesome-reveal";

interface Props {
  label: string;
  clic?: () => void;
  activate?: boolean;
}

const ButtonSecondary: React.FC<Props> = ({ label, clic, activate = true }) => {
  return (
    <Fade triggerOnce={true}>
      <Button
        variant="outlined"
        color="primary"
        onClick={clic}
        sx={{ width: 300 }}
        disabled={!activate}
      >
        <Typography style={{ fontWeight: 600, fontSize: "18px" }} variant="h6">
          {label}
        </Typography>
      </Button>
    </Fade>
  );
};

export default ButtonSecondary;
