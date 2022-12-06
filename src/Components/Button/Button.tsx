import { MouseEvent } from "react";

type Props = {
  children: JSX.Element | string;
  className?: string;
  id?: string;
  onActive?: (event: MouseEvent<HTMLButtonElement>) => void;
  onSearch?: () => void;
};

const Button = ({ children, className, id, onActive, onSearch }: Props) => {
  return (
    <button
      id={id ? `${id}` : undefined}
      className={`px-4 py-2 mr-1 text-sm border-solid border-[1px] border-primary text-primary rounded-full hover:text-white hover:bg-primary ${
        className ? className : ""
      }`}
      onClick={onSearch ? onSearch : onActive ? onActive : undefined}
    >
      {children}
    </button>
  );
};

export default Button;
