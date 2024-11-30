import mongoose from 'mongoose';

const PerfilSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    dataAniversario: { type: String, required: true },
    localizacao: { type: String, required: true },
    bio: { type: String, required: true },
    url: { type: String },
    foto: { type: String, default: null, required: true },
});

const Perfil = mongoose.model('Perfil', PerfilSchema);
export default Perfil;
