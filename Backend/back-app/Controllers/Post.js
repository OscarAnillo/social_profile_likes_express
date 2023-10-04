import Post from "../Model/Post.js";
import User from "../Model/User.js";

/* CreatePost */
export const createPost = async (req, res) => {
    try {
        const { userId, description, picturePath } = req.body;
        const user = await User.findById(userId);

        const newPost = new Post({
            userId,
            firstName: user.firstName,
            lastName: user.lastName,
            location: user.location,
            description,
            userPicturePath: user.picturePath,
            picturePath,
            likes: {},
            comments: []
        })
        await newPost.save()
        const post = await Post.find();
        res.status(200).json(post)
    } catch (err) {
        res.status(401).json({ message : err.message })
    }
}

/* Get all Posts */
export const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

/* Update likes */
export const likePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { userId } = req.body;
        const post = await Post.findById(id)
        const isLiked = post.likes.get(userId);

        if(isLiked){
            post.likes.delete(userId)
        } else {
            post.likes.set(userId, true)
        }

        const updatedPost = await Post.findByIdAndUpdate(id, 
            { likes: post.likes },
            { new: true })
            res.status(200).json(updatedPost) 
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}