import * as httpRequest from '../utils/httpRequest';

export const getAllUsers = async () => {
    try {
        const response = await httpRequest.get('/users');
        return response;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw new Error('Error fetching users: ' + error.message);
    }
}

export const getUserById = async (userId) => {
    try {
        const response = await httpRequest.get(`/users/${userId}`);
        return response;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw new Error('Error fetching user: ' + error.message);
    }
}

export const createUser = async (user) => {
    const res = await getAllUsers();
    const users = res.data;

    if (users.some(existingUser => existingUser.email === user.email)) {
        throw new Error('Email already exists');
    }

    try {
        const response = await httpRequest.post('/users', user);
        return response;
    } catch (error) {
        console.error('Error creating user:', error);
        throw new Error('Error creating user: ' + error.message);
    }
}

export const updateUser = async (userId, user) => {
    try {
        const response = await httpRequest.put(`/users/${userId}`, user);
        return response;
    } catch (error) {
        console.error('Error updating user:', error);
        throw new Error('Error updating user: ' + error.message);
    }
}