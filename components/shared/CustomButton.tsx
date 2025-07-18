"use client";

import Link from "next/link";
import { MouseEventHandler, ReactNode } from "react";

export interface CustomButtonProps {
  title: string | ReactNode;
  btnType: "button" | "submit";
  textStyles?: string;
  containerStyles?: string;
  to?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const CustomButton = ({
  title,
  btnType = "button",
  containerStyles,
  onClick,
  textStyles,
  to,
}: CustomButtonProps) => {
  // Eğer to varsa ve btnType "button" ise Link ile renderla, yoksa sadece button renderla
  if (btnType === "button" && to) {
    return (
      <Link href={to} target="_blank">
        <button
          type={btnType}
          className={`my-4 py-3 px-6 rounded-md font-semibold border ${containerStyles}`}
          onClick={onClick}>
          <span className={`${textStyles}`}>{title}</span>
        </button>
      </Link>
    );
  }

  return (
    <button
      type={btnType}
      className={`my-4 py-3 px-6 rounded-md font-semibold border ${containerStyles}`}
      onClick={onClick}>
      <span className={`${textStyles}`}>{title}</span>
    </button>
  );
};

export default CustomButton;