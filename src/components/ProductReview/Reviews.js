import React, { useState, useEffect } from "react";
import { Rate, Popover } from "antd";
import { DownOutlined, UpOutlined, MoreOutlined } from "@ant-design/icons";
import firebase from "firebase/app";

import WriteReviewsModal from "../WriteReviewsModal/ReviewsModal";

import "./Reviews.scss";

export default function Review({ productId }) {
  const [open, setOpen] = useState(false);
  const [currentUser, setUser] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [writeReview, setWriteReviews] = useState(false);

  const [review, setReview] = useState("");
  const [stars, setStars] = useState(3);
  const [isReviewUpdate, setIsReviewUpdate] = useState(false);
  const [reviewId, setreviewId] = useState("");

  useEffect(() => {
    getUser();
    getReviews(); // eslint-disable-next-line
  }, []);

  function generateId() {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return "_" + Math.random().toString(36).substr(2, 9);
  }

  const getReviews = async () => {
    const reviews = [];
    const db = firebase.firestore();
    db.settings({ timestampsInSnapshots: true });
    db.collection("productReviews")
      .where("feedId", "==", productId)
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          let items = doc.data();
          reviews.push(items);
        });
        setReviews(reviews);
      });
  };

  const getUser = async () => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        if (user && user.uid) {
          setUser(user);
        }
      }
    });
  };

  const deleteReview = ({ id }) => {
    var jobskill_query = firebase
      .firestore()
      .collection("productReviews")
      .where("id", "==", id);
    jobskill_query.get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        doc.ref.delete();
      });
      getReviews();
    });
  };

  const handleEditReview = (val) => {
    setStars(val.stars);
    setReview(val.reviewMsg);
    setIsReviewUpdate(true);
    setWriteReviews(true);
    setreviewId(val.id);
  };

  const onSendReview = (reviewMsg, stars) => {
    try {
      if (reviewMsg) {
        if (isReviewUpdate) {
          var db = firebase.firestore();
          db.collection("productReviews")
            .where("id", "==", reviewId)
            .get()
            .then(function (querySnapshot) {
              querySnapshot.forEach(function (doc) {
                console.log(doc.id, " => ", doc.data());
                // Build doc ref from doc.id
                db.collection("productReviews")
                  .doc(doc.id)
                  .update({ stars: stars, reviewMsg: reviewMsg });
              });
              getReviews();
              setWriteReviews(false);
            });
        } else {
          let data = {
            stars,
            reviewMsg,
            email: currentUser.email,
            uid: currentUser.uid,
            feedId: productId,
            id: generateId(),
          };
          data.createTime = Math.floor(Date.now());
          firebase
            .firestore()
            .collection("productReviews")
            .add(data)
            .then(function () {
              setWriteReviews(false);
              getReviews();
            })
            .catch(function (error) {
              setWriteReviews(false);
              console.error("Error writing document: ", error);
            });
        }
      }
    } catch (Err) {
      console.log(Err, "ERROR");
    }
  };
  // console.log(reviews, ">>>>>>>");
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
      {open && reviews.length
        ? reviews.map((val, ind) => (
            <div key={ind.toString()} className="reviewsContent">
              <div className="menuItem">
                {val.reviewMsg}{" "}
                <Popover
                  placement="left"
                  title={""}
                  content={
                    <div>
                      <p
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          handleEditReview(val);
                        }}
                      >
                        Edit
                      </p>
                      <p
                        style={{ cursor: "pointer" }}
                        onClick={() => deleteReview(val)}
                      >
                        Delete
                      </p>
                    </div>
                  }
                  trigger="click"
                >
                  <MoreOutlined style={{ fontSize: "20px" }} />
                </Popover>
              </div>
              <Rate
                className="animated fadeInLeft"
                disabled
                defaultValue={val.stars}
              />
              <div className="nameDateTitle">
                {val.email} -{" "}
                {val.createTime
                  ? new Date(val.createTime).toDateString()
                  : "26 May 2020"}
              </div>
              {/* <div className="nameTitle">{}</div> */}
            </div>
          ))
        : null}
      <WriteReviewsModal
        onSendReview={onSendReview}
        productId={productId}
        writeReview={writeReview}
        setWriteReviews={setWriteReviews}
        review={review}
        setReview={setReview}
        stars={stars}
        setStars={setStars}
      />
    </div>
  );
}
