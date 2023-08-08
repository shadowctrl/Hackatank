import React, { useEffect } from "react";
import { auth } from "../../pages/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./dashboard.css";

const dashboard = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) return <h1>Loading...</h1>;
  return (
    <div>
      {user && (
        <div>
          {" "}
          <h1 onClick={() => auth.signOut()}>signout</h1>
          <div className="time_parent">
            <div className="values">
              <span>
                <span style={{ "--value": 15 }}></span>
              </span>
              days
            </div>
            <div className="values">
              <span>
                <span style={{ "--value": 10 }}></span>
              </span>
              hours
            </div>
            <div className="values">
              <span>
                <span style={{ "--value": 24 }}></span>
              </span>
              min
            </div>
            <div className="values">
              <span>
                <span style={{ "--value": 28 }}></span>
              </span>
              sec
            </div>
          </div>
        </div>
      )}
      {!user && <h1 onClick={() => window.open("/signin", "_self")}>Signin</h1>}
    </div>
  );
};

export default dashboard;
