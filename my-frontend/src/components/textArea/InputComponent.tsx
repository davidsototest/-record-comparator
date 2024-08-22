import React from "react";
import { useComparator } from "../../context/ComparatorContext";
import ButtonInputSecondary from "../buttons/ButtonInputSecundary";

interface Props {
  label: string;
  handleFileChange: (file: File, archivo: number) => void;
  archivo: number
}

const InputComponent: React.FC<Props> = ({ label, handleFileChange, archivo }) => {

  return (
  <ButtonInputSecondary label={label} handleFileChange={handleFileChange} archivo={archivo} />
  );
};

export default InputComponent;
