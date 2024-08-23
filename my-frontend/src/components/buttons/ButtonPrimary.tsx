import { Button, SvgIconTypeMap, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { useScrollRevealHeadline } from "../../theme/scrollRevealConfig";

interface Props {
  label: string;
  clic: () => void;
  onClic?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  activate?: boolean;
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  limitWidth?: boolean;
}

const ButtonPrimary: React.FC<Props> = ({
  label,
  clic,
  onClic,
  activate = true,
  icon,
  limitWidth = true,
}) => {
  //efectos de scrollReveal
  useScrollRevealHeadline();

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={onClic ? onClic : clic}
      className="reveal"
      sx={{
        width: {
          xs: !limitWidth ? "auto" : 300,
          sm: 300,
        },
      }}
      disabled={!activate}
      endIcon={icon ? React.createElement(icon) : null}
    >
      <Typography style={{ fontWeight: 500, fontSize: "18px" }} variant="h6">
        {label}
      </Typography>
    </Button>
  );
};

export default ButtonPrimary;
