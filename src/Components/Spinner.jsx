/* eslint-disable react/prop-types */
import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Dna } from "react-loader-spinner";
const Spinner = ({ msg }) => {
  return (
    <React.Fragment>
      <div className="spinner">
        <Flex
          direction={"column"}
          justifyContent="center"
          alignItems={"center"}
          height="full"
          px={10}
        >
          <Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
          <Text fontSize={25} textAlign="center" px={2} color="black">
            {msg}
          </Text>
        </Flex>
      </div>
    </React.Fragment>
  );
};

export default Spinner;
