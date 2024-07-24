import { getAllUsers } from "./requester";

export function getUserByName(parameters) {
    const url = 'http://localhost:3030/jsonstore/users'
    getAllUsers(url)
}