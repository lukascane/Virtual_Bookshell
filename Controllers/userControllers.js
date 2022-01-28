const User = require('./../Models/UserSchema');

exports.registerUser = async (req, res) => {
  try {
    const user = new User();
    user.username = req.body.username;
    user.firstname = req.body.firstname;
    user.lastname = req.body.lastname;
    user.email = req.body.email;
    user.password = req.body.password;

    await user.save();

    return res.status(200).json({ message: 'User created' });
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Something went wrong creating the user', error });
  }
};

exports.listUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json({ message: 'list of users', users });
  } catch (error) {
    return res.status(400).json({ message: 'Error happened' });
  }
};
