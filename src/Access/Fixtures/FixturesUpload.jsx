import {
  Button,
  Card,
  CardBody,
  Select,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../../Pages/Features/featureData";
import { db } from "../../Firebase/firebaseConfig";
import "./Fixtures.css";
const FixturesUpload = () => {
  const [category, setCategory] = useState("Choose Sport");
  const [fixtures, setFixtures] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  const formData = {
    categories: category,
    id: `${Date.now()}`,
    matchFixtures: fixtures,
    timeStamp: serverTimestamp(),
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await setDoc(doc(db, "fixtures", `${Date.now()}`), formData);
    navigate("/fixtures", { replace: true });
    e.target.reset();
  };
  return (
    <React.Fragment>
      <div className="fixtures__upload">
        <div className="result">
          <Card maxW="md" className="card__select">
            <CardBody>
              <h3>Upload Fixtures</h3>
              <p style={{ paddingBottom: "5px" }}>Choose Sport</p>
              <form onSubmit={handleSubmit}>
                <Select placeholder={category} onChange={handleChange} required>
                  {data &&
                    data.map((data) => {
                      return (
                        <option
                          key={data.id}
                          value={data.name.toLowerCase()}
                          // onClick={() => setCategory(data.sport)}
                        >
                          {data.name}
                        </option>
                      );
                    })}
                </Select>

                <Textarea
                  placeholder="Enter Match of the day"
                  mt={"20px"}
                  required
                  value={fixtures}
                  onChange={(e) => setFixtures(e.target.value)}
                />
                <div className="button">
                  <Stack
                    align="center"
                    padding={"20px 0px"}
                    display={"flex"}
                    justifyContent={"center"}
                  >
                    {loading ? (
                      <Button
                        isLoading
                        loadingText="Uploading Fixtures..."
                        colorScheme="teal"
                        variant="outline"
                        spinnerPlacement="start"
                      >
                        Uploading Fixtures...
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        colorScheme="whatsapp"
                        variant="solid"
                      >
                        <span>Post matches</span>
                      </Button>
                    )}
                  </Stack>
                </div>
              </form>
            </CardBody>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FixturesUpload;
