import React from "react";
import { colors } from "../constants/theme";
import { Button } from "@relume_io/relume-ui";
import { Link } from "react-router-dom";

type ButtonProps = {
  children?: React.ReactNode;
  color?: String;
  variant?: "primary" | "secondary" | "danger" | "transparent";
  border?: String;
  sx?: any;
  path?: string;
};

const secondaryBtn: React.FC<ButtonProps> = ({
  children,
  variant,
  sx,
  path = "/",
}) => {
  const buttonClass = `
    ${variant === "secondary" ? colors.secondaryBtn : ""}
    ${variant === "transparent" ? colors.transparent : ""}
  `;

  return (
    <Link to={path}>
      <Button
        className={`w-full rounded-xl p-3`}
        style={{ background: buttonClass, ...sx }}
      >
        {children}
      </Button>
    </Link>
  );
};

export default secondaryBtn;
