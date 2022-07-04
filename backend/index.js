import express from 'express';
import mongoose from 'mongoose';
import TrackSchema from './models/Track.js';
import cors from 'cors';

const app = express();

mongoose
  .connect('mongodb+srv://admin:admin@cluster0.8tvjeha.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('Done'))
  .catch(() => console.log('Error'));

app.use(express.json());
app.use(cors());

app.post('/addtrack', async (req, res) => {
  try {
    const doc = new TrackSchema({
      number: req.body.number,
      sender: req.body.sender,
      reciever: req.body.reciever,
      description: req.body.description,
      weight: req.body.weight,
      address: req.body.address,
      phoneReciever: req.body.phoneReciever,
      date: req.body.date,
      stage: req.body.stage,
    });
    const post = await doc.save();
    res.json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Не удалось создать трек номер',
    });
  }
});

app.get('/track/:id', async (req, res) => {
  try {
    const number = req.params.id;
    TrackSchema.findOne(
      {
        number: number,
      },
      (err, doc) => {
        if (err) {
          return res.status(500).json({
            message: 'Не удалось получить трек номер',
          });
        }
        if (!doc) {
          return res.status(404).json({
            message: 'Такого трек номера не существует',
          });
        }
        res.json(doc);
      },
    );
  } catch (error) {
    res.status(500).json({
      message: 'Не удалось получить трек номер',
    });
  }
});

app.listen(4444, (err) => {
  if (err) {
    return console.log('Error', err);
  }
  console.log('Lets Go!');
});
