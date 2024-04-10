import React, { useRef, useState, useEffect } from "react";
import Logo from "../Logo/trust-logo-4.png";
import { Link } from "react-router-dom";
import SignIncss from "../SignInPage/SignIn.css";
import classNames from "classnames";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function SignInForm(props) {
const {registerInfo,updateRegisterInfo}=useContext(AuthContext);


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
    FirstName: "",
    LastName: "",
    Password: "",
    DateOfBirth: "",
    Select: "",
    UpdateCheck: false,
    PrivecyPolicyCheck: false,
    
  });
  function HandleForm(event) {
    const {name,value,type,checked}=event.target
    setFormstate((prevdata) => {
      return { ...prevdata, [name]:type==="checkbox"?checked:value };
    });
  
  }

  useEffect(() => {
updateRegisterInfo(Formstate)

  },[Formstate])

  const [passwordvisibility, setpasswordvisibility] = useState(false);
  function HandlePasswordVisibility(event) {
    setpasswordvisibility((prevdata) => {
      return !prevdata;
    });
  }
  const userRef = useRef(false);
  const errorRef = useRef();
  const [validFirstName, setValidFirstName] = useState();
  const [validPassword, setValidPassword] = useState();
 
  const [inputfocus, setinputfocus] = useState();
  
  const [errMsg, setErrMsg] = useState();
  const [success, setSuccess] = useState();
  // useEffect(()=>{
  //   userRef.current.focus()
  // },[])

  useEffect(() => {
    const result = Firstname_REGEX.test(Formstate.FirstName);

    setValidFirstName(result);
  }, [Formstate.FirstName]);
  useEffect(() => {
    const result = PWD_REGEX.test(Formstate.Password);

    setValidPassword(result);
  }, [Formstate.Password]);

  useEffect(() => {
    setErrMsg("");
  }, [Formstate.FirstName, Formstate.Password]);
 
  const errClassName = classNames("font-serrif text-xs text-red-500 ");

  
  const [formconditions, setformconditions] = useState();
  useEffect(() => {
   
    if (
      validFirstName &&
      validPassword &&
      Formstate.DateOfBirth &&
      Formstate.FirstName &&
      Formstate.LastName &&
      Formstate.Password &&
      Formstate.Select &&
      Formstate.PrivecyPolicyCheck
    ) {
      setformconditions(true);
    } else {
      setformconditions(false);
    }
  }, [Formstate, validFirstName, validPassword]);
  console.log(formconditions)

  async function HandleSubmit(event) {
    event.preventDefault();
    const v1 = Firstname_REGEX.test(Formstate.FirstName);
    const v2 = PWD_REGEX.test(Formstate.Password);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    console.log(Formstate)
    setSuccess(true)
  }
console.log(Formstate)
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
              we've sent a code to
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
          {/* form */}
          <div className="w-full  h-max   flex flex-col ">
            <form
              className="SignInForm flex flex-col  w-full font-Oswald sm:w-2/3 p-1  "
              onSubmit={HandleSubmit}
            >
              {/* code */}
              <div className="relative ">
                <input
                  type="text"
                  className={classNames(
                    { "input p-2  border focus:border-red-800": !validFirstName },
                    {"input p-2 border border-gray-500":!Formstate.FirstName},
                    { "input has-value": Formstate.code},
                    { "input  border border-green-800": validFirstName }
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
              </div>
              {/* firstname */}
              <div className="flex  sm:flex-row flex-wrap  mt-5 w-full  ">
                <div className="relative w-full">
                  <input
                    type="text"
                    className={classNames("border border-gray-500",
                      
                      { "input p-2  border border-red-800": !validFirstName &&inputfocus },
                      { "input has-value": Formstate.FirstName },
                      { "input  border border-green-800": validFirstName }
                    )}
                    id="FirstInput"
                    name="FirstName"
                    onChange={HandleForm}
                    aria-required="true"
                    value={Formstate.FirstName}
                    aria-invalid={validFirstName ? "false" : "true"}
                    onFocus={() => setinputfocus(true)}
                    onBlur={() => setinputfocus(false)}
                    aria-describedby="Firstnameidnote"
                    required
                    autoComplete="off"
                    autoSave="off"
                  />

                  <span className="placeholder w-max text-greyish-0 text-base tracking-wider bg-[#ffffff]">
                    FirstName
                  </span>
                </div>
                {/* firstname note */}
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
                      inputfocus && Formstate.FirstName && !validFirstName
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
                {/* lastname */}
                <div className="w-full mt-5   relative ">
                  <input
                    type="text"
                    className={classNames(
                  "border border-gray-500",
                      { "input has-value": Formstate.LastName },
                      { "input  border border-green-800": validFirstName }
                    )}
                    id="lastnameInput"
                    name="LastName"
                    onChange={HandleForm}
                    aria-required="true"
                    value={Formstate.LastName}
                  />
                  <span className="placeholder w-max text-greyish-0 text-base tracking-wider bg-[#ffffff] ">
                    LastName
                  </span>
                </div>
              </div>

              {/* password */}
              <div className="relative mt-5">
                <input
                  type={passwordvisibility ? "text" : "password"}
                  className={classNames("border border-gray-500",
                    { "input p-2  border border-red-800": !validPassword &&inputfocus  },
                    { "input has-value": Formstate.Password },
                    { "input  border border-green-800": validPassword }
                  )}
                  id="passwordInput"
                  name="Password"
                  onChange={HandleForm}
                  onFocus={() => setinputfocus(true)}
                  onBlur={() => setinputfocus(false)}
                  required
                  aria-describedby="passwordidnote"
                  autoComplete="off"
                  aria-invalid={validPassword ? "true" : "false"}
                  value={Formstate.Password}
                />
                <span className="placeholder w-max text-greyish-0 text-base tracking-wider bg-[#ffffff]">
                  Password
                </span>
                <span className=" absolute top-1 right-2">
                  <button type="button" onClick={HandlePasswordVisibility}>
                    <i class="bi bi-eye-fill text-2xl hover:text-greyish-0"></i>
                  </button>
                </span>
              </div>
              {/* password note */}
              <div className="mt-1 w-full">
                <p
                  id="passwordidnote"
                  className={
                    inputfocus && Formstate.Password && !validPassword
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
                    className="p-2  w-full"
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
                      { "input p-2  border focus:border-red-800": !validPassword },
                      { "input p-2  border focus:border-red-800": !validFirstName },
                      { "input has-value": Formstate.DateOfBirth },
                      {"input p-2 border border-gray-500":!Formstate.DateOfBirth},
                      {
                        "input  border border-green-800":
                         Formstate.DateOfBirth,
                      }
                    )}
                    id="DateInput"
                    name="DateOfBirth"
                    onChange={HandleForm}
                    aria-required="true"
                    value={Formstate.DateOfBirth}
                  />

                  <span
                   
                    className="date-placeholder w-max text-greyish-0 text-base tracking-wider bg-[#ffffff]"
                  >
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
              <div className="flex w-full justify-end">
                <button
                
                  disabled={
                     !formconditions
                      ? true
                      : false
                  }
                  className={classNames(
                    "bg-slate-950 text-white p-2 text-lg rounded-full hover:bg-greyish-0 hover:text-slate-950 cursor-pointer",
                    { "opacity-25 pointer-events-none ": !formconditions }
                  )}
                >
                  Create Acoont
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
