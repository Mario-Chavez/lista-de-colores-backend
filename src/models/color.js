import { Schema, model } from "mongoose";

const colorSchema = new Schema({
    color: {
        type: String,
        minLength: 2,
        maxLength: 100,
        unique: true,
        require: true,
    },
});

const Color = model("color", colorSchema);
export default Color;
