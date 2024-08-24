import { Schema, model } from "mongoose";

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [ 3, "El nombre debe tener al menos 3 caracteres" ],
        maxLength: [ 25, "El nombre debe tener como máximo 25 caracteres" ],
    },
    lastName: {
        type: String,
        required: true,
        minLength: [ 3, "El apellido debe tener al menos 3 caracteres" ],
        maxLength: [ 25, "El apellido debe tener como máximo 25 caracteres" ],
    },
    email: {
        type: String,
        unique: true,
        required: [ true, "El email es obligatorio" ],
        lowercase: true,
        match: [ /^[a-z0-9.]+@[a-z0-9-]+.(com$|com.[a-z0-9]{2}$)/, "El email es inválido" ],
    },
    age: {
        type: Number,
        required: [ true, "La edad es obligatoria" ],
    },
    password: {
        type: String,
        required: [ true, "La contraseña es obligatoria" ],
    },
    cart: {
        type: Schema.Types.ObjectId,
        ref: "carts",
    },
    roles: {
        type: Schema.Types.Array,
    },

}, {
    timestamps: true, // Añade timestamps para generar createdAt y updatedAt
});

const User = model("users", userSchema);

export default User;