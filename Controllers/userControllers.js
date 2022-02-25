const User = require('./../Models/UserSchema');
const bcrypt = require('bcrypt');
const authenticationHelper = require('../Middleware/authentication'); //importing authentication
const { response } = require('express');

exports.registerUser = async (req, res) => {
  try {
    //* hash bcrypt
    const checkUser = await User.findOne({ username: req.body.username });
    if (checkUser !== null) {
      return res.status(400).json({ message: 'Username already exist' });
    }
    //
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = new User();
    user.username = req.body.username;
    user.firstname = req.body.firstname;
    user.lastname = req.body.lastname;
    user.email = req.body.email;
    user.password = hashedPassword;
    user.role = req.body.role;

    await user.save();

    return res.status(200).json({ message: 'User created' });
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Something went wrong creating the user', error });
  }
};

// ListUser
exports.listUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json({ message: 'list of users', users });
  } catch (error) {
    return res.status(400).json({ message: 'Error happened' });
  }
};

// LOGIN

exports.login = async (req, res) => {
  //check if the user exists with that email
  const user = await User.findOne({ username: req.body.username });

  if (user === null) {
    return res.status(404).json({ message: 'Username not found' });
  }

  try {
    const checkPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (checkPassword) {
      //password is matching
      //Generate JWT token here
      const token = await authenticationHelper.generateToken(user);

      // send httpOnly 🍪
      return res
        .status(200)
        .cookie('jwt', token, {
          httpOnly: true,
          secure: false,
          sameSite: 'lax',
        })
        .json({
          message: 'Login successful',
          // we are sending the user as an object with only selected keys
          user, // later I might want to send more keys here
        });
    } else {
      return res.status(400).json({ message: 'Passwords not matching' });
    }
  } catch (error) {
    console.log('the error ', error);
    return res.status(400).json({ message: 'General error upon signing in.' });
  }
};

// Delete user
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: 'User removed', user });
  } catch (error) {
    return res.status(400).json({ message: 'Error happened' });
  }
};

// Update user
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.user._id,
      {
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: req.body.password,
        email: req.body.email,
      },
      { new: true }
    );

    return res.status(200).json({ message: 'User updated', user });
  } catch (error) {
    return res.status(400).json({ message: 'Error happened' });
  }
};

// Log out and clear Cookies
exports.logout = async (req, res) => {
  // Remove the httpOnly cookie

  res
    .clearCookie('jwt', {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
    })
    .json({ message: 'Logout successful' }); // saying we want to send a JSON object
  //.redirect("/");
};
