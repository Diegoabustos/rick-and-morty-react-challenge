
import { Container, Flex } from '@chakra-ui/react'
import { Outlet } from "react-router-dom";


const Layout: React.FC = () => {
  return (
    <Flex flexDirection="column" gap={8}>
      <Container maxW="container.lg" px={4} pb={8}>
        <Outlet />
      </Container>
    </Flex>
  );
};

export default Layout;
