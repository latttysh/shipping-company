import mongoose from 'mongoose';

const TrackSchema = new mongoose.Schema(
  {
    number: {
      type: 'string',
      required: true,
    },
    sender: {
      type: 'string',
      required: true,
    },
    reciever: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    weight: {
      type: 'string',
      required: true,
    },
    address: {
      type: 'string',
      required: true,
    },
    phoneReciever: {
      type: 'string',
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('Track', TrackSchema);
