const Continents = require('../models/continentsModel')

exports.getAllContinents = async (req,res) =>{
    try {
        const continents = await Continents.getAll();
        res.json(continents);
    } catch (error) {
        res.status(500).json({error : error.message})
    }

}

exports.insertContinent = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({ error: 'Falta el campo name' });
        }

        const result = await Continents.insert(name);
        res.status(201).json({ mensaje: 'Continente insertado correctamente', id: result.insertId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateContinent = async (req, res) => {
    try {
        const id = req.params.id;
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({ error: 'Falta el campo name' });
        }

        const result = await Continents.update(id, name);

        if (result.affectedRows === 0) {
            return res.status(404).json({ mensaje: 'Continente no encontrado' });
        }

        res.json({ mensaje: 'Continente actualizado correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteContinent = async (req, res) => {
    try {
        const id = req.params.id;

        const result = await Continents.delete(id);

        if (result.affectedRows === 0) {
            return res.status(404).json({ mensaje: 'Continente no encontrado' });
        }

        res.json({ mensaje: 'Continente eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};