const express = require('express')
const router = express.Router()
const continentController = require('../controllers/continentController')

/**
 * @swagger
 * tags:
 *   name: Continentes
 *   description: Gestión de continentes
 */

/**
 * @swagger
 * /api/continent/getall:
 *   get:
 *     summary: Obtener todos los continentes
 *     tags: [Continentes]
 *     security:
 *       - ApiKeyAuth: []
 *     responses:
 *       200:
 *         description: Lista de continentes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   nombre:
 *                     type: string
 */
router.get('/getall', continentController.getAllContinents);

/**
 * @swagger
 * /api/continent/insert:
 *   post:
 *     summary: Insertar un nuevo continente
 *     tags: [Continentes]
 *     security:
 *       - ApiKeyAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *     responses:
 *       201:
 *         description: Continente creado
 *       400:
 *         description: Error en los datos
 */
router.post('/insert', continentController.insertContinent);

/**
 * @swagger
 * /api/continent/update/{id}:
 *   put:
 *     summary: Actualizar un continente por ID
 *     tags: [Continentes]
 *     security:
 *       - ApiKeyAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del continente a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *     responses:
 *       200:
 *         description: Continente actualizado
 *       404:
 *         description: Continente no encontrado
 */
router.put('/update/:id', continentController.updateContinent);

/**
 * @swagger
 * /api/continent/delete/{id}:
 *   delete:
 *     summary: Eliminar un continente por ID
 *     tags: [Continentes]
 *     security:
 *       - ApiKeyAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del continente a eliminar
 *     responses:
 *       200:
 *         description: Continente eliminado
 *       404:
 *         description: Continente no encontrado
 */
router.delete('/delete/:id', continentController.deleteContinent);

module.exports = router;