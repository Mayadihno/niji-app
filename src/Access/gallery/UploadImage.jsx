import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { v4 } from "uuid";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useState } from "react";
import { toast } from "react-toastify";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import { useNavigate } from "react-router-dom";
import { db } from "../../Firebase/firebaseConfig";
import Spinner from "../../Components/Spinner";
const UploadImage = () => {
  const [formData, setfFormData] = useState({});
  const [uploadImage, setUploadImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const storage = getStorage();
  const handleChanges = (e) => {
    setUploadImage(e.target.files[0]);
  };
  const handleChange = (e) => {
    const newInput = { [e.target.name]: e.target.value };
    setfFormData({ ...formData, ...newInput });
  };
  const { imageDesc } = formData;
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const storageRef = ref(storage, `images/${uploadImage.name + v4()}`);
      const uploadTask = uploadBytesResumable(storageRef, uploadImage);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // get the Progress Function
          const progress =
            Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          //Update Progress
          console.log(`progres is ${progress}`);
          setLoading(true);
        },
        (error) => {
          //Error Function
          console.log(error);
          toast.error(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
            //   setImageUrl(url);
            const addRef = collection(db, "images");
            await addDoc(addRef, {
              imageUrl: url,
              desc: imageDesc,
              timestamp: serverTimestamp(),
            });
            toast.success("Image Upload Successfully");
            navigate("/gallery", { replace: true });
          });
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <div className="upload">
        <div className="modal">
          <div className="streamer">
            {!loading ? (
              <Card maxW="md" className="card__bg">
                <CardHeader>Post Image of the day</CardHeader>
                <CardBody>
                  <form onSubmit={handleSubmit}>
                    <div>
                      <Input
                        type={"file"}
                        required
                        accept=".jpg,.png,.jpeg"
                        onChange={handleChanges}
                        placeholder="Upload Image"
                        sx={{ padding: "5px", cursor: "pointer" }}
                      />
                      <div className="textarea" style={{ paddingTop: "20px" }}>
                        <h3>Say somwthing about the image</h3>
                        <Textarea onChange={handleChange} name="imageDesc" />
                      </div>
                    </div>
                    <Button
                      type="submit"
                      colorScheme="whatsapp"
                      mr={3}
                      sx={{ mt: "15px" }}
                    >
                      Post Image
                    </Button>
                  </form>
                </CardBody>
              </Card>
            ) : (
              <Spinner msg={"Image Uploading do not Refresh this Page"} />
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UploadImage;
