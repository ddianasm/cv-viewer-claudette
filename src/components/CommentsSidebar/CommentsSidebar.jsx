import "@/components/CommentsSidebar/CommentsSidebar.scss";

const CommentsSidebar = ({ comments = [], onReviewClick }) => {
  return (
    <aside className="comments-sidebar">
      <div className="comments-sidebar__header">
        <h2 className="comments-sidebar__title">
          Comments ({comments.length})
        </h2>
        <button className="comments-sidebar__add-btn" onClick={onReviewClick}>
          + Review
        </button>
      </div>

      <div className="comments-sidebar__list">
        {comments.length > 0 ? (
          comments.map(comment => (
            <div key={comment.id} className="comments-sidebar__item">
              <p className="comments-sidebar__text">{comment.text}</p>
              <span className="comments-sidebar__date">{comment.date}</span>
            </div>
          ))
        ) : (
          <p className="comments-sidebar__empty">No comments yet.</p>
        )}
      </div>
    </aside>
  );
};

export default CommentsSidebar;
