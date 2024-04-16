import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useSearchParams, useNavigate } from "react-router-dom";
import { baseUrl, postRequest } from "../../utils/services";

function VerifyEmail() {
  const { user, updateUser } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setEroor] = useState(false);
  const [searchParams, setEroorSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const emailToken = searchParams.get("emailToken");
  console.log(emailToken);
  console.log(user)
  useEffect(() => {
    (async () => {
      if (user?.isVerified) {
        setTimeout(() => {
          return navigate("/");
        });
      } else {
        if (emailToken) {
          setIsLoading(true);
          const response = await postRequest(
            `${baseUrl}/users/verify-email`,
            JSON.stringify({ emailToken })
          )
          setIsLoading(false)
          console.log("res", response)
          if (response.error) {
            return setEroor(response);
          }
          console.log(response)
          updateUser(response)
        }
      }
    })();
  }, [emailToken, user]);

  return (
    <>
      {isLoading ? (
        <div>
          <h2>Loading</h2>
        </div>
      ) : (
        <div>
          {user?.isVerified ? (
            <h2>user isVerified</h2>
          ) : (
            <div>{error.error ? <h2>error</h2> : null}</div>
          )}
        </div>
      )}
    </>
  );
}

export default VerifyEmail;
