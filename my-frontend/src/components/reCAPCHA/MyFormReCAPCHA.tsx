import React, { forwardRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

interface MyFormReCAPTCHAProps {
  siteKey: string;
}

const MyFormReCAPTCHA = forwardRef<ReCAPTCHA, MyFormReCAPTCHAProps>(({ siteKey }, ref) => {
  return (
    <ReCAPTCHA
      ref={ref}
      sitekey={siteKey}
    />
  );
});

export default MyFormReCAPTCHA;
