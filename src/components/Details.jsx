import React from "react";
import {
  VStack,
  Heading,
  Text,
  SimpleGrid,
  FormControl,
  FormLabel,
  GridItem,
  Input,
  Checkbox,
  Select,
  Button,
} from "@chakra-ui/react";
const Details = () => {
  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
      <VStack spacing={3} alignItems={"flex-start"}>
        <Heading size="2xl">Your Details</Heading>
        <Text>If you have already an account click here to login</Text>
      </VStack>
      <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
        <GridItem colSpan={{ base: 2, md: 1 }}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input placeholder="Usman" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={{ base: 2, md: 1 }}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input placeholder="Rangrez" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={{ base: 2, md: 1 }}>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input placeholder="Tamil Nadu" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={{ base: 2, md: 1 }}>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input placeholder="Chennai" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={{ base: 2, md: 1 }}>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select placeholder="India">
              <option value="India">India</option>
              <option value="Usa">Usa</option>
              <option value="UK">UK</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Checkbox defaultChecked>Ship to the billing address.</Checkbox>
        </GridItem>
        <GridItem colSpan={2}>
          <Button size="lg" color="white" bgColor="green.300" width="full">
            Place order
          </Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export default Details;
