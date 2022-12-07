import Footer from "Components/Footer/Footer";
import { memo } from "react";

type Props = {
  children: JSX.Element;
  className?: string;
  footerClassName?: string;
};

const Container = ({ children, className, footerClassName }: Props) => {
  return (
    <div className="px-4 py-6 bg-[#f5f6f7] min-h-screen">
      <div
        className={`p-4 mx-auto bg-white rounded-lg max-w-[800px] shadow-md shadow-gray-400 ${
          className ? className : ""
        }`}
      >
        {children}
      </div>
      <Footer className={`${footerClassName ? footerClassName : ""}`} />
    </div>
  );
};

export default memo(Container);
