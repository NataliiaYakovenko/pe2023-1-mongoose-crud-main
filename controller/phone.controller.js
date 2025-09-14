const mongoose = require('mongoose');
const { Phone } = require('../models');

module.exports.createPhone = async (req, res, next) => {
  const { body } = req;
  try {
    const createdPhone = await Phone.create(body);

    if (!createdPhone) {
      return res.status(400).send('Somrthing was wrong');
    }
    return res.status(201).send({ data: createdPhone });
  } catch (error) {
    next(error);
  }
};

module.exports.findAllPhones = async (req, res, next) => {
  try {
    const foundUsers = await Phone.find();
    if (!foundUsers) {
      return res.status(404).send('Phone not found');
    }
    return res.status(200).send({ data: foundUsers });
  } catch (error) {
    next(error);
  }
};

module.exports.findPhoneById = async (req, res, next) => {
  const {
    params: { phoneId },
  } = req;

  try {

    
  } catch (error) {
    next(error);
  }
};

module.exports.udatePhoneById = async (req, res, next) => {};

module.exports.deletePhoneById = async (req, res, next) => {};
