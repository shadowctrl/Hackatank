import Lottie from "lottie-react";
import tick from "../../assets/verified.json";

const Success = (props) => {
  return (
    <div className="verify-title">
      <h1>
        Verified
        <Lottie
          animationData={tick}
          style={{
            height: "100px",
            width: "100px",
          }}
          loop={1}
        />
      </h1>
      <h3>
        Welcome Aboard - <span>{props.name}</span>
      </h3>
      <h3>Unique ID - {props.id}</h3>
    </div>
  );
};

export default Success;
