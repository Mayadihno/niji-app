/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./Gallery.css";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Flex,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import { onAuthStateChanged } from "firebase/auth";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useState, useEffect, useRef } from "react";
import { HiTrash } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth, db } from "../../Firebase/firebaseConfig";
import Spinner from "../../Components/Spinner";

const Gallery = () => {
  const [post, setPost] = useState(null);
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const initRef = useRef();

  const userDocREf = query(
    collection(db, "images"),
    orderBy("timestamp", "desc")
  );

  const getFunc = async () => {
    onSnapshot(userDocREf, (snapshot) => {
      setPost(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoading(true);
    });
  };

  const handleDelete = async (PostId) => {
    try {
      await deleteDoc(doc(db, "images", PostId));
      const updatePost = post.filter((post) => post.id !== PostId);
      setPost(updatePost);
      toast.success("Successfully deleted the Post");
      navigate("/gallery", { replace: true });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getFunc();
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userEmail =
          user.email === "mayadihno12@gmail.com" ||
          user.phoneNumber === "+447405409004";
        setAdmin(userEmail);
      }
    });
  }, []);
  return (
    <React.Fragment>
      <div className="gallery">
        <div className="backgroundImage"></div>
        <div className="back__text">
          <div className="date">May 12th-May 25th 2023</div>
          <h3>
            Tokyo <br /> Olympic 2023
          </h3>
        </div>
        <div className="gallerys">
          <h3 style={{ fontStyle: "italic" }}>
            Athlete's and Eye catching Image of the Events
          </h3>
          {!loading ? (
            <Flex justifyContent={"center"} alignItems="center">
              <Spinner msg={"Image  Loading...."} />
            </Flex>
          ) : (
            <div className="gallery__card">
              {post &&
                post.map((data) => {
                  return (
                    <div className="cardPost" key={data?.imageUrl}>
                      <Card maxW="sm">
                        <Image
                          src={data?.imageUrl}
                          alt="Event Image"
                          borderRadius="lg"
                        />
                        <CardBody>
                          <h6 style={{ fontWeight: 700 }}>
                            Image Description:
                          </h6>
                          <Flex
                            alignItems="center"
                            justifyContent={"space-between"}
                            columnGap={"10px"}
                          >
                            <p>{data?.desc}</p>
                            {admin && (
                              <Box>
                                <Popover closeOnEsc initialFocusRef={initRef}>
                                  {({ onClose }) => (
                                    <>
                                      <PopoverTrigger>
                                        <Button colorScheme={"red"}>
                                          <HiTrash fontSize={23} color="#fff" />
                                        </Button>
                                      </PopoverTrigger>
                                      <PopoverContent
                                        style={{
                                          backgroundColor: "#2D3748",
                                          color: "white",
                                        }}
                                      >
                                        <PopoverArrow />
                                        <PopoverCloseButton />
                                        <PopoverHeader>
                                          Confirmation!
                                        </PopoverHeader>
                                        <PopoverBody fontSize={13}>
                                          Are you sure you want to Delete this
                                          Image?
                                        </PopoverBody>
                                        <PopoverFooter
                                          display="flex"
                                          justifyContent="flex-end"
                                        >
                                          <ButtonGroup size="sm">
                                            <Button
                                              variant="outline"
                                              onClick={onClose}
                                              ref={initRef}
                                            >
                                              No
                                            </Button>
                                            <Button
                                              colorScheme="red"
                                              onClick={() =>
                                                handleDelete(data?.id)
                                              }
                                            >
                                              Yes
                                            </Button>
                                          </ButtonGroup>
                                        </PopoverFooter>
                                      </PopoverContent>
                                    </>
                                  )}
                                </Popover>
                              </Box>
                            )}
                          </Flex>
                        </CardBody>
                      </Card>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Gallery;
