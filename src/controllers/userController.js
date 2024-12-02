const userService = require("../services/userService");

class UserController {
  async getAllUsers(req, res) {
    try {
      const users = await userService.getAllUsers();
      if (users) {
        res.status(200).json(users);
      } else {
        res.status(404).json({ error: 'No users found. Please create one' })
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getUserById(req, res) {
    try {
      const user = await userService.getUserById(req.params.id);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: 'User not found' })
      }
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  async createUser(req, res) {
    try {
      const user = await userService.createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ errorName: error.name, error: error.errors[0].message });
    }
  }

  async updateUser(req, res) {
    try {
      const user = await userService.updateUser(req.params.id, req.body);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  async deleteUser(req, res) {
    try {
      await userService.deleteUser(req.params.id);
      res.status(200).json({ message: 'User deleted successfully' })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
}

const userController = new UserController();
module.exports = userController;