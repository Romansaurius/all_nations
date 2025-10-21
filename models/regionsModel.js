const db = require('../config/db');

exports.getAll = async () => {
    const [rows] = await db.query('SELECT * FROM regions');
    return rows;
};

exports.insert = async (name, continent_id) => {
    const [result] = await db.query(
        'INSERT INTO regions (name, continent_id) VALUES (?, ?)',
        [name, continent_id]
    );
    return result;
};

exports.update = async (id, name, continent_id) => {
    const [result] = await db.query(
        'UPDATE regions SET name = ?, continent_id = ? WHERE region_id = ?',
        [name, continent_id, id]
    );
    return result;
};

exports.delete = async (id) => {
    const [result] = await db.query('DELETE FROM regions WHERE region_id = ?', [id]);
    return result;
};
