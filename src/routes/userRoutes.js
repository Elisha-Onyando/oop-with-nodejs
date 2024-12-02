const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.route('/')
  .get(userController.getAllUsers.bind(userController))
  .post(userController.createUser.bind(userController));

router.route('/:id')
  .get(userController.getUserById.bind(userController))
  .patch(userController.updateUser.bind(userController))
  .delete(userController.deleteUser.bind(userController));

module.exports = router;