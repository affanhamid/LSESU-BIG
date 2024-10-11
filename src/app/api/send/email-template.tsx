import * as React from "react";

interface EmailTemplateProps {
  otp: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  otp,
}) => (
  <div>
    <p>
      Your OTP code is: <strong>{otp}</strong>
    </p>
    <p>Please use this code to complete your verification process.</p>
  </div>
);
