const connection = require("../config");

async function selectAll() {
    const [result] = await connection.execute(`
        SELECT * FROM users    
    `);

    return result;
};

async function selectById(id) {
    const [result] = await connection.execute(`
        SELECT * FROM users WHERE id = ?   
    `, [id]);

    return result;
};


module.exports = {
    selectAll,
    selectById
};

