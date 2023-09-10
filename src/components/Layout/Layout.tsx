import { Container, Flex, Link } from "@chakra-ui/react";
import { NavLink, Outlet } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Layout: React.FC = () => {
  return (
    <Flex flexDirection="column" gap={8}>
      <Flex
        height={36}
        alignItems="center"
        justifyContent="center"
        boxShadow="lg"
        position="sticky"
        bg="gray.900"
        zIndex={10}
        top={0}
        px={4}
        gap={4}
      >
        <Link
          as={NavLink}
          to="/"
        >
          <figure className="logo">
            <img src={Logo} alt="Rick & Morty logo" />
          </figure>
        </Link>
      </Flex>
      <Container maxW="container.lg" px={4} pb={8}>
        <Outlet />
      </Container>
    </Flex>
  );
};

export default Layout;
