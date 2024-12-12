import { Button } from "@relume_io/relume-ui";
import React from "react";
import { colors } from "../constants/theme";

type ButtonProps = {
  children?: React.ReactNode;
  title?: String;
  color?: String;
  variant?: "primary" | "secondary" | "danger";
};

const primaryBtn: React.FC<ButtonProps> = ({ children, variant }) => {
  const buttonClass = `
    ${variant === "primary" ? colors.primaryBtn : colors.themeGradient}
  `;
  return (
    <div>
      <Button
        className={`w-full rounded-xl text-white border-0 px-4 py-3`}
        style={{ background: buttonClass }}
      >
        {children}
      </Button>
    </div>
  );
};

export default primaryBtn;
