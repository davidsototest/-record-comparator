import React, { useEffect, useRef } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import {
  Box,
  TextField,
  Grid,
  Button,
  Typography,
  SxProps,
  Theme,
  useTheme,
} from "@mui/material";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import SubTitlePrimary from "../components/titles/SubTitlePrimary";
import { MaxWidth } from "../pages/measures";
import { FormData, useServices } from "../context/ServiceContext";
import MyFormReCAPCHA from "../components/reCAPCHA/MyFormReCAPCHA";
import ReCAPTCHA from "react-google-recaptcha";
import Spinner from "../components/spinner/Spinner";
import { initScrollRevealHeadline } from "../theme/scrollRevealConfig";

const FormLayout: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const { sendFormContact, isLoading } = useServices();
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const siteKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;
  const theme = useTheme();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const recaptchaValue = recaptchaRef.current?.getValue();

    if (!recaptchaValue) {
      alert("Por favor completa el reCAPTCHA");
      return;
    }
    try {
      await sendFormContact({ ...data, recaptcha: recaptchaValue });
      reset(); // limpio el formulario
      recaptchaRef.current?.reset(); // limpio reCAPTCHA
    } catch (error) {
      alert("There was a problem with the submission: " + error);
    }
  };

  // estilos del textField
  const textFieldStyles: SxProps<Theme> = {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.primary.main, // Color del borde cuando no está enfocado
      },
      "&:hover fieldset": {
        borderColor: theme.palette.primary.light, // Color del borde al pasar el mouse por encima
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.primary.main, // Color del borde cuando está enfocado
      },
    },
    "& .MuiInputLabel-root": {
      color: theme.palette.primary.main, // Color del label
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: theme.palette.primary.main, // Color del label cuando está enfocado
    },
    "& .MuiFormHelperText-root": {
      color: "red", // Color del texto de ayuda
    },
  };

   //efectos de scrollReveal
   useEffect(() => {
    initScrollRevealHeadline();
  }, []);

  return (
    <Box 
      sx={{ 
        maxWidth: {
          xs: "88%",
          sm: "70%",
          md: "50%"
        }, 
        margin: "auto" 
      }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ padding: 2 }}>
          <Box
            sx={{ marginBottom: 5, justifyContent: "center", display: "flex" }}
          >
            <SubTitlePrimary title="Formulario de Contacto" />
          </Box>

          <Grid container spacing={2} className="reveal">
            <Grid item xs={12} md={6}>
              <Controller
                name="name"
                control={control}
                defaultValue=""
                rules={{ required: "Nombre es requerido" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Nombre"
                    variant="outlined"
                    fullWidth
                    error={!!errors.name}
                    helperText={errors.name ? errors.name.message : ""}
                    sx={textFieldStyles}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Controller
                name="phone"
                control={control}
                defaultValue=""
                rules={{
                  required: "Teléfono es requerido",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Minimo 10 digitos",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Teléfono "
                    variant="outlined"
                    fullWidth
                    error={!!errors.phone}
                    helperText={errors.phone ? errors.phone.message : ""}
                    sx={textFieldStyles}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                  required: "Email es requerido",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Por favor ingrese un email valido",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Email"
                    variant="outlined"
                    fullWidth
                    error={!!errors.email}
                    helperText={errors.email ? errors.email.message : ""}
                    sx={textFieldStyles}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <Controller
                name="message"
                control={control}
                defaultValue=""
                rules={{ required: "Mensaje es requerido" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Mensaje"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={5}
                    error={!!errors.message}
                    helperText={errors.message ? errors.message.message : ""}
                    sx={textFieldStyles}
                  />
                )}
              />
            </Grid>
          </Grid>

          <Box sx={{ marginTop: 5, justifyContent: "center", display: "flex" }} className="reveal">
            <MyFormReCAPCHA ref={recaptchaRef} siteKey={siteKey || ""} />
          </Box>
          <Box
            sx={{
              marginTop: 4,
              marginBottom: 10,
              justifyContent: "center",
              display: "flex",
            }}
          >
            <ButtonPrimary
              label="Enviar Formulario"
              onClic={handleSubmit(onSubmit)}
              clic={() => {}}
            />
          </Box>
        </Box>
      </form>
      {isLoading ? (
        <Spinner label="Enviando..." buffer={0} progress={0} />
      ) : (
        <></>
      )}
    </Box>
  );
};

export default FormLayout;
