import React, { useState } from "react";
import TextArea from "../components/textArea/TextArea";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import TitlePrimary from "../components/titles/TitlePrimary";
import SubTitlePrimary from "../components/titles/SubTitlePrimary";
import TextCommon from "../components/titles/TextCommon";
import { useComparator } from "../context/ComparatorContext";
import InputComponent from "../components/textArea/InputComponent";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import ButtonSecondary from "../components/buttons/ButtonSecundary";
import Spinner from "../components/spinner/Spinner";
import { ComparadorData } from "../data/comparadorData";
import FavoriteIcon from "@mui/icons-material/Favorite";

interface Props {
  comparadorData: ComparadorData;
}

const ComparatorLayout: React.FC<Props> = ({ comparadorData }) => {
  const {
    dataArchivo1,
    dataArchivo2,
    runComparator,
    resetStates,
    validatorFile,
    activateButtonComparator,
    activateButtonReset,
    isLoading,
    progress,
    buffer,
    finishedProcess,
    postLike,
  } = useComparator();
  const [buttonLikeActivite, setButtonLikeActivite] = useState(true);

  const handleFileChange = (file: File, archivo: number) => {
    if (file) {
      validatorFile(file, archivo);
    }
  };

  const sendLike = async () => {
    await postLike();
    setButtonLikeActivite(false);
  };

  return (
    <Grid container display="flex" justifyContent="center">
      <Grid xs={12} textAlign="center">
        <TitlePrimary title={comparadorData.titlePage} />
      </Grid>
      <Grid xs={11} sm={8} md={6} textAlign="center" marginTop={3}>
        <SubTitlePrimary title={comparadorData.subTitle} />
      </Grid>
      <Grid xs={11} md={8} textAlign="center" marginTop={3} marginBottom={3}>
        <TextCommon text={comparadorData.subTitleSecundary} />
      </Grid>
      <Grid xs={12} container columnSpacing={{xs: 0, sm: 0, md: 0}} justifyContent="center">
        <Grid xs={6} md={5} padding={2}>
          <TextArea
            label={comparadorData.placeHolderTextAreaA}
            // handleTextFieldChange={handleTextFieldChange1}
            dataArchivo={dataArchivo1}
          />
          <Grid xs={6} marginTop={3} justifyContent="center" display="flex">
            {!finishedProcess ? (
              <InputComponent
                label={comparadorData.buttonA}
                handleFileChange={handleFileChange}
                archivo={1}
              />
            ) : (
              <></>
            )}
          </Grid>
        </Grid>
        <Grid xs={6} md={5} padding={2}>
          <TextArea
            label={comparadorData.placeHolderTextAreaB}
            dataArchivo={dataArchivo2}
          />
          <Grid xs={6} marginTop={3} justifyContent="center" display="flex">
            {!finishedProcess ? (
              <InputComponent
                label={comparadorData.buttonB}
                handleFileChange={handleFileChange}
                archivo={2}
              />
            ) : (
              <></>
            )}
          </Grid>
        </Grid>
      </Grid>
      <Grid xs={12} container display="flex" justifyContent="center">
        <Grid xs={12} justifyContent="center" display="flex" marginTop={8}>
          {!finishedProcess ? (
            <ButtonPrimary
              label={comparadorData.buttonPrimary}
              clic={runComparator}
              activate={activateButtonComparator}
            />
          ) : (
            <ButtonPrimary
              label={comparadorData.buttonLike}
              clic={sendLike}
              activate={buttonLikeActivite}
              icon={FavoriteIcon}
            />
          )}
        </Grid>
        <Grid xs={12} justifyContent="center" display="flex" marginTop={3}>
          <ButtonSecondary
            label={comparadorData.buttonSecundary}
            clic={resetStates}
            activate={activateButtonReset}
          />
        </Grid>
      </Grid>
      {isLoading ? (
        <Spinner
          label={comparadorData.labelSpinner}
          progress={progress}
          buffer={buffer}
        />
      ) : (
        <></>
      )}
    </Grid>
  );
};

export default ComparatorLayout;
