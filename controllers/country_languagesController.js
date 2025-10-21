const Country_languages = require('../models/country_languagesModel');

exports.getAllCountry_languages = async (req, res) => {
    try {
        const data = await Country_languages.getAll();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.insertCountry_languages = async (req, res) => {
    try {
        const language_id = req.body.language_id;
        const official = req.body.official;
        if (!language_id || !official) {
            return res.status(400).json({ error: 'Faltan campos' });
        }
        const result = await Country_languages.insert(language_id, official);
        res.status(201).json({ mensaje: 'country_languages insertado correctamente', id: result.insertId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateCountry_languages = async (req, res) => {
    try {
        const id = req.params.id;
        const language_id = req.body.language_id;
        const official = req.body.official;
        if (!language_id || !official) {
            return res.status(400).json({ error: 'Faltan campos' });
        }
        const result = await Country_languages.update(id, language_id, official);
        if (result.affectedRows === 0) {
            return res.status(404).json({ mensaje: 'country_languages no encontrado' });
        }
        res.json({ mensaje: 'country_languages actualizado correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteCountry_languages = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Country_languages.delete(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ mensaje: 'country_languages no encontrado' });
        }
        res.json({ mensaje: 'country_languages eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
