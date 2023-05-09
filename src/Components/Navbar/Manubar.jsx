import { Button } from "@chakra-ui/react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/firebaseConfig";

const Manubar = () => {
  const [pageState, setPageState] = useState(false);
  const [admin, setAdmin] = useState("");
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    await signOut(auth);
    navigate("/", { replace: true });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userEmail =
          user.email === "mayadihno12@gmail.com" ||
          user.phoneNumber === "+447405409004";
        //"+447774614335"
        setAdmin(userEmail);
        setPageState(true);
      } else {
        setPageState(false);
      }
    });
  }, [pageState]);
  return (
    <>
      {!pageState && (
        <>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-links" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/features"
            className={({ isActive }) => (isActive ? "active-links" : "")}
          >
            Sports
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-links" : "")}
          >
            About Event
          </NavLink>

          <Button
            color={"twitter"}
            variant={"outline"}
            onClick={() => navigate("/login")}
          >
            Login/Register
          </Button>
        </>
      )}
      {pageState && (
        <>
          <NavLink
            to="/fixtures"
            className={({ isActive }) => (isActive ? "active-links" : "")}
          >
            Fixtures
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) => (isActive ? "active-links" : "")}
          >
            Photo Gallery
          </NavLink>
          <NavLink
            to="/videos"
            className={({ isActive }) => (isActive ? "active-links" : "")}
          >
            Highlights
          </NavLink>
          {admin && (
            <NavLink
              to="/admin"
              className={({ isActive }) => (isActive ? "active-links" : "")}
            >
              Admin Dashboard
            </NavLink>
          )}

          <Button
            variant={"outline"}
            colorScheme="blackAlpha"
            onClick={handleClick}
          >
            Sign Out
          </Button>
        </>
      )}
    </>
  );
};

export default Manubar;
