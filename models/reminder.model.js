import mongoose from 'mongoose';

const reminderSchema = new mongoose.Schema({
message: { type: String, required: true },
dateTime: { type: Date, required: true },
deliveryMethod: {
type: String,
enum: ['sms', 'email'],
required: true,
},
createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Reminder', reminderSchema);