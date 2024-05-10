import React, { useEffect, useRef, useState } from "react";
import Logo from "../Logo/trust-logo-4.png";
import SignIncss from "../SignInPage/SignIn.css";
import { Link } from "react-router-dom";
import classNames from "classnames";

function SignIn(props) {
  const notValidEmail = useRef();
  // const [EmailData,setEmailData]=useState({Email:""})
  // console.log(EmailData)
  // function HandleEmail(event) {

  // setEmailData((prevformdata=>{
  //     return {...prevformdata,
  //     [event.target.name]:event.target.value}
  //   }))

  // }
  // useEffect(()=>{
  // const emailinpute=document.getElementById("EmailInput")
  //   if (props.EmailData.Email!=="") {
  //     emailinpute.classList.add("has-value")
  //   }else if (props.EmailData.Email==="") {
  //     emailinpute.classList.remove("has-value")
  //   }

  // },[props.EmailData])
  const [validInput, setValidInput] = useState(true);
  function checkEmailInput(e) {
    if (!props.EmailData.Email) {
      notValidEmail.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
      setValidInput(false);
      setTimeout(() => {
        setValidInput(true);
      }, "2000");
    }
  }
  console.log(props);
  console.log(validInput);

  return (
    <>
      <div
        className="container flex w-full flex-col mx-auto p-1
         font-serif items-center justify-center bg-[#ffffff]"
      >
        <div className="w-full sm:w-3/4 md:w-2/4 flex flex-col justify-center items-center">
          <div className="logo flex w-full  justify-center items-center">
            <a href="#" className="">
              <img
                src={Logo}
                className="max-w-full max-h-full"
                width={80}
                height={70}
                alt="logo"
              />
            </a>
          </div>
          <div
            className={classNames(
              { " block font-Roboto ": !validInput },
              { hidden: validInput }
            )}
          >
            <p>Plz Enter Your Email</p>
          </div>
          <div className="flex flex-col p-3 w-full  justify-center items-start space-y-6 text-lg sm:text-xl font-Oswald font-semibold">
            <h1 className="p-1 w-max font-medium text-xl">
              Enter your email to join us or sign in
            </h1>

            <form
              ref={notValidEmail}
              className="SignInEmail flex  p-1 items-start justify-center w-full "
              id="SignInForm"
            >
              <div className="w-full h-full relative">
                <input
                  type="text"
                  className={classNames(
                    {
                      "input w-full  p-2 border-2  rounded-md border-slate-800  outline-none focus:border-red-600":
                        !props.EmailData.Email,
                    },
                    {
                      "input has-value w-full  p-2  border-2  rounded-md border-slate-800  outline-none focus:border-red-600":
                        props.EmailData.Email,
                    }
                  )}
                  id="EmailInput"
                  name="Email"
                  onChange={props.HandleEmail}
                  required
                  value={props.EmailData.Email}
                />
                <span
                  htmlFor="Email"
                  className="placeholder absolute w-max text-greyish-0 text-base tracking-wider bg-[#ffffff]"
                >
                  Email
                </span>
              </div>
            </form>
            <p className=" text-greyish-0 font-medium">
              By continuing, I agree to Trust's{" "}
              <Link className=" underline">Privecy Policy</Link> and{" "}
              <Link className=" underline">Terms of Use</Link>
            </p>
            <Link to={props.EmailData.Email ? "/SignInForm" : null}
            onClick={checkEmailInput}>
              <button className="text-white bg-slate-950 p-3 w-full rounded-full ">
                Continue
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
