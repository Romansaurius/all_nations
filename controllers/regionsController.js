const Regions = require('../models/regionsModel');

exports.getAllRegions = async (req, res) => {
    try {
        const data = await Regions.getAll();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.insertRegions = async (req, res) => {
    try {
        const name = req.body.name;
        const continent_id = req.body.continent_id;
        if (!name || !continent_id) {
            return res.status(400).json({ error: 'Faltan campos' });
        }
        const result = await Regions.insert(name, continent_id);
        res.status(201).json({ mensaje: 'regions insertado correctamente', id: result.insertId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateRegions = async (req, res) => {
    try {
        const id = req.params.id;
        const name = req.body.name;
        const continent_id = req.body.continent_id;
        if (!name || !continent_id) {
            return res.status(400).json({ error: 'Faltan campos' });
        }
        const result = await Regions.update(id, name, continent_id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ mensaje: 'regions no encontrado' });
        }
        res.json({ mensaje: 'regions actualizado correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteRegions = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Regions.delete(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ mensaje: 'regions no encontrado' });
        }
        res.json({ mensaje: 'regions eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
