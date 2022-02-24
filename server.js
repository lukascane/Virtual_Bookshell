const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const path = require('path');

dotenv.config();
app.set('port', process.env.PORT || 4000);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ credentials: true, origin: true }));

//* read the cookie and add it to the request object under the prop "cookies"
app.use(cookieParser());
app.use(passport.initialize());

const configureJwtStrategy = require('./passport-config');
configureJwtStrategy(passport);

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
app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(app.get('port'), () => {
  console.log('Server started on port ' + app.get('port'));
});
