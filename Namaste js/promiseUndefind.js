function getUserData() {
    return new Promise((resolve) => {
      console.log("Fetching user data...");
      setTimeout(() => resolve({ userId: 1, name: "Alice" }), 1000);
    });
  }
  
  function getPostsByUser(userId) {
    return new Promise((resolve) => {
      console.log(`Fetching posts for user ${userId}...`);
      setTimeout(() => resolve(["Post 1", "Post 2", "Post 3"]), 1000);
    });
  }
  
  function displayPosts(posts) {
    return new Promise((resolve) => {
      console.log("Displaying posts...");
      setTimeout(() => {
        console.log(posts);
        resolve("Posts displayed.");
      }, 1000);
    });
  }
  
  // Chaining promises
  getUserData()
    .then((userData) => {
      console.log(`User fetched: ${userData.name}`);
      return getPostsByUser(userData.userId);
    })
    .then((posts) => {
      return displayPosts(posts);
    })
    .then((message) => {
      console.log(message); // Output: Posts displayed.
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  