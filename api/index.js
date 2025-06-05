import express from "express";
import { sequelize, User, Post, Community, Topic, Feed } from "./database.js"; // Assuming your database code is in `database.js`

const app = express();
app.use(express.json());

// CRUD operations for Users
app.post("/users", async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.get("/users/:id", async (req, res) => {
    const user = await User.findByPk(req.params.id);
    user ? res.json(user) : res.status(404).json({ error: "User not found" });
});

app.put("/users/:id", async (req, res) => {
    const user = await User.findByPk(req.params.id);
    if (user) {
        await user.update(req.body);
        res.json(user);
    } else {
        res.status(404).json({ error: "User not found" });
    }
});

app.delete("/users/:id", async (req, res) => {
    const user = await User.findByPk(req.params.id);
    if (user) {
        await user.destroy();
        res.json({ message: "User deleted" });
    } else {
        res.status(404).json({ error: "User not found" });
    }
});

// Similar CRUD operations for Posts, Communities, Topics, and Feeds
app.post("/posts", async (req, res) => {
    try {
        const post = await Post.create(req.body);
        res.status(201).json(post);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.get("/posts/:id", async (req, res) => {
    const post = await Post.findByPk(req.params.id);
    post ? res.json(post) : res.status(404).json({ error: "Post not found" });
});

app.put("/posts/:id", async (req, res) => {
    const post = await Post.findByPk(req.params.id);
    if (post) {
        await post.update(req.body);
        res.json(post);
    } else {
        res.status(404).json({ error: "Post not found" });
    }
});

app.delete("/posts/:id", async (req, res) => {
    const post = await Post.findByPk(req.params.id);
    if (post) {
        await post.destroy();
        res.json({ message: "Post deleted" });
    } else {
        res.status(404).json({ error: "Post not found" });
    }
});

// Communities
app.post("/communities", async (req, res) => {
    try {
        const community = await Community.create(req.body);
        res.status(201).json(community);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.get("/communities/:id", async (req, res) => {
    const community = await Community.findByPk(req.params.id);
    community ? res.json(community) : res.status(404).json({ error: "Community not found" });
});

app.put("/communities/:id", async (req, res) => {
    const community = await Community.findByPk(req.params.id);
    if (community) {
        await community.update(req.body);
        res.json(community);
    } else {
        res.status(404).json({ error: "Community not found" });
    }
});

app.delete("/communities/:id", async (req, res) => {
    const community = await Community.findByPk(req.params.id);
    if (community) {
        await community.destroy();
        res.json({ message: "Community deleted" });
    } else {
        res.status(404).json({ error: "Community not found" });
    }
});

// Topics
app.post("/topics", async (req, res) => {
    try {
        const topic = await Topic.create(req.body);
        res.status(201).json(topic);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.get("/topics/:id", async (req, res) => {
    const topic = await Topic.findByPk(req.params.id);
    topic ? res.json(topic) : res.status(404).json({ error: "Topic not found" });
});

app.put("/topics/:id", async (req, res) => {
    const topic = await Topic.findByPk(req.params.id);
    if (topic) {
        await topic.update(req.body);
        res.json(topic);
    } else {
        res.status(404).json({ error: "Topic not found" });
    }
});

app.delete("/topics/:id", async (req, res) => {
    const topic = await Topic.findByPk(req.params.id);
    if (topic) {
        await topic.destroy();
        res.json({ message: "Topic deleted" });
    } else {
        res.status(404).json({ error: "Topic not found" });
    }
});

// Feeds
app.post("/feeds", async (req, res) => {
    try {
        const feed = await Feed.create(req.body);
        res.status(201).json(feed);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.get("/feeds/:id", async (req, res) => {
    const feed = await Feed.findByPk(req.params.id);
    feed ? res.json(feed) : res.status(404).json({ error: "Feed not found" });
});

app.put("/feeds/:id", async (req, res) => {
    const feed = await Feed.findByPk(req.params.id);
    if (feed) {
        await feed.update(req.body);
        res.json(feed);
    } else {
        res.status(404).json({ error: "Feed not found" });
    }
});

app.delete("/feeds/:id", async (req, res) => {
    const feed = await Feed.findByPk(req.params.id);
    if (feed) {
        await feed.destroy();
        res.json({ message: "Feed deleted" });
    } else {
        res.status(404).json({ error: "Feed not found" });
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, async () => {
    await sequelize.sync();
    console.log(`Server running on http://localhost:${PORT}`);
});
