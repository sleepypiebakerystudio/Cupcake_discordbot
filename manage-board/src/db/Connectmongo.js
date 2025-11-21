const mongoose = require("mongoose");
require("dotenv").config();


const ConnectMongo = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("💫 Ursa Main MongoDB bağlantısı başarılı!");
    } catch (err){
        console.error("❌ Ursa Main bağlantı hatası:", err);
    }
};

module.exports = ConnectMongo;