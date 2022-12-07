type Props = {
  className?: string;
};

const Footer = ({ className }: Props) => {
  return (
    <footer
      className={`text-secondary text-sm mt-4 flex justify-center bg-[#f5f6f7] ${
        className ? className : ""
      }`}
    >
      © 2022 - Rentracks
    </footer>
  );
};

export default Footer;
