import { Button, Card, CardBody, Stack } from "@chakra-ui/react";
import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import OtpInput from "otp-input-react";
import React, { useState } from "react";
import "./PhoneAuth.css";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase/firebaseConfig";

const PhoneAuth = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const [user, setUser] = useState(null);
  const [showOTP, setShowOTP] = useState(false);
  const navigate = useNavigate();

  const onCaptchVerify = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "normal",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  };

  function onSignup() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + phoneNumber;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP Send Successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        if (error.code === "auth/invalid-phone-number") {
          toast.error("Invalid Phone Number");
        }
      });
  }
  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.code);
        setLoading(false);
      });
  }
  if (user) {
    navigate("/fixtures", { replace: true });
    toast.success("You Have Login Successfully");
  }

  return (
    <React.Fragment>
      <div className="phone">
        <div id="recaptcha-container" className="recaptcha-container"></div>
        {!user && (
          <div className="phone__content">
            {!showOTP ? (
              <Card maxW="md" className="card-otp card__bg">
                <CardBody>
                  <h3>
                    <b> Welcome</b> <br /> Sign In with phone Number
                  </h3>
                  <div className="icons">
                    <i>
                      <BsTelephoneFill size={30} />
                    </i>
                  </div>
                  <p>Enter Your Phone Number Here</p>
                  <div className="phone__input">
                    <PhoneInput
                      country="gb"
                      enableAreaCodes={true}
                      onlyCountries={["gb"]}
                      preserveOrder={["onlyCountries", "preferredCountries"]}
                      value={phoneNumber}
                      onChange={setPhoneNumber}
                    />
                  </div>
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
                          loadingText=" Sending Code Via SMS"
                          colorScheme="teal"
                          variant="outline"
                          spinnerPlacement="start"
                        >
                          Sending Code Via SMS
                        </Button>
                      ) : (
                        <Button
                          onClick={onSignup}
                          colorScheme="teal"
                          variant="outline"
                        >
                          <span>Send code via SMS</span>
                        </Button>
                      )}
                    </Stack>
                  </div>
                </CardBody>
              </Card>
            ) : (
              <div className="phone__otp">
                <Card maxW="md" className="card-otp card__bg">
                  <CardBody>
                    <h3>welcome back</h3>
                    <div className="icons">
                      <i>
                        <BsFillShieldLockFill size={30} />
                      </i>
                    </div>
                    <div className="label">Enter Your OTP</div>
                    <div className="otp">
                      <OtpInput
                        OTPLength={6}
                        otpType="number"
                        value={otp}
                        onChange={setOtp}
                        disabled={false}
                        autofocus
                        className="otp-container"
                      ></OtpInput>
                    </div>
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
                            loadingText="Verifying OTP..."
                            colorScheme="teal"
                            variant="outline"
                            spinnerPlacement="start"
                          >
                            Verifying OTP
                          </Button>
                        ) : (
                          <Button
                            onClick={onOTPVerify}
                            colorScheme="teal"
                            variant="outline"
                          >
                            <span>Verify OTP</span>
                          </Button>
                        )}
                      </Stack>
                    </div>
                  </CardBody>
                </Card>
              </div>
            )}
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default PhoneAuth;
