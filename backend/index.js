import express from 'express';
import mongoose from 'mongoose';

const app = express();

app.use(express.json());

app.post('/init', (req, res) => {
  return res.status(200).json({
    message: 'hello :)d',
  });
});

app.listen(4444, (err) => {
  if (err) {
    return console.log('Error', err);
  }
  console.log('Lets Go!');
});
