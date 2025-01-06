import Post from "./Post";
import Statusbar from "./Statusbar";
import { useState, useEffect } from "react";

export default function MainContent({ className, username, userId }) {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/posts");
      const result = await response.json();
      setPosts(result);
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <main className={className}>
      <Statusbar
        className="Statusbar"
        userId={userId}
        fetchPosts={fetchPosts}
      />
      {posts
        .slice()
        .reverse()
        .map((post) => (
          <Post
            key={post.id}
            className="post"
            username={post.user.username}
            content={post.body}
            postId={post.id}
            posts={posts}
            setPosts={setPosts}
            userId={userId}
            postUserId={post.userId}
          />
        ))}
    </main>
  );
}
