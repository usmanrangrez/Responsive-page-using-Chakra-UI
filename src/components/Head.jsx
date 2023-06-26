import { Flex, Container, VStack } from "@chakra-ui/react";
import Cart from "./Cart";
import Details from "./Details";
const Head = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex
        py={[0, 10, 20]}
        h={{ base: "auto", md: "100vh" }}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <Details />
        <Cart />
      </Flex>
    </Container>
  );
};

export default Head;
