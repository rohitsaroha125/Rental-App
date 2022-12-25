import React from "react";
import tw from "tailwind-styled-components";

type ButtonProps = {
  theme?: "Filled" | "Outlined";
  label: string;
  wtFull?: boolean;
  margin?: boolean;
  handleClick?: (e: React.MouseEvent) => void;
};

const BaseButton = tw.button`
    px-5
    py-3
    outline-none
    rounded-md
    text-white
    text-sm
    font-semibold
    border-transparent
    border-2
    border-solid
    focus:outline-none
    transition-all
    duration-200
    ease-in-out
    m-1
`;

const FilledButton = tw(BaseButton)`
    bg-red-500
    hover:bg-transparent
    hover:text-red-500
    hover:border-red-500
`;

const OutlinedButton = tw(BaseButton)`
    border-red-500
    text-red-500
    bg-transparent
    hover:bg-red-500
    hover:text-white
    hover:border-transparent
`;

const Button: React.FC<ButtonProps> = (props) => {
  if (props.theme === "Filled") {
    return (
      <FilledButton
        style={
          props.wtFull
            ? { width: "100%", margin: "0px" }
            : !props.margin
            ? { margin: "0px" }
            : {}
        }
        onClick={props.handleClick}
      >
        {props.label}
      </FilledButton>
    );
  }

  return (
    <OutlinedButton
      onClick={props.handleClick}
      style={
        props.wtFull
          ? { width: "100%", margin: "0px" }
          : !props.margin
          ? { margin: "0px" }
          : {}
      }
    >
      {props.label}
    </OutlinedButton>
  );
};

export default Button;
