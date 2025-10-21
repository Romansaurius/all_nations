const Languages = require('../models/languagesModel');

exports.getAllLanguages = async (req, res) => {
    try {
        const data = await Languages.getAll();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.insertLanguages = async (req, res) => {
    try {
        const name = req.body.name;
        const language_code = req.body.language_code;
        if (!name || !language_code) {
            return res.status(400).json({ error: 'Faltan campos' });
        }
        const result = await Languages.insert(name, language_code);
        res.status(201).json({ mensaje: 'languages insertado correctamente', id: result.insertId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateLanguages = async (req, res) => {
    try {
        const id = req.params.id;
        const name = req.body.name;
        const language_code = req.body.language_code;
        if (!name || !language_code) {
            return res.status(400).json({ error: 'Faltan campos' });
        }
        const result = await Languages.update(id, name, language_code);
        if (result.affectedRows === 0) {
            return res.status(404).json({ mensaje: 'languages no encontrado' });
        }
        res.json({ mensaje: 'languages actualizado correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteLanguages = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Languages.delete(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ mensaje: 'languages no encontrado' });
        }
        res.json({ mensaje: 'languages eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
