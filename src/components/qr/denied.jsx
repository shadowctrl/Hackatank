import Lottie from "lottie-react";
import cross from "../../assets/denied.json";

const Denied = (props) => {
  return (
    <div className="verify-title">
      <h1>
        Verification Failed
        <Lottie
          animationData={cross}
          style={{
            height: "100px",
            width: "100px",
          }}
          loop={1}
        />
      </h1>
      <h3>DEBUG ID - {props.id}</h3>
    </div>
  );
};

export default Denied;
