import express from 'express';
import Reminder from '../models/reminder.model.js';

const router = express.Router();

router.post('/', async (req, res) => {
try {
const { date, time, message, deliveryMethod } = req.body;

if (!date || !time || !message || !deliveryMethod) {
  return res.status(400).json({ error: 'All fields are required.' });
}

const dateTime = new Date(`${date}T${time}`);
if (isNaN(dateTime.getTime())) {
  return res.status(400).json({ error: 'Invalid date/time.' });
}

const reminder = new Reminder({ message, dateTime, deliveryMethod });
await reminder.save();

res.status(201).json({ success: true, reminder });
} catch (err) {
console.error(err);
res.status(500).json({ error: 'Server error.' });
}
});

export default router;