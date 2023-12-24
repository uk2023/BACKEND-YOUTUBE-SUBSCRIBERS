const express = require('express');
const path = require('path');
const subscriberModel = require('./models/subscribers');
const { serve, setup } = require('./swagger'); // Import Swagger module

const app = express();

// Serve the public directory
const publicPath = path.join(__dirname, '..', 'public'); // Assuming public is in the root
app.use(express.static(publicPath));

// Use Swagger for API documentation
app.use('/docs', serve, setup);

// Define your other routes here
app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

/**
 * @swagger
 * /subscribers:
 *   get:
 *     description: Get a list of subscribers
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad request
 */
app.get('/subscribers', async (req, res) => {
  try {
    const subscribers = await subscriberModel.find().select('-__v');
    res.status(200).json(subscribers);
  } catch (err) {
    res.status(400).json({ error: 'Database Error' });
  }
});

/**
 * @swagger
 * /subscribers/names:
 *   get:
 *     description: Get a list of subscribers with names and subscribed channels
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad request
 */
app.get('/subscribers/names', async (req, res) => {
  try {
    const subscribers = await subscriberModel.find().select('-__v -_id -subscribedDate');
    res.status(200).json(subscribers);
  } catch (err) {
    res.status(400).json({ error: 'Invalid name Url' });
  }
});

/**
 * @swagger
 * /subscribers/{id}:
 *   get:
 *     description: Get a subscriber by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the subscriber
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             example:
 *               message: Invalid ID
 */
app.get('/subscribers/:id', async (req, res) => {
  try {
    let id = req.params.id;
    let subscriber = await subscriberModel.findById(id).select('-__v');
    if (!subscriber) {
      res.status(400).json({ message: 'Invalid ID' });
      return;
    }
    res.status(200).json(subscriber);
  } catch (err) {
    res.status(400).json({ message: 'Invalid ID' });
  }
});

module.exports = app;
