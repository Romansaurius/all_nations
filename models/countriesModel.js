const db = require('../config/db');

exports.getAll = async () => {
    const [rows] = await db.query('SELECT * FROM countries');
    return rows;
};

exports.insert = async (name, area, national_day, country_code2, country_code3, region_id) => {
    const [result] = await db.query(
        'INSERT INTO countries (name, area, national_day, country_code2, country_code3, region_id) VALUES (?, ?, ?, ?, ?, ?)',
        [name, area, national_day, country_code2, country_code3, region_id]
    );
    return result;
};

exports.update = async (id, name, area, national_day, country_code2, country_code3, region_id) => {
    const [result] = await db.query(
        'UPDATE countries SET name = ?, area = ?, national_day = ?, country_code2 = ?, country_code3 = ?, region_id = ? WHERE country_id = ?',
        [name, area, national_day, country_code2, country_code3, region_id, id]
    );
    return result;
};

exports.delete = async (id) => {
    const [result] = await db.query('DELETE FROM countries WHERE country_id = ?', [id]);
    return result;
};
