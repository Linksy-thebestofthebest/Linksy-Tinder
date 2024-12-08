import mongoose from "mongoose";

const PictureSchema = new mongoose.Schema({
  name: { type: String, required: true },
  src: { type: String, required: true },
});

const PerfilSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  nome: { type: String, required: true },
  dataAniversario: { type: String, required: true },
  localizacao: { type: String, required: true },
  bio: { type: String, required: true },
  url: { type: String },
  foto: { type: PictureSchema, required: true }, 
});

const Perfil = mongoose.models.Perfil || mongoose.model("Perfil", PerfilSchema);
export default Perfil;