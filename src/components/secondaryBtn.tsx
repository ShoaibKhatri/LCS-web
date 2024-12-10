import React from "react";
import { colors } from "../constants/theme";
import { Button } from "@relume_io/relume-ui";

type ButtonProps = {
  children?: React.ReactNode;
  color?: String;
  variant?: "primary" | "secondary" | "danger" | "transparent";
  border?: String;
  sx?: any;
};

const secondaryBtn: React.FC<ButtonProps> = ({ children, variant, sx }) => {
  const buttonClass = `
    ${variant === "secondary" ? colors.secondaryBtn : ""}
    ${variant === "transparent" ? colors.transparent : ""}
  `;

  return (
    <div>
      <Button
        className={`w-full rounded-xl p-3`}
        style={{ background: buttonClass, ...sx }}
      >
        {children}
      </Button>
    </div>
  );
};

export default secondaryBtn;
