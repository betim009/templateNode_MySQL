const { selectAll, selectById } = require("../models/users");

async function findAllUsers() {
    const result = await selectAll();

    if (result.length === 0) {
        return { "message": "Sem usuarios cadastrados"}
    };

    return result;
};

async function findUserById(id) {
    const result = await selectById(id);

    console.log(result)

    if (result.length === 0) {
        return { "message": "Usuario por id nao encontrado."}
    };

    return result;
};

module.exports = {
    findAllUsers,
    findUserById
}