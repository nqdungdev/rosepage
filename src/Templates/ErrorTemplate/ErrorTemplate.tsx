import Container from "Components/Container/Container";
import { Outlet } from "react-router-dom";

const ErrorTemplate = () => {
  return (
    <Container className="max-w-[450px]" footerClassName="text-[#333]">
      <Outlet />
    </Container>
  );
};

export default ErrorTemplate;
