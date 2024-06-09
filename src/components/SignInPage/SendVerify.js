import React, { useEffect } from "react";
import { baseUrl, postRequest } from "../../utils/services";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
function SendVerify() {
  const { User, updateUser } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [response, setResponse] = useState()
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      if (User?.isVerified) {
        setTimeout(() => {
          return navigate("/");
        }, 3000);
      } else {
        if (User) {
          setIsLoading(true);
          const response = await postRequest(
            `${baseUrl}/users/verifacation`,
            JSON.stringify(User)
          );
          setIsLoading(false);
          setResponse(response);

          if (response.error) {
            setIsLoading(false);
            return setError(response.massage);
          }
        }
      }
    })();
  }, [User]);

  return (
    <div className=" container mx-auto">
      <div className=" flex flex-col items-center space-y-7 w-full justify-center p-5 border rounded font-semibold text-lg font-Roboto ">
        {isLoading && <h2>Sending verifacation Email...</h2>}
        {error && <h2>{error}</h2>}
        {response && (<><h2>{response}</h2>
        <Link to={"/"}>
              <button  className="border rounded-full shadow-sm p-3 bg-slate-950 text-white">Back to MainPage</button>

        </Link> 
        </>)}
      </div>
    </div>
  );
}

export default SendVerify;
