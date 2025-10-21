const db = require('../config/db');

exports.getAll = async () => {
    const [rows] = await db.query('SELECT * FROM languages');
    return rows;
};

exports.insert = async (name, language_code) => {
    const [result] = await db.query(
        'INSERT INTO languages (name, language_code) VALUES (?, ?)',
        [name, language_code]
    );
    return result;
};

exports.update = async (id, name, language_code) => {
    const [result] = await db.query(
        'UPDATE languages SET name = ?, language_code = ? WHERE language_id = ?',
        [name, language_code, id]
    );
    return result;
};

exports.delete = async (id) => {
    const [result] = await db.query('DELETE FROM languages WHERE language_id = ?', [id]);
    return result;
};
