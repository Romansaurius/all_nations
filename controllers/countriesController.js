const Countries = require('../models/countriesModel');

exports.getAllCountries = async (req, res) => {
    try {
        const data = await Countries.getAll();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.insertCountries = async (req, res) => {
    try {
        const name = req.body.name;
        const area = req.body.area;
        const national_day = req.body.national_day;
        const country_code2 = req.body.country_code2;
        const country_code3 = req.body.country_code3;
        const region_id = req.body.region_id;
        if (!name || !area || !national_day || !country_code2 || !country_code3 || !region_id) {
            return res.status(400).json({ error: 'Faltan campos' });
        }
        const result = await Countries.insert(name, area, national_day, country_code2, country_code3, region_id);
        res.status(201).json({ mensaje: 'countries insertado correctamente', id: result.insertId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateCountries = async (req, res) => {
    try {
        const id = req.params.id;
        const name = req.body.name;
        const area = req.body.area;
        const national_day = req.body.national_day;
        const country_code2 = req.body.country_code2;
        const country_code3 = req.body.country_code3;
        const region_id = req.body.region_id;
        if (!name || !area || !national_day || !country_code2 || !country_code3 || !region_id) {
            return res.status(400).json({ error: 'Faltan campos' });
        }
        const result = await Countries.update(id, name, area, national_day, country_code2, country_code3, region_id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ mensaje: 'countries no encontrado' });
        }
        res.json({ mensaje: 'countries actualizado correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteCountries = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Countries.delete(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ mensaje: 'countries no encontrado' });
        }
        res.json({ mensaje: 'countries eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
