import React from "react";
import "./footer.css";
import CopyrightIcon from "@mui/icons-material/Copyright";

const footer = () => {
  return (
    <React.Fragment>
      <div className="parent-footer">
        <p className="copyright">
          Copyrights
          <CopyrightIcon
            style={{
              width: "1vw",
              height: "1vw",
            }}
          />
          2023 - {"All Rights Reserved."}
        </p>
      </div>
    </React.Fragment>
  );
};

export default footer;
