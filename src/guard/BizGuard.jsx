import { useContext } from "react";
import LoginContext from "../store/loginContext";
import { Navigate } from "react-router-dom";
import ROUTES from "../routes/ROUTES";
import { Alert } from "@mui/material";

const BizGuard = ({ children }) => {
  const { login } = useContext(LoginContext);
  if (login && (login.isBusiness || login.isAdmin)) {
    return children;
  } else {
     return <Navigate to={ROUTES.LOGIN} /> ;
     /* return Alert("You are not authorized to view this page") */
  }
};

export default BizGuard;
