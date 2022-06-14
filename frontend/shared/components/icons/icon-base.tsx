import React from "react";

export type IconTheme = "primary" | "secondary"

const Icon =
  (element: React.ReactNode) =>
  ({ theme = "primary" }: { theme?: IconTheme }) => {
    const themeClass = () => {
      switch (theme) {
        case "primary":
          return "fill-primary";
        case "secondary":
          return "fill-secondary";
        default:
          return "fill-primary";
      }
    };

    return (
      <svg
        viewBox="0 0 24 24"
        width="24px"
        height="24px"
        xmlns="http://www.w3.org/2000/svg"
        className={themeClass()}
      >
        {element}
      </svg>
    );
  };

export default Icon;
