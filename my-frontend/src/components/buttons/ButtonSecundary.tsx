import { Button, Typography } from "@mui/material";
import { useEffect } from "react";
import { useScrollRevealHeadline } from "../../theme/scrollRevealConfig";

interface Props {
  label: string;
  clic?: () => void;
  activate?: boolean;
}

const ButtonSecondary: React.FC<Props> = ({ label, clic, activate=true }) => {

   //efectos de scrollReveal
   useScrollRevealHeadline();
  
  return (
    <Button
      variant="outlined"
      color="primary"
      onClick={clic}
      sx={{ width: 300 }}
      disabled={!activate}
      className="reveal"
    >
      <Typography style={{ fontWeight: 600, fontSize: "18px" }} variant="h6">
        {label}
      </Typography>
    </Button>
  );
};

export default ButtonSecondary;
