const { User } = require('./models');
const bcrypt = require('bcrypt');

const register = async (req, res) => {
  const { username, password } = req.body;
  //check if username and pass exists
  if (!username || !password) {
    return res.status(400).send({ message: 'Please fill in all fields.' });
  }

  const usernameInUse = await User.findOne({ username });
  //check if username is already in use
  if (usernameInUse) return res.status(400).send({ message: 'username already in use try again' });
  //hashing pass
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  try {
    // create new user
    const user = await User.create({
      username,
      password: hashPassword

    });
    return res.status(201).send({ message: 'User created successfully.' });

  } catch (err) {
    console.log(err);
    return res.status(400).send({ message: 'Error creating user' });

  }


};

const login = async (req, res, next) => {
  // username and pass from request
  const { username, password } = req.body;

  const user = await User.findOne({ username: username });
  //check if user exist
  if (!user) {
    res.status(401).send({ message: 'Invalid username or password' })
  } else {
    //comparing password
    const samePass = await bcrypt.compare(password, user.password);
    //not same password error message
    if (!samePass) {
      return res.status(400).send({ message: 'Password do not match' });
    }

  }
  req.session.userId = user._id;
  return res.status(200).send({ message: 'Login successful' });
}
//login out destroying session
const logout = (req, res, next) => {
  req.session.destroy((error) => {
    if (error) {
      console.error(error);
      res.status(500).send({ message: 'Couldn\'t log out' });
    }
    res.status(200).send({ message: 'logged out successfully' });
  })
}

module.exports = { login, logout, register }
