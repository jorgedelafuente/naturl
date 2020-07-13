import React from "react";
import "./style.scss";
// import SimpleTextCard from "./SimpleTextCard";

const Contact = () => {
  return (
    <div className="contact-page-container">
      <div className="Contact-Wrapper">
        <div className="Contact-heading wow zoomIn ">
          <h1>Contact</h1>
        </div>
        <p className="wow zoomIn">
          <h4>
            You are welcome to call us or send us an email with your questions
            and inquiries.
          </h4>
          <br />
          <p>
            <strong>CALL US</strong>
          </p>
          <address>
            <span className="text-primary">
              <strong>General Inquiries</strong>
            </span>
            <br />
            Phone: +1 (514) 937-9445
            <br />
            Fax: +1 (514) 937-2618
            <br />
            Toll-free in USA and Canada: 1-888-947-9445
          </address>
          <address>
            <span className="text-primary">
              <strong>Business Inquiries</strong>
            </span>
            <br />
            Phone: +1-(514) 937-4782
            <br />
            Fax: +1 (514) 937-2618
          </address>
          <p>
            <strong>EMAIL US</strong>
            <br />
            Alternatively, you can&nbsp;
            <a
              className="contact-email-link"
              href="mailto:info@naturl.com"
              rel="alternate"
            >
              email&nbsp;
            </a>
            us.
          </p>
          <p>
            All legal services are provided from our head office in Montreal.
          </p>
          <address>
            <span className="text-primary">
              <strong>Head Office &amp; Mailing Address</strong>
            </span>
            <br />
            NATURL Cosmetics Ltd.
            <br />
            1303 Greene Ave., Suite 200
            <br />
            Westmount, Montreal, QC, Canada
            <br />
            H3Z 2A7
          </address>
        </p>
        <img
          src={require("../../images/contact-fadein.png")}
          alt="makeup-lipstick"
          className="right-image-contact"
        />
        <br />
      </div>
    </div>
  );
};

export default Contact;
