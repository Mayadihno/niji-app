import React from "react";
import "./Features.css";
import data from "./featureData";
import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
const Features = () => {
  return (
    <React.Fragment>
      <div className="features">
        <div className="backgroundImage"></div>
        <div className="back__text">
          <div className="date">May 12th-May 25th 2023</div>
          <h3>
            Tokyo <br /> Olympic 2023
          </h3>
        </div>
        <div className="features__content">
          <div className="features__text">
            <h3>Features Games</h3>
          </div>
          <div className="feature__grid">
            <div className="features__grid">
              <div className="features__card">
                {data.map((item) => {
                  return (
                    <div className="" key={item.id}>
                      <Card maxW="md" className="card__bg">
                        <CardHeader>
                          <Flex
                            justifyContent={"space-between"}
                            alignItems="center"
                            spacing="4"
                          >
                            <Box>
                              <Text>{item.name}</Text>
                            </Box>
                            <Avatar src={item.flyer} />
                          </Flex>
                        </CardHeader>
                        <CardBody>
                          <Text mb={"10px"}>{item.date}</Text>
                          <Heading className="headCapital" fontSize={"35px"}>
                            {item.topic}
                          </Heading>
                        </CardBody>
                        <Image
                          objectFit="cover"
                          src={item.image}
                          alt="Sport image"
                        />
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Features;
