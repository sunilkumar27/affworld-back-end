// controllers/post-controller.js
const Post = require('../models/post');
const cloudinary = require('../config/cloudinary');

exports.createPost = async (req, res) => {
  try {
    const { caption } = req.body;
    const result = await cloudinary.uploader.upload(req.file.path);

    const post = new Post({
      userId: req.user._id,
      imageUrl: result.secure_url,
      caption
    });

    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: 'Error creating post', error: error.message });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find({ userId: req.user._id })
      .populate('userId', 'name profilePicture')
      .sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching posts', error: error.message });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findOneAndDelete({ _id: id, userId: req.user._id });
    
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    
    // Delete image from Cloudinary
    const publicId = post.imageUrl.split('/').pop().split('.')[0];
    await cloudinary.uploader.destroy(publicId);
    
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting post', error: error.message });
  }
};