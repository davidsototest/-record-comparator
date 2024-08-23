import { Button, SvgIconTypeMap, Typography } from "@mui/material";
import React from "react";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { Fade } from "react-awesome-reveal";

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
  return (
    <Fade triggerOnce={true}>
      <Button
        variant="contained"
        color="primary"
        onClick={onClic ? onClic : clic}
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
    </Fade>
  );
};

export default ButtonPrimary;
