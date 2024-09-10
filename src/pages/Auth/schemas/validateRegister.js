import * as yup from "yup";
const regex_validation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
export const validateRegister = yup.object().shape({
  name: yup.string().required("Name Field is Required !!"),
  email: yup.string().email("Please Enter Valide Email").required("Email Field is Required !!"),
  password: yup.string().min(6).matches(regex_validation, {"message" : "Please MAKE iT STRONG PASSWORD"}).required("The Pass Wor d is Required"),
});
