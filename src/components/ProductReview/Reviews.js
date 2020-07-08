import React, { useState, useEffect } from "react";
import { Rate } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import firebase from "firebase/app";

import { getCurrentUser } from "../../firebase";

import WriteReviewsModal from "../WriteReviewsModal/ReviewsModal";

import "./Reviews.scss";

export default function Review({ productId }) {
  const [open, setOpen] = useState(false);
  const [currentUser, setUser] = useState(null);
  const [writeReview, setWriteReviews] = useState(false);
  console.log({ productId }, ">>>");

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log(user, ">>>");
        if (user && user.uid) {
          setUser(user);
        }
      }
    });
  };

  const onSendReview = (reviewMsg, stars) => {
    try {
      if (reviewMsg) {
        let data = {
          stars,
          reviewMsg,
          email: currentUser.email,
        };
        firebase
          .firestore()
          .collection("productReviews")
          .doc(productId)
          .collection("reviews")
          .doc(currentUser.uid)
          .set(data)
          .then(function () {
            console.log("Document successfully written!");
          })
          .catch(function (error) {
            console.error("Error writing document: ", error);
          });
      }
    } catch (Err) {
      console.log(Err, "ERROR");
    }
  };

  return (
    <div className="reviewsHeader">
      <div
        onClick={(e) => {
          e.stopPropagation();
          setOpen(!open);
        }}
        className="heading"
      >
        Reviews {open ? <UpOutlined /> : <DownOutlined />}
      </div>
      {open && currentUser && (
        <div onClick={() => setWriteReviews(true)} className="writeReview">
          Write a review
        </div>
      )}
      {open
        ? [0, 1, 2, 3, 4].map((val) => (
            <div key={val} className="reviewsContent">
              <div>The best!</div>
              <Rate className="animated fadeInLeft" disabled defaultValue={5} />
              <div className="nameDateTitle">Chris - 7 July 2020</div>
              <div className="nameTitle">
                This is for the 2020 version, I believe it has changed recently
                ? I have combination skin and wear SPF on top of a couple of
                serums and a light (oil-free) moisturizer, and under a BB/CC
                cream. With so many layers, my skin, in summer, feels burdened
                and gets greasy by mid day.
              </div>
            </div>
          ))
        : null}
      <WriteReviewsModal
        onSendReview={onSendReview}
        productId={productId}
        writeReview={writeReview}
        setWriteReviews={setWriteReviews}
      />
    </div>
  );
}
