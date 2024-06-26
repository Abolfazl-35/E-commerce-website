import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { baseUrl, postRequest } from "../../utils/services";

function VerifyEmail() {
  const { User, updateUser } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setEroor] = useState("");
  const [searchParams, setErrorSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const emailToken = searchParams.get("emailToken");
  console.log(emailToken);

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
          console.log("res", response);
          
          if (response.error) {
         
            return setEroor(response.massage);
          }
          console.log(response);
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
    <>
      {isLoading ? (
        <div className="flex justify-center items-center font-Roboto p-4 text-lg font-semibold">
          <h2>Loading...</h2>
        </div>
      ) : (
        <div className=" justify-center text-lg font-Roboto font-semibold text-green-900 items-center w-full p-5">
          {User?.isVerified ? (
            <h2>user isVerified</h2>
          ) : (
            <div className="w-full border rounded font-Roboto text-lg text-red-900 font-semibold justify-center items-center p-4">
              {error ? <h2 className="w-full text-center">{error}</h2> : null}
            </div>
          )}
        </div>
      )}
      <div className="flex justify-center items-center">
        <Link to="/">        
        <button className="bg-slate-950 text-white p-3 rounded-full">Back to MainPage</button>

        </Link>
      </div>
    </>
  );
}

export default VerifyEmail;
