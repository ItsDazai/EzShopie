const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// User model (if you still want to keep it for other purposes)
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }] // Wishlist field
});

const User = mongoose.model('User', UserSchema);

// Add to Wishlist Route
app.post('/wishlist/add', async (req, res) => {
  const { userId, productId } = req.body;

  try {
    let user = await User.findById(userId);
    
    if (!user) {
      // If the user does not exist in your database, you may want to create them or handle it differently.
      return res.status(404).json({ error: 'User not found' });
    }

    if (!user.wishlist.includes(productId)) {
      user.wishlist.push(productId);
      await user.save();
      return res.status(200).json({ message: 'Product added to wishlist' });
    } else {
      return res.status(400).json({ error: 'Product already in wishlist' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Remove from Wishlist Route
app.post('/wishlist/remove', async (req, res) => {
  const { userId, productId } = req.body;

  try {
    const user = await User.findById(userId);
    
    if (!user) return res.status(404).json({ error: 'User not found' });

    user.wishlist = user.wishlist.filter(id => id.toString() !== productId);
    await user.save();
    
    res.status(200).json({ message: 'Product removed from wishlist' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get Wishlist Route
app.get('/wishlist/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId).populate('wishlist');
    
    if (!user) return res.status(404).json({ error: 'User not found' });

    res.status(200).json(user.wishlist);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
