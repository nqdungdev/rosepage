import { memo } from "react";

type Props = {
  children: JSX.Element;
};

const Container = ({ children }: Props) => {
  console.log(4);
  return (
    <div className="px-4 py-6 bg-[#f5f6f7]">
      <div className="p-4 mx-auto bg-white rounded-lg max-w-[800px] shadow-md shadow-gray-400">
        {children}
      </div>
    </div>
  );
};

export default memo(Container);
