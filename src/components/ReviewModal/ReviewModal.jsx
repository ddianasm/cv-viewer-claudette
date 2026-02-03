import { useState } from "react";
import "./ReviewModal.scss";

const ReviewModal = ({ isOpen, onClose, onSubmit }) => {
  const [text, setText] = useState("");

  if (!isOpen) return null;

  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim()) {
      onSubmit(text);
      setText("");
      onClose();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="review-modal">
        <h3 className="review-modal__title">Leave a Review</h3>
        <form onSubmit={handleSubmit}>
          <textarea
            className="review-modal__textarea"
            placeholder="Write your comment here..."
            value={text}
            onChange={e => setText(e.target.value)}
            required
          />
          <div className="review-modal__actions">
            <button
              type="button"
              className="review-modal__btn review-modal__btn--cancel"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="review-modal__btn review-modal__btn--save"
            >
              Save Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewModal;
