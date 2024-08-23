import { Button, Typography } from "@mui/material";

interface Props {
  label: string;
  clic?: () => void;
  activate?: boolean;
}

const ButtonSecondary: React.FC<Props> = ({ label, clic, activate=true }) => {  
  return (
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
  );
};

export default ButtonSecondary;
