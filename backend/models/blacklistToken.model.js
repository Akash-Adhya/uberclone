// Mongoose model for storing blacklisted JWT tokens (for logout/invalidation).

const mongoose = require('mongoose');


const blacklistTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 86400, // 24 hours in seconds
  },
});

const BlacklistTokenModel = mongoose.model('BlacklistToken', blacklistTokenSchema);

module.exports = BlacklistTokenModel;

