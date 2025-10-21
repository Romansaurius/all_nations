const db = require('../config/db');

exports.getAll = async () => {
    const [rows] = await db.query('SELECT * FROM region_areas');
    return rows;
};

exports.insert = async (name, region_id) => {
    const [result] = await db.query(
        'INSERT INTO region_areas (name, region_id) VALUES (?, ?)',
        [name, region_id]
    );
    return result;
};

exports.update = async (id, name, region_id) => {
    const [result] = await db.query(
        'UPDATE region_areas SET name = ?, region_id = ? WHERE area_id = ?',
        [name, region_id, id]
    );
    return result;
};

exports.delete = async (id) => {
    const [result] = await db.query('DELETE FROM region_areas WHERE area_id = ?', [id]);
    return result;
};
