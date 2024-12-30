import { Button } from "@relume_io/relume-ui";
import React from "react";
import { colors } from "../constants/theme";
import { Link } from "react-router-dom";

type ButtonProps = {
  children?: React.ReactNode;
  title?: String;
  color?: String;
  variant?: "primary" | "secondary" | "danger";
  path?: string;
};

const primaryBtn: React.FC<ButtonProps> = ({
  children,
  variant,
  path = "/",
}) => {
  const buttonClass = `
    ${variant === "primary" ? colors.primaryBtn : colors.themeGradient}
  `;
  return (
    <Link to={path}>
      <Button
        className={`w-full rounded-xl text-white border-0 px-4 py-3`}
        style={{ background: buttonClass }}
      >
        {children}
      </Button>
    </Link>
  );
};

export default primaryBtn;
