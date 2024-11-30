import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    primeiroNome: { type: String, required: true },
    ultimoNome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    senha: { type: String, required: true },
    escolha: { type: String, enum: ["trabalhar", "contratar"], required: true },
});

const User = mongoose.model('User', UserSchema);
export default User;
