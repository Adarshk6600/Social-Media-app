import mongoose, { Schema } from 'mongoose';

const messageSchema = new Schema(
  {
    senderId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    receiverId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    conversation: {
      type: Schema.Types.ObjectId,
      ref: 'Conversation',
      required: false,
    },
    content: {
      type: String,
      required: true,
      maxlength: 1000, // Maximum length for a message
    },
    media: {
      type: String, // Optional field for image/video/audio attachments
    },
    isRead: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // Adds `createdAt` and `updatedAt` fields
  }
);

const Message = mongoose.model('Message', messageSchema);

export default Message;
