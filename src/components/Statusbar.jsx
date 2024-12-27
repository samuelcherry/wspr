import { useState } from "react";

export default function Statusbar({ className, username, userId, fetchPosts }) {
  const [body, setBody] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          body,
          userId: parseInt(userId, 10)
        })
      });

      if (!response.ok) {
        throw new Error("Failed to submit the post.");
      }

      setBody("");

      if (typeof fetchPosts === "function") {
        console.log("Calling fetchPosts");
        await fetchPosts();
      }
    } catch (error) {
      setError(error.message);
      console.error("Error submitting the post:", error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <textarea
        required
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="What's on your mind?"
      />
      <button type="submit">Post</button>
    </form>
  );
}
