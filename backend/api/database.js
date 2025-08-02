import mongoose from "mongoose";
mongoose.connection.on("open", () => {
    console.log("DB connected");
});

mongoose.connection.on("disconnected", () => {
    console.log("DB disconnected");
});


await mongoose.connect("mongodb+srv://pedrotalaveras:jw8cLsFMMivnVLPw@cluster0.zqusu7a.mongodb.net/");
