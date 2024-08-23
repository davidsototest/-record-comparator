import React from "react";
import ButtonInputSecondary from "../buttons/ButtonInputSecundary";
import { Fade } from "react-awesome-reveal";
interface Props {
  label: string;
  handleFileChange: (file: File, archivo: number) => void;
  archivo: number;
}

const InputComponent: React.FC<Props> = ({
  label,
  handleFileChange,
  archivo,
}) => {
  return (
    <Fade triggerOnce={true}>
      <ButtonInputSecondary
        label={label}
        handleFileChange={handleFileChange}
        archivo={archivo}
      />
    </Fade>
  );
};

export default InputComponent;
