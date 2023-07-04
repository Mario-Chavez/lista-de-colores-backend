import Color from "../models/color";

export const obtenerColores = async (req, res) => {
    try {
        const color = await Color.find();
        res.status(200).json(color);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error al encontrar los colores en la db",
        });
    }
};
export const crearColores = async (req, res) => {
    try {
        const colorNuevo = await Color(req.body);
        await colorNuevo.save();
        res.status(201).json({
            mensaje: "tarea guardada correctamente",
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error al guardar tarea en la db",
        });
    }
};
