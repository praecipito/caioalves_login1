const Joi = require('joi');
const bcrypt = require('bcrypt');
const studentsService = require('../services/students.service');

const registerSchema = Joi.object({
  name: Joi.string().min(6).max(100).required(),
  username: Joi.string().min(6).max(30).required(),
  email: Joi.string().max(100).email().required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
  repeatPassword: Joi.string().valid(Joi.ref('password')).required(),
  role: Joi.string().required()
});

exports.register = async (req, res, next) => {
  const { error, value } = registerSchema.validate(req.body);
  if (error) {
    return res.status(400).send({
      success: 0,
      error: error.details[0].message
    });
  }

  try {
    const hashedPassword = await bcrypt.hash(value.password, 10); // Hash the password with a salt factor of 10

    const data = {
      name: value.name,
      username: value.username,
      email: value.email,
      password: hashedPassword, // Store the hashed password in the database
      role: value.role
    };

    studentsService.register(data, (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).send({
          success: 0,
          error: 'Internal Server Error'
        });
      }
      return res.status(200).send({
        success: 1,
        data: results
      });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: 0,
      error: 'Internal Server Error'
    });
  }
};
