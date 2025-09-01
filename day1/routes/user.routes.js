const express = require('express');
const { getUsers, getUserById, createUser, updateUser, deleteUser, getAllUsers, createNewUser } = require('../controllers/user.controller');//'./controlers/user ... is wrong as first we going out of routes foldrr then go in controller folder


const userRouter = express.Router();

// CRUD routes
userRouter.get('/', getAllUsers); // Get all users
// userRouter.get('/:id', getUserById); // Get user by ID
userRouter.post('/', createNewUser); // Create a new user
userRouter.patch('/:id', updateUser); // Update user by ID
userRouter.delete('/:id', deleteUser); // Delete user by ID

module.exports = userRouter;