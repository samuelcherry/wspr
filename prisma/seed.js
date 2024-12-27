const prisma = require("../prisma");

const seed = async () => {
  const createUsers = async () => {
    const users = [
      { username: "Sam", password: "password1" },
      { username: "Sophie", password: "password2" },
      { username: "Dipper", password: "password3" },
      { username: "Zach", password: "password4" },
      { username: "Carrie", password: "password5" }
    ];
    await prisma.user.createMany({ data: users });
  };

  const createPosts = async () => {
    const posts = [
      { userId: 1, body: "See you space cowboy" },
      { userId: 2, body: "Party Party Party" },
      { userId: 2, body: "Brat Summer" },
      { userId: 3, body: "Let's go to the Park" },
      { userId: 4, body: "Here's the thing about BTTF" },
      { userId: 5, body: "Hosting a party this week" },
      { userId: 3, body: "can I get some chees" },
      { userId: 4, body: "have you heard of Blood Sport?" }
    ];
    await prisma.post.createMany({ data: posts });
  };

  const createComments = async () => {
    const comments = [
      { postId: 1, userId: 1, body: "See you space cowboy" },
      { postId: 1, userId: 2, body: "Party Party Party" },
      { postId: 1, userId: 2, body: "Brat Summer" },
      { postId: 1, userId: 3, body: "Let's go to the Park" },
      { postId: 1, userId: 4, body: "Here's the thing about BTTF" },
      { postId: 1, userId: 2, body: "Brat Summer" },
      { postId: 1, userId: 3, body: "Let's go to the Park" },
      { postId: 1, userId: 4, body: "Here's the thing about BTTF" }
    ];
    await prisma.comment.createMany({ data: comments });
  };

  await createUsers();
  await createPosts();
  await createComments();
};
seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
