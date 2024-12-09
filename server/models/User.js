import mongoose from 'mongoose';

const PictureSchema = new mongoose.Schema({
    name: { type: String, required: true },
    src: { type: String, required: true },
});

const UserSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    dataAniversario: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    localizacao: { type: String, required: true },
    senha: { type: String, required: true },
    bio: { type: String, required: true },
    foto: { type: PictureSchema, required: true }, 
    escolha: { type: String, enum: ["trabalhar", "contratar"], required: true },
});

const User = mongoose.model('User', UserSchema);
export default User;
