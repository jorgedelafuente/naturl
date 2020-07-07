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
          <h2>
            You are welcome to call us or send us an email with your questions
            and inquiries.
          </h2>
          <br />
          <p>
            <strong>CALL US</strong>
          </p>
          <address>
            <span class="text-primary">
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
            <span class="text-primary">
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
            <a href="mailto:info@canadavisa.com" rel="alternate">
              email&nbsp;
            </a>
            us.
          </p>
          <p>
            All legal services are provided from our head office in Montreal.
          </p>
          <address>
            <span class="text-primary">
              <strong>Head Office &amp; Mailing Address</strong>
            </span>
            <br />
            Campbell Cohen Law Firm
            <br />
            1303 Greene Ave., Suite 200
            <br />
            Westmount, Montreal, QC, Canada
            <br />
            H3Z 2A7
          </address>
        </p>
        <br />
      </div>
    </div>
  );
};

export default Contact;
