import {
  Box,
  Button,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../Firebase/firebaseConfig";

const Users = () => {
  const [data, setData] = useState([]);
  const collectionRef = collection(db, "users");

  const getData = async () => {
    const data = await getDocs(collectionRef);
    setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <React.Fragment>
      <div className="users">
        <h3>All users present </h3>
        <TableContainer>
          <Table variant="striped" colorScheme="gray">
            <TableCaption>All users present</TableCaption>
            <Thead sx={{ textAlign: "center" }}>
              <Tr>
                <Th>Email</Th>
                <Th>Fullname</Th>
                <Th>Phone Number</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody sx={{ textAlign: "center" }}>
              {data.map((data) => {
                return (
                  <Tr key={data.id}>
                    <Td>{data.email}</Td>
                    <Td>{data.fullname}</Td>
                    <Td>{data.phoneNumber}</Td>
                    <Td>
                      <Box sx={{ columnGap: "10px", display: "flex" }}>
                        <Button variant={"outline"} colorScheme="twitter">
                          Add Admin
                        </Button>
                        <Button variant={"outline"} colorScheme="red">
                          Delete User
                        </Button>
                      </Box>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </React.Fragment>
  );
};

export default Users;
