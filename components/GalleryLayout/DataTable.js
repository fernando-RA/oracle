import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
  } from "@chakra-ui/react";
  
  const DataTable = ({ HEADERS, children }) => {
    return (
      <Table size="lg">
        <Thead>{HEADERS}</Thead>
        <Tbody>{children}</Tbody>
        <Tfoot>{HEADERS}</Tfoot>
      </Table>
    );
  };
  export default DataTable;