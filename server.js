const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();
app.set('port', process.env.PORT || 4000);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log('We are connected to the database.');
  })
  .catch((error) => {
    console.log('An error occurred while connecting ot the db', error);
  });

//? Import routes here
const userRoute = require('./Routes/userRoutes');
const bookRoutes = require('./Routes/bookRoutes');
const reviewRoutes = require('./Routes/reviewRoutes');

//? Routes:
app.get('/', (req, res) => res.send('Hello World!'));
app.use('/api/user', userRoute);
app.use('/api/books', bookRoutes);
app.use('/api/reviews', reviewRoutes);

//************************** */
app.all('*', (req, res) => {
  res.status(500);
  res.send('Invalid path');
});

app.listen(app.get('port'), () => {
  console.log('Server started on port ' + app.get('port'));
});
