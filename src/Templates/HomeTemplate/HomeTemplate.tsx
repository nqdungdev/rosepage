import Container from "Components/Container/Container";
import { Outlet } from "react-router-dom";

const HomeTemplate = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default HomeTemplate;
