const db = require('../config/db');

exports.getAll = async () => {
    const [rows] = await db.query('SELECT * FROM country_languages');
    return rows;
};

exports.insert = async (language_id, official) => {
    const [result] = await db.query(
        'INSERT INTO country_languages (language_id, official) VALUES (?, ?)',
        [language_id, official]
    );
    return result;
};

exports.update = async (id, language_id, official) => {
    const [result] = await db.query(
        'UPDATE country_languages SET language_id = ?, official = ? WHERE country_id = ?',
        [language_id, official, id]
    );
    return result;
};

exports.delete = async (id) => {
    const [result] = await db.query('DELETE FROM country_languages WHERE country_id = ?', [id]);
    return result;
};
