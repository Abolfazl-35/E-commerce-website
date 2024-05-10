import React, { useRef, useState, useEffect } from "react";
import Logo from "../Logo/trust-logo-4.png";
import { Link, useNavigate } from "react-router-dom";
import SignIncss from "../SignInPage/SignIn.css";
import classNames from "classnames";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function SignInForm(props) {
  const {
    user,
    registerInfo,
    updateRegisterInfo,
    error,
    registerUser,
    isRegisterloading,
  } = useContext(AuthContext);

const navigate=useNavigate()

  const Firstname_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
  const PWD_REGEX = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  let [ResendTime, SetResendTime] = useState(15);
  function ResendCode(params) {
    let Handleinterval = setInterval((i) => {
      SetResendTime((prevdata) => {
        if (prevdata > 0) {
          return prevdata - 1;
        } else if (prevdata <= 0) {
          clearInterval(Handleinterval);
          return ResendTime;
        } else if (prevdata === 0) {
        }
      });
    }, "1000");
  }
  let [Formstate, setFormstate] = useState({
    Firstname: "",
    Lastname: "",
    password: "",
    DateOfBirth: "",
    Select: "",
    UpdateCheck: false,
    PrivecyPolicyCheck: false,
    email:props.EmailData.Email
  });
  function HandleForm(event) {
    const { name, value, type, checked } = event.target;
    setFormstate((prevdata) => {
      return { ...prevdata, [name]: type === "checkbox" ? checked : value };
    });
  }

  useEffect(() => {
    updateRegisterInfo(Formstate);
  }, [Formstate]);

  const [passwordvisibility, setpasswordvisibility] = useState(false);
  function HandlepasswordVisibility(event) {
    setpasswordvisibility((prevdata) => {
      return !prevdata;
    });
  }
  const [userExist,setUserExist] = useState(false);
  const errorRef = useRef();
  const [validFirstname, setValidFirstname] = useState();
  const [validpassword, setValidpassword] = useState();

  const [inputfocus, setinputfocus] = useState();

  const [errMsg, setErrMsg] = useState();
  const [success, setSuccess] = useState();
  useEffect(()=>{
    if (user) {
      setUserExist(true)
    }
  },[user])

  useEffect(() => {
    const result = Firstname_REGEX.test(Formstate.Firstname);

    setValidFirstname(result);
  }, [Formstate.Firstname]);
  useEffect(() => {
    const result = PWD_REGEX.test(Formstate.password);

    setValidpassword(result);
  }, [Formstate.password]);

  useEffect(() => {
    setErrMsg("");
  }, [Formstate.Firstname, Formstate.password]);

  const errClassName = classNames("font-serrif text-xs text-red-500 ");

  const [formconditions, setformconditions] = useState();
  useEffect(() => {
    if (
      validFirstname &&
      validpassword &&
      Formstate.DateOfBirth &&
      Formstate.Firstname &&
      Formstate.Lastname &&
      Formstate.password &&
      Formstate.Select &&
      Formstate.PrivecyPolicyCheck
    ) {
      setformconditions(true);
    } else {
      setformconditions(false);
    }
  }, [Formstate, validFirstname, validpassword]);
  console.log(formconditions);

  async function HandleSubmit(event) {
    event.preventDefault();
    const v1 = Firstname_REGEX.test(Formstate.Firstname);
    const v2 = PWD_REGEX.test(Formstate.password);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    console.log(Formstate);
    setSuccess(true);
  }
  console.log(Formstate);
  return (
    <>
      <div className="container h-max  mx-auto space-y-5 flex justify-center flex-col ">
        <div className="w-full flex  justify-start">
          <img alt="logo" src={Logo} width={200} height={200} className="" />
        </div>
        <div className="flex flex-col space-y-6 pl-7 w-full justify-start items-start">
          <h1 className=" font-serif  font-semibold text-3xl">
            Now let's make you a Trust Member.
          </h1>

          <div className="flex w-full space-y-3 flex-col">
            <p className="text-2xl font-serif  font-medium ">
             Email
              <br />
            </p>
            {props.EmailData.Email && (
              <p className="text-lg sm:text-xl  font-medium ">
                {props.EmailData.Email}
                <span className="">
                  <Link to="/SignIn">
                    <button className="p-1 text-gray-500 underline rounded-full">
                      Edit
                    </button>
                  </Link>
                </span>
              </p>
            )}
          </div>
          {error?.error && <h1 className=" font-Roboto text-base text-red-500 border rounded-lg p-3">{error?.massage}</h1>}
        
          {/* form */}
          <div className="w-full  h-max   flex flex-col ">
            <form
              className="SignInForm flex flex-col  w-full font-Oswald sm:w-2/3 p-1  "
              onSubmit={registerUser}
            >
              {/* code */}
              {/* <div className="relative ">
                <input
                  type="text"
                  className={classNames(
                    {
                      "input p-2  border focus:border-red-800": !validFirstname,
                    },
                    {
                      "input p-2 border border-gray-500": !Formstate.Firstname,
                    },
                    { "input has-value": Formstate.code },
                    { "input  border border-green-800": validFirstname }
                  )}
                  id="CodeInput"
                  name="code"
                  onChange={HandleForm}
                  aria-required="true"
                  value={Formstate.code}
                />
                <span className="placeholder w-max text-greyish-0 text-base tracking-wider bg-[#ffffff]">
                  Code
                </span>
                <span className=" absolute top-1 right-2">
                  <button type="button" onClick={ResendCode}>
                    <i className="bi bi-arrow-repeat text-2xl hover:text-greyish-0"></i>
                  </button>
                </span>

                {15 > ResendTime > 0 && (
                  <span className=" flex w-full text-greyish-0 font-Oswald text-base  justify-end mt-1">
                    <span className=" text-greyish-0 text-base mr-1">
                      Resend Code In:
                    </span>{" "}
                    {ResendTime}
                  </span>
                )}
              </div> */}
              {/* Firstname */}
              <div className="flex  sm:flex-row flex-wrap  mt-5 w-full  ">
                <div className="relative w-full">
                  <input
                    type="text"
                    className={classNames(
                      "border-2 h-12 border-gray-500",

                      {
                        "input p-2  border-2 border-red-800":
                          !validFirstname && inputfocus,
                      },
                      { "input has-value": Formstate.Firstname },
                      { "input  border-2 border-green-800": validFirstname }
                    )}
                    id="FirstInput"
                    name="Firstname"
                    onChange={HandleForm}
                    aria-required="true"
                    value={Formstate.Firstname}
                    aria-invalid={validFirstname ? "false" : "true"}
                    onFocus={() => setinputfocus(true)}
                    onBlur={() => setinputfocus(false)}
                    aria-describedby="Firstnameidnote"
                    autoComplete="off"
                    autoSave="off"
                  />

                  <span className="placeholder w-max text-greyish-0 text-base tracking-wider bg-[#ffffff]">
                    Firstname
                  </span>
                </div>
                {/* Firstname note */}
                <div>
                  <p
                    ref={errorRef}
                    className={classNames({ errClassName }, { "": errMsg })}
                  >
                    {errMsg}
                  </p>
                </div>
                <div className="mt-1">
                  <p
                    id="Firstnameidnote"
                    className={
                      inputfocus && Formstate.Firstname && !validFirstname
                        ? "font-serif text-sm  text-greyish-0"
                        : "hidden"
                    }
                  >
                    4 to 24 charecters.
                    <br />
                    must begin whit a letter.
                    <br />
                    letters,numbers,underscores,hyphens allowed.
                  </p>
                </div>
                {/* Lastname */}
                <div className="w-full mt-5   relative ">
                  <input
                    type="text"
                    className={classNames(
                      "border-2 h-12 border-gray-500",
                      { "input has-value": Formstate.Lastname },
                      { "input  border-2 border-green-800": validFirstname }
                    )}
                    id="LastnameInput"
                    name="Lastname"
                    onChange={HandleForm}
                    aria-required="true"
                    value={Formstate.Lastname}
                  />
                  <span className="placeholder w-max text-greyish-0 text-base tracking-wider bg-[#ffffff] ">
                    Lastname
                  </span>
                </div>
              </div>

              {/* password */}
              <div className="relative mt-5">
                <input
                  type={passwordvisibility ? "text" : "password"}
                  className={classNames(
                    "border-2 h-12 border-gray-500",
                    {
                      "input p-2  border-2 border-red-800":
                        !validpassword && inputfocus,
                    },
                    { "input has-value": Formstate.password },
                    { "input  border-2 border-green-800": validpassword }
                  )}
                  id="passwordInput"
                  name="password"
                  onChange={HandleForm}
                  onFocus={() => setinputfocus(true)}
                  onBlur={() => setinputfocus(false)}
                  
                  aria-describedby="passwordidnote"
                  autoComplete="off"
                  aria-invalid={validpassword ? "true" : "false"}
                  value={Formstate.password}
                />
                <span className="placeholder w-max text-greyish-0 text-base tracking-wider bg-[#ffffff]">
                  password
                </span>
                <span className=" absolute top-1 right-2">
                  <button type="button" onClick={HandlepasswordVisibility}>
                    <i class="bi bi-eye-fill text-2xl hover:text-greyish-0"></i>
                  </button>
                </span>
              </div>
              {/* password note */}
              <div className="mt-1 w-full">
                <p
                  id="passwordidnote"
                  className={
                    inputfocus && Formstate.password && !validpassword
                      ? "font-serif text-sm text-greyish-0"
                      : "hidden"
                  }
                >
                  atleast 8 charecters.
                  <br />
                  special charecters:
                  <span aria-label="exclamation mark">!</span>
                  <span aria-label="at symbol">@</span>
                  <span aria-label="hashtag">#</span>
                  <span aria-label="dollar sign">$</span>
                  <span aria-label="percent">%</span>
                  <br />
                  password shulde include atleast 1 number.
                </p>
              </div>

              {/* select box */}
              <div className="relative mt-5">
                <div
                  className=" flex flex-col w-full border  rounded-md border-slate-800   outline-none focus:border-red-600
          overflow-hidden   "
                >
                  <select
                    value={Formstate.Select ? Formstate.Select : "select"}
                    onChange={HandleForm}
                    className="p-2 border-2 outline-none w-full"
                    name="Select"
                  >
                    <option
                      defaultValue
                      value=""
                      className="pointer-events-none hidden "
                    >
                      Shopping Preference
                    </option>
                    <option value="Men" className="">
                      Men
                    </option>

                    <option
                      value="Women"
                      className="
           mt-1   "
                    >
                      Women
                    </option>
                  </select>
                </div>
              </div>
              {/* Date */}
              <div className="mt-5">
                <div className="relative w-full ">
                  <input
                    type="date"
                    className={classNames(
                      {
                        "input p-2 h-12  border-2 focus:border-red-800":
                          !validpassword,
                      },
                      {
                        "input p-2 h-12  border-2 focus:border-red-800":
                          !validFirstname,
                      },
                      { "input has-value": Formstate.DateOfBirth },
                      {
                        "input p-2 border border-gray-500":
                          !Formstate.DateOfBirth,
                      },
                      {
                        "input  border border-green-800": Formstate.DateOfBirth,
                      }
                    )}
                    id="DateInput"
                    name="DateOfBirth"
                    onChange={HandleForm}
                    aria-required="true"
                    value={Formstate.DateOfBirth}
                  />

                  <span className="date-placeholder w-max text-greyish-0 text-base tracking-wider bg-[#ffffff]">
                    Date Of Birth
                  </span>
                  <span className="text-greyish-0">
                    <small>Get a Trust Member Reward on your birthdat</small>
                  </span>
                </div>
              </div>
              {/* checkbox */}
              <div className="flex flex-col mt-5 space-y-3 flex-nowrap justify-start items-start">
                <div className="flex">
                  <input
                    type="checkbox"
                    name="UpdateCheck"
                    onChange={HandleForm}
                    className="max-w-[20px] mt-[.3rem] min-w-[20px] max-h-[20px] min-h-[20px] "
                    value={Formstate.UpdateCheck}
                  />
                  <div className="ml-2">
                    <span className=" font-oswald">
                      {" "}
                      Sign up emails to get updaites from Trust on
                      products,offers and your Member benefits
                    </span>
                  </div>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    name="PrivecyPolicyCheck"
                    onChange={HandleForm}
                    className="max-w-[20px] mt-[.3rem] min-w-[20px] max-h-[20px] min-h-[20px] "
                    value={Formstate.PrivecyPolicyCheck}
                  />
                  <div className="ml-2">
                    <span className=" font-oswald">
                      {" "}
                      I agree to Trust{" "}
                      <span className="mr-1 underline">
                        <Link>Privacy Policy</Link>
                      </span>
                      and
                      <span className="ml-1 underline">
                        <Link>Tersms of Use.</Link>{" "}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
             
              <div className="flex w-full p-2 justify-end">
                
                <button
                onClick={userExist?navigate("/"):null}
                  // disabled={!formconditions ? true : false}
                  className={classNames(
                    "bg-slate-950 mt-3  text-white p-2 text-lg rounded-full hover:bg-greyish-0 hover:text-slate-950 cursor-pointer",
                    { " ": !formconditions }
                  )}
                >
                  {isRegisterloading
                    ? "Creating your account..."
                    : "Create Acoont"}
                    
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignInForm;
