import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";

import sanity from "lib/fe/sanity";
import { getAllProducts } from "queries/product";

import Layout from "components/Layout";

import { Product } from "components/Product";

export const Products = ({ products }) => {
  const subtitleText = mode("gray.600", "gray.400");
  return (
    <Layout id="Products">
      <Box bg="gray.50" as="section" pt="48" pb="12">
        <Box
          maxW={{ base: "xl", md: "2xl", lg: "7xl" }}
          mx="auto"
          px={{ base: "6", md: "8" }}
        >
          <Box textAlign="center" maxW="lg" mx="auto">
            <Heading size="2xl" fontWeight="extrabold" letterSpacing="tight">
              Our Products
            </Heading>
            <Text mt="4" fontSize="lg" color={subtitleText}>
              Enjoy our gallery of products tailored to each role that we hire
              for at VACentral, made in house!
            </Text>
          </Box>
          <SimpleGrid mt="14" columns={{ base: 1, lg: 3 }} spacing="14">
            {products?.map((product, index) => (
              <Product preview key={index} {...product} />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Layout>
  );
};

export async function getServerSideProps() {
  return {
    props: {
      products: await sanity.fetch(getAllProducts),
    },
  };
}

export default Products;
