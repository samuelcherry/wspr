import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

function Post({ className, userId, content }) {
  const [isLiked, setIsLiked] = useState(false);
  const [comment, setComment] = useState("");

  const handleLikeToggle = () => {
    setIsLiked((prev) => !prev);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <article className={className}>
      <div className="post-header">
        <img
          className="post-avatar"
          src="src\assets\profile picture.jpg"
          alt={`${userId}'s avatar`}
        />
        <span className="post-username">{userId}</span>
      </div>
      <div className="post-content">{content}</div>
      <div className="post-actions">
        <button className="like-button" onClick={handleLikeToggle}>
          {isLiked ? <FaHeart color="red" /> : <CiHeart />}
        </button>
        <textarea
          className="comment-box"
          placeholder="Write a comment..."
          value={comment}
          onChange={handleCommentChange}
        />
      </div>
      <button className="comment-btn">comment</button>
    </article>
  );
}

export default Post;
