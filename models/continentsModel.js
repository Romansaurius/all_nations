const db = require('../config/db')

exports.getAll = async () =>{
    const [rows] = await db.query('SELECT * FROM continents')
    return rows;
}

exports.insert = async (name) => {
    const [result] = await db.query('INSERT INTO continents (name) VALUES (?)', [name]);
    return result;
};

exports.update = async (id, name) => {
    const [result] = await db.query('UPDATE continents SET name = ? WHERE continent_id = ?', [name, id]);
    return result;
};

exports.delete = async (id) => {
    const [result] = await db.query('DELETE FROM continents WHERE continent_id = ?', [id]);
    return result;
};