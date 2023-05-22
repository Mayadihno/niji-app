import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import "./Enquires.css";

const Enquire = () => {
  return (
    <React.Fragment>
      <div className="enquire">
        <div className="enquire__content">
          <div className="enquire__flex">
            <div className="enquire__text">
              <h3>Yokyo Olympic Organising Committee for the 2023 Games Ltd</h3>
              <p>
                Emma Cray, Matthew Hammond and Jen Whatcott of PwC were
                appointed as joint liquidators of Birmingham Organising
                Committee for the 2022 Commonwealth Games Ltd (“the OC”) and its
                subsidiary Festival 2022 Limited (“Festival”) on 15 June 2023
                (together referred to as “the Companies”).
              </p>
              <div className="enquire__table">
                <div className="medal__stat">
                  <TableContainer>
                    <Table size="sm">
                      <Thead>
                        <Tr>
                          <Th>Date</Th>
                          <Th>Country</Th>
                          <Th>Athletes</Th>
                          <Th>Teams</Th>
                          <Th>Events</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr>
                          <Td>12 FEBRUARY - 28 FEBRUARY</Td>
                          <Td>Yokyo</Td>
                          <Td>2566</Td>
                          <Td>82</Td>
                          <Td>66</Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </TableContainer>
                </div>
              </div>
              <h4>Enquiries </h4>
              <p>
                If you have any queries regarding the Companies, please contact
                Zahra Abdul-Hussain at PricewaterhouseCoopers LLP, One
                Chamberlain Square, Birmingham, B3 3AX.
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Enquire;
