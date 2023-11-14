import mongoose from 'Mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      // passing custom messages
      required: [true, 'password is required'],
    },
    isActive: Boolean,
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);

// model name converted from 'User' to users when stored in db
