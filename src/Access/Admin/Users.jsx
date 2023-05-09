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
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../Firebase/firebaseConfig";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const [data, setData] = useState([]);
  const collectionRef = collection(db, "users");
  const navigate = useNavigate();

  const getData = async () => {
    const data = await getDocs(collectionRef);
    setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  const deleteUser = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
      const filteed = data.filter((item) => item.id !== id);
      setData(filteed);
      toast.success("One User deleted");
      navigate("/admin");
    } catch (error) {
      console.log(error.message);
    }
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
                <Th>Country</Th>
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
                    <Td>{data.country}</Td>
                    <Td>{data.phoneNumber}</Td>
                    <Td>
                      <Box sx={{ columnGap: "10px", display: "flex" }}>
                        <Button
                          variant={"solid"}
                          colorScheme="red"
                          onClick={() => deleteUser(data.id)}
                        >
                          Remove User
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
