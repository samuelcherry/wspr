import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

function Post({
  className,
  username,
  content,
  postId,
  posts,
  setPosts,
  userId,
  postUserId
}) {
  const [isLiked, setIsLiked] = useState(false);
  const [comment, setComment] = useState("");

  const handleLikeToggle = () => {
    setIsLiked((prev) => !prev);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  async function deletePost(postId) {
    try {
      console.log(postId);
      const response = await fetch(
        `http://localhost:3000/api/posts/${postId}`,
        {
          method: "DELETE"
        }
      );

      if (response.ok) {
        setPosts(posts.filter((post) => post.id !== postId));
      } else {
        console.error("Failed to delete post:", await response.json());
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  }

  return (
    <article className={className}>
      <div className="post-header">
        <img
          className="post-avatar"
          src="src\assets\profile picture.jpg"
          alt={`${username}'s avatar`}
        />
        <span className="post-username">{username}</span>
      </div>
      <div className="post-content">{content}</div>
      <div className="post-btn-container">
        {postUserId == userId && (
          <button className="post-btn" onClick={() => deletePost(postId)}>
            delete
          </button>
        )}
      </div>
    </article>
  );
}

export default Post;
