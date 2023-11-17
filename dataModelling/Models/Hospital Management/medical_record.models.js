import mongoose from 'mongoose';

const medical_recordSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Type.ObjectId,
      ref: 'Patient',
      required: true,
    },
    diagonisedWith: {
      type: String,
      required: true,
    },
    treatedBy: {
      type: mongoose.Schema.Type.ObjectId,
      ref: 'Doctor',
      required: true,
    },
  },
  { timestamps: true }
);

export const Medical_Record = mongoose.model(
  'Medical_Record',
  medical_recordSchema
);
