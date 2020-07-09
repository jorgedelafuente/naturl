import React from "react";
import { Modal, Input, Rate } from "antd";
import "./ReviewsModal.scss";

const { TextArea } = Input;

export default function ReviewsModal({
  productId,
  setWriteReviews,
  writeReview,
  onSendReview,
  setStars,
  stars,
  review,
  setReview,
}) {
  // const style={
  //   backgroundColor: "orange"
  // }
  return (
    <>
      <Modal
        title="Write your review about this product"
        centered
        visible={writeReview}
        onOk={() => onSendReview(review, stars)}
        onCancel={() => setWriteReviews(false)}
      >
        <Rate
          style={{ marginBottom: "20px" }}
          value={stars}
          onChange={setStars}
        />
        <TextArea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          rows={4}
        />
      </Modal>
    </>
  );
}
