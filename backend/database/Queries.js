const { db } = require("../database/connection");
const util = require("util");
const query = util.promisify(db.query).bind(db);

const getAllUsers = async () => {
    let sql = `SELECT * FROM users`;
    const users = await query(sql);
    return Object.values(JSON.parse(JSON.stringify(users)))
}

const getUser = async (id) => {
    let sql = `SELECT * FROM users WHERE ID=${id}`;
    const user = await query(sql);
    return JSON.parse(JSON.stringify(user))[0];
}

const createUser = async (user) => {
    let sql = `INSERT INTO USERS SET ?`;
    const {insertId} = await query(sql,user);
    return {id:insertId,...user};
}

module.exports = {
    getAllUsers,
    getUser,
    createUser
}