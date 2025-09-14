const { Router } = require('express');
const { phoneController } = require('../controller');

const phoneRouter = Router();

phoneRouter
  .route('/')
  .post(phoneController.createPhone)
  .get(phoneController.findAllPhones);

phoneRouter
  .route('/:phoneId')
  .get(phoneController.findPhoneById)
  .patch(phoneController.udatePhoneById)
  .delete(phoneController.deletePhoneById);

module.exports = phoneRouter;
