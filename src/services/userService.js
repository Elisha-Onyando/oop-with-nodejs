const User = require("../models/user");

class UserService {
  async getAllUsers() {
    return await User.findAll();
  }

  async getUserById(userId) {
    return await User.findByPk(userId);
  }

  async createUser(userData) {
    return await User.create(userData);
  }

  async updateUser(userId, userData) {
    const user = await User.findByPk(userId);
    if (user) {
      return await user.update(userData);
    } else {
      throw new Error('User not found');
    }
  }

  async deleteUser(userId) {
    const user = await User.findByPk(userId);
    if (user) {
      return await user.destroy();
    } else {
      throw new Error('User not found')
    }
  }
};
const userService = new UserService();
module.exports = userService;