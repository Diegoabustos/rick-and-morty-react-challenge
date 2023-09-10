
import { Container, Flex, Link } from '@chakra-ui/react'
import { NavLink, Outlet } from "react-router-dom";


const Layout: React.FC = () => {
  return (
    <Flex flexDirection="column" gap={8}>
      <Flex
        height={16}
        alignItems="center"
        justifyContent="center"
        boxShadow="lg"
        position="sticky"
        bg="gray.800"
        zIndex={10}
        top={0}
        px={4}
        gap={4}
      >
        <Link
          as={NavLink}
          to="/"
          color="white"
        >
          Home
        </Link>

      </Flex>
      <Container maxW="container.lg" bg="red.200" px={4} pb={8}>
        <Outlet />
      </Container>
    </Flex>
  );
};

export default Layout;
