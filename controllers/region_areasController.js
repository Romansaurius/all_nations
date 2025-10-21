const Region_areas = require('../models/region_areasModel');

exports.getAllRegion_areas = async (req, res) => {
    try {
        const data = await Region_areas.getAll();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.insertRegion_areas = async (req, res) => {
    try {
        const name = req.body.name;
        const region_id = req.body.region_id;
        if (!name || !region_id) {
            return res.status(400).json({ error: 'Faltan campos' });
        }
        const result = await Region_areas.insert(name, region_id);
        res.status(201).json({ mensaje: 'region_areas insertado correctamente', id: result.insertId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateRegion_areas = async (req, res) => {
    try {
        const id = req.params.id;
        const name = req.body.name;
        const region_id = req.body.region_id;
        if (!name || !region_id) {
            return res.status(400).json({ error: 'Faltan campos' });
        }
        const result = await Region_areas.update(id, name, region_id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ mensaje: 'region_areas no encontrado' });
        }
        res.json({ mensaje: 'region_areas actualizado correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteRegion_areas = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Region_areas.delete(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ mensaje: 'region_areas no encontrado' });
        }
        res.json({ mensaje: 'region_areas eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
