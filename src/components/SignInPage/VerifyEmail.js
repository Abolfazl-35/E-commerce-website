import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { baseUrl, postRequest } from "../../utils/services";
import Logo from "../Logo/trust-logo-4.png";
import CircularProgress from '@mui/material/CircularProgress';

function VerifyEmail() {
  const { User, updateUser } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setEroor] = useState("");
  const [searchParams, setErrorSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const emailToken = searchParams.get("emailToken");


  useEffect(() => {
    (async () => {
      if (User?.isVerified) {
        setTimeout(() => {
          return navigate("/");
        }, 3000);
      } else {
        if (emailToken) {
          setIsLoading(true);
          const response = await postRequest(
            `${baseUrl}/users/verify-email`,
            JSON.stringify({ emailToken })
          );
          setIsLoading(false);
       
          
          if (response.error) {
         
            return setEroor(response.massage);
          }
        
          updateUser(response);
        }
        if (!emailToken) {
          setIsLoading(true);
          const response = await postRequest(
            `${baseUrl}/users/verify-email`,
            JSON.stringify({ emailToken })
           
          );
          setIsLoading(false); 
          if (response.error) {
            return setEroor(response.massage)
          }
        }
      }
    })();
  }, [emailToken, User]);

  return (
    <div className=" container mx-auto">
      <div>
      <a href="./" className="">
              <img
                src={Logo}
                className="max-w-full max-h-full"
                width={100}
                height={90}
                alt="logo"
              />
            </a>
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center font-Roboto p-4 text-lg font-semibold">
          <h2>Loading...</h2>
        </div>
      ) : (
        <div className="  justify-center text-lg font-Roboto font-semibold text-green-900 items-center w-full p-10 mt-6 border rounded shadow">
          {User?.isVerified ? (
            <h2 className="w-full text-center">Your Email has been Verified</h2>
          ) : (
            <div className="w-full border rounded font-Roboto text-lg text-red-900 font-semibold justify-center items-center p-4">
              {error ? <h2 className="w-full text-center">{error}</h2> : null}
            </div>
          )}
        </div>
      )}

      <div className="flex justify-center items-center">
   
        <Link to="/">        
        <button className="bg-slate-950 flex justify-between space-x-4 items-center text-white h-16 p-3 mt-8 rounded-full">
          <span>Directing to main page...</span>
          <span className="">
              <CircularProgress size={24} sx={{marginTop:"7px"}}   />
          </span>
        
        </button>

        </Link>
      </div>
    </div>
  );
}

export default VerifyEmail;
