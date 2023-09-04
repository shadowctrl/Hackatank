import Lottie from "lottie-react";
import cross from "../../assets/denied.json";
import "./notallowed.css";

const Notallowed = () => {
  return (
    <div className="not-allowed">
      <h1>
        You are not allowed to access this resource
        <Lottie
          animationData={cross}
          style={{
            height: "100px",
            width: "100px",
          }}
          loop={1}
        />
      </h1>
    </div>
  );
};

export default Notallowed;
