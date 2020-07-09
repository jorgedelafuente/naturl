import React from "react";
import { Alert } from "antd";
import "./NewsLetter.scss";
import PropTypes from "prop-types";

const NewsLetter = ({ handleEmailNewsletterSignUp, displayStatus }) => {
  const handleClick = () => {
    console.log("text");
    handleEmailNewsletterSignUp();
  };

  return (
    <>
      <div className="Newsletter-Heading wow zoomIn">
        <p>SUBSCRIBE TO OUR MAILING LIST</p>
      </div>

      <div className="Newsletter-Wrapper wow zoomIn">
        <div className="Newsletter-Input-Container">
          <div className="Newsletter-Alert">
            <Alert
              message="A Demo Newsletter Component"
              type="info"
              // style={{ display: "block" }}
              style={{ display: displayStatus }}
              showIcon={true}
              closable
            />
          </div>

          <input placeholder="email@example.com" className="Newsletter-Input" />
        </div>
        <button className="Subscribe-Button" onClick={handleClick}>
          SUBSCRIBE
        </button>
      </div>
    </>
  );
};

NewsLetter.propTypes = {
  handleEmailNewsletterSignUp: PropTypes.func,
  displayStatus: PropTypes.string,
};

export default NewsLetter;
