const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
  message: String,
  name: String,
  creator: String,
  selectedFile: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model('PostMessage', postSchema);

// export default PostMessage;
