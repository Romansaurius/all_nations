const db = require('../config/db');

exports.getAll = async () => {
    const [rows] = await db.query('SELECT * FROM country_stats');
    return rows;
};

exports.insert = async (population, gdp) => {
    const [result] = await db.query(
        'INSERT INTO country_stats (population, gdp) VALUES (?, ?)',
        [population, gdp]
    );
    return result;
};

exports.update = async (id, population, gdp) => {
    const [result] = await db.query(
        'UPDATE country_stats SET population = ?, gdp = ? WHERE country_id = ?',
        [population, gdp, id]
    );
    return result;
};

exports.delete = async (id) => {
    const [result] = await db.query('DELETE FROM country_stats WHERE country_id = ?', [id]);
    return result;
};
