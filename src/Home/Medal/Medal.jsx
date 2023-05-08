/* eslint-disable react/jsx-key */
import {
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
import React from "react";
import { data } from "./medalData";
import "./Medal.css";

const Medal = () => {
  return (
    <React.Fragment>
      <div className="medal">
        <div className="medal__content">
          <div className="medal__heading">
            <h2>Medal Standing</h2>
          </div>
          <div className="medal__flex">
            <div className="medal__table">
              <TableContainer>
                <Table variant="striped" colorScheme="gray">
                  <TableCaption>
                    <div className="button">
                      <Button variant={"solid"} colorScheme="linkedin">
                        Load More
                      </Button>
                    </div>
                  </TableCaption>
                  <Thead style={{ textAlign: "center" }}>
                    <Tr>
                      <Th>Pos</Th>
                      <Th>Team</Th>
                      <Th className="gold">Gold</Th>
                      <Th className="silva">Silver</Th>
                      <Th className="bronze">Bronze</Th>
                      <Th>Total</Th>
                    </Tr>
                  </Thead>
                  <Tbody style={{ textAlign: "center" }}>
                    {data.map((item) => {
                      return (
                        <Tr key={item.id}>
                          <Td>{item.id}</Td>
                          <Td>
                            <span>
                              <img
                                src={item.logo}
                                alt=""
                                className="logoImage"
                              />
                              {item.team}
                            </span>
                          </Td>
                          <Td>{item.gold}</Td>
                          <Td>{item.silva}</Td>
                          <Td>{item.bronze}</Td>
                          <Td>{item.total}</Td>
                        </Tr>
                      );
                    })}
                  </Tbody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Medal;
