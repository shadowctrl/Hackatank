"use client";
import { useParams } from "react-router-dom";
import { auth } from "../../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from "react";
import Notallowed from "./notallowed";
import Success from "./success";
import Denied from "./denied";
import "./verify.css";

const Verify = () => {
  const { id } = useParams();
  const [user, loading] = useAuthState(auth);
  const [nameState, setNameState] = useState();
  const [codeState, setCodeState] = useState();
  const [idState, setIdState] = useState();
  const [statusCode, setStatusCode] = useState();
  const [isActive, setIsActive] = useState(false);

  const handleOptions = async (self, id) => {
    setIsActive(true);
    var code = self.target.innerHTML;
    const requestData = {
      id: id,
      code: code,
      authemail: user?.email,
    };
    const response = await fetch(`/api/verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });

    const data = await response.json();

    if (response.status == 200) {
      setNameState(data.name);
      setIdState(data.id);
      setCodeState(data.code);
    } else {
      setIdState(data.id);
    }
    setIsActive(false);

    return setStatusCode(response.status);
  };
  return (
    <main>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {user ? (
            <div>
              {nameState ? (
                <Success name={nameState} id={idState} code={codeState} />
              ) : (
                <div>
                  {statusCode === 404 ? (
                    <Denied id={idState} />
                  ) : (
                    <div className="qr-main">
                      <div className={isActive ? "load" : "none"}>
                        {" "}
                        Hold on...
                      </div>
                      <div className={`qr-parent ${isActive ? "qr-bg" : ""}`}>
                        <div className={isActive ? "none" : ""}>
                          <h1 className="qr-name">
                            Authenticated as <span> {user.displayName}</span>
                          </h1>
                          <div className="qr-options">
                            <h1 onClick={(self) => handleOptions(self, id)}>
                              IN
                            </h1>
                            <h1 onClick={(self) => handleOptions(self, id)}>
                              Breakfast
                            </h1>
                            <h1 onClick={(self) => handleOptions(self, id)}>
                              Lunch
                            </h1>
                            <h1 onClick={(self) => handleOptions(self, id)}>
                              Dinner
                            </h1>

                            <h1 onClick={(self) => handleOptions(self, id)}>
                              OUT
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : (
            <Notallowed />
          )}
        </div>
      )}
    </main>
  );
};

export default Verify;
