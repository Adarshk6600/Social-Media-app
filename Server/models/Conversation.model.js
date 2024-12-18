import mongoose, { Schema } from 'mongoose';

const conversationSchema = new Schema(
  {
    participants: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
    ],
    lastMessage: {
      type: Schema.Types.ObjectId,
      ref: 'Message',
    },
  },
  {
    timestamps: true, // Adds `createdAt` and `updatedAt` fields
  }
);

const Conversation = mongoose.model('Conversation', conversationSchema);

export default Conversation;
