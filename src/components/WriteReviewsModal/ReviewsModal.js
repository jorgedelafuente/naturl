import React, { useState } from "react";
import { Modal, Input, Rate } from "antd";

const { TextArea } = Input;

export default function ReviewsModal({
  productId,
  setWriteReviews,
  writeReview,
  onSendReview,
}) {
  const [review, setReview] = useState("");
  const [stars, setStars] = useState(1);

  console.log(writeReview, ">>>>", stars);
  return (
    <>
      <Modal
        title="Write your review about this product"
        centered
        visible={writeReview}
        onOk={() => onSendReview(review, stars)}
        onCancel={() => setWriteReviews(false)}
      >
        <Rate value={stars} onChange={setStars} />
        <TextArea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          rows={4}
        />
      </Modal>
    </>
  );
}
