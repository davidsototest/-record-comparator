import { Typography, useTheme } from "@mui/material";
import { Fade } from "react-awesome-reveal";
interface Props {
  text: string;
  color?: boolean;
  styleScrollReveal?: boolean;
}

const TextCommon: React.FC<Props> = ({
  text,
  color,
  styleScrollReveal = true,
}) => {
  const theme = useTheme();

  return (
    <Fade triggerOnce={true}>
      <Typography
        color={
          color ? theme.palette.secondary.main : theme.palette.primary.main
        }
        style={{ fontWeight: 100 }}
      >
        {text}
      </Typography>
    </Fade>
  );
};

export default TextCommon;
