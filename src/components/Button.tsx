import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  type?: "primary" | "secondary" | "success";
  onClick: () => void;
}

const Button = ({ children, onClick, type = "primary" }: Props) => {
  return (
    <button
      className={"btn btn-" + type}
      onClick={() => {
        onClick();
      }}
    >
      {children}
    </button>
  );
};

export default Button;
