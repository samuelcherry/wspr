const router = require("express").Router();
module.exports = router;
const prisma = require("../prisma");

router.get("/", async (req, res, next) => {
  try {
    const posts = await prisma.post.findMany({
      include: {
        user: {
          select: {
            username: true
          }
        }
      }
    });
    res.json(posts);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { userId, body } = req.body;

    if (!userId || !body) {
      return res.status(400).json({ error: "userId and body are required." });
    }

    const newPost = await prisma.post.create({
      data: {
        userId,
        body
      }
    });

    res.status(201).json({
      message: "Post created successfully",
      post: newPost
    });
  } catch (error) {
    console.error("Error creating post:", error);
    res
      .status(500)
      .json({ error: "Failed to create post. Please try again later." });
  }
});

router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    const post = await prisma.post.findUnique({
      where: { id: parseInt(id) }
    });

    if (!post) {
      return res.status(404).json({ error: "Post not found." });
    }

    await prisma.post.delete({
      where: { id: parseInt(id) }
    });

    res.status(200).json({ message: "Posts deleted." });
  } catch (error) {
    next(error);
  }
});
