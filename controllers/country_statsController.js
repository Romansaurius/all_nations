const Country_stats = require('../models/country_statsModel');

exports.getAllCountry_stats = async (req, res) => {
    try {
        const data = await Country_stats.getAll();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.insertCountry_stats = async (req, res) => {
    try {
        const population = req.body.population;
        const gdp = req.body.gdp;
        if (!population || !gdp) {
            return res.status(400).json({ error: 'Faltan campos' });
        }
        const result = await Country_stats.insert(population, gdp);
        res.status(201).json({ mensaje: 'country_stats insertado correctamente', id: result.insertId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateCountry_stats = async (req, res) => {
    try {
        const id = req.params.id;
        const population = req.body.population;
        const gdp = req.body.gdp;
        if (!population || !gdp) {
            return res.status(400).json({ error: 'Faltan campos' });
        }
        const result = await Country_stats.update(id, population, gdp);
        if (result.affectedRows === 0) {
            return res.status(404).json({ mensaje: 'country_stats no encontrado' });
        }
        res.json({ mensaje: 'country_stats actualizado correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteCountry_stats = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Country_stats.delete(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ mensaje: 'country_stats no encontrado' });
        }
        res.json({ mensaje: 'country_stats eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
