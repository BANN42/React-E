import * as yup from "yup";
const regex_validation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
export const validateLogin = yup.object().shape({
  email: yup.string().email("Please Enter Valide Email").required("Email Field is Required !!"),
  password: yup.string().min(6).matches(regex_validation, {"message" : "please Make it Strong password"}).required("the Password is Required"),
});
// create Register Schema

