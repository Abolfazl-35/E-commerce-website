import React, { useContext, useEffect, useState } from "react";
import classNames from "classnames";
import Logo from "../Logo/trust-logo-4.png";
import "./Login.css";
import { AuthContext } from "../../context/AuthContext";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";
function Login() {
  const usenavigate = useNavigate();
  const { updateLoginInfo, loginUser, error, user,isLoginloading } = useContext(AuthContext);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  function HandleLoginForm(event) {
    setLoginForm((prevdata) => {
      return { ...prevdata, [event.target.name]: event.target.value };
    });
  }
  const [userExist,setUserExist] = useState(false);


useEffect(()=>{
setUserExist(() => {
  if(user) return true
 
})
},[user])


  useEffect(() => {
    updateLoginInfo(loginForm);
  }, [loginForm]);

  const [loginPasswordVisibility, setLoginPasswordVisibility] = useState(false);

  function LoginPasswordVisible() {
    setLoginPasswordVisibility((prevdata) => {
      return !prevdata;
    });
  }
  console.log(loginPasswordVisibility);

  return (
    <div className="flex w-full sm:mx-auto justify-center  ">
      <div className="flex w-full sm:w-2/3  justify-center flex-col  flex-wrap items-center  mt-5   ">
        <div className="logo flex w-full  justify-center items-center">
          <a href="#" className="">
            <img
              src={Logo}
              className="max-w-full max-h-full"
              width={100}
              height={100}
              alt="logo"
            />
          </a>
        </div>
        <div className="flex font-Roboto text-red-900 font-semibold text-lg">
          <h1>{error?.massage}</h1>
        </div>
        <form
          onSubmit={loginUser}
          className="w-2/3 flex justify-center flex-col border rounded  p-5  items-center"
          id="login_form"
        >
          <div className="p-3 pb-2 font-Roboto font-semibold text-lg pl-0 w-full">
            <h1>Email Adress :</h1>
          </div>

          <div className="relative w-full h-max">
            <input
              type="email"
              className={classNames(
                "border border-gray-500 rounded p-1 outline-none w-full  h-[3rem]",
                { "has-value": loginForm.email }
              )}
              id="FirstInput"
              name="email"
              onChange={HandleLoginForm}
              //   aria-required="true"
              value={loginForm.email}
              // aria-invalid={""}
              // onFocus={""}
              // onBlur={""}
              aria-describedby="Firstnameidnote"
              autoComplete="on"
              autoSave="on"
            />

            <span className="login-placeholder w-max  text-greyish-0 text-base tracking-wider bg-[#ffffff]">
              Email
            </span>
          </div>
          <div className="p-3 pt-4 font-Roboto font-semibold text-lg mt-3 pl-0 w-full">
            <h1>Password :</h1>
          </div>
          <div className="relative w-full h-max">
            <input
              type={loginPasswordVisibility ? "text" : "password"}
              className={classNames(
                "border border-gray-500 rounded p-1 outline-none w-full  h-[3rem]",
                { "has-value": loginForm.password }
              )}
              name="password"
              onChange={HandleLoginForm}
              aria-required="true"
              value={loginForm.password}
              // aria-invalid={""}
              // onFocus={""}
              // onBlur={""}
              aria-describedby="Firstnameidnote"
              autoComplete="off"
              autoSave="off"
            />

            <span className="login-placeholder w-max  text-greyish-0 text-base tracking-wider bg-[#ffffff]">
              Password
            </span>
            <span
              onClick={LoginPasswordVisible}
              className="password-placeholder absolute right-2 top-[0.7rem] "
            >
              {loginPasswordVisibility && <VisibilityOffIcon />}
              {!loginPasswordVisibility && <VisibilityIcon />}
            </span>
          </div>
          <div className="flex justify-center items-center w-full p-3 mt-5 border-t">
            <button
              onClick={userExist ? usenavigate("/") : null}
              className=" w-full bg-slate-950 text-lg text-white font-Roboto p-3 rounded-3xl hover:bg-white hover:text-black"
            >
             {isLoginloading?"Loading...":"login"}
            </button>
          </div>
          <div className="flex flex-col  w-full justify-between pt-3 items-center mt-5 font-Roboto text-lg font-semibold">
            <p>Sign up</p>
            <p className="">
              Forget your <span>password?</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
