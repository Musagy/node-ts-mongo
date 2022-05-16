import mongoose, { ConnectOptions } from "mongoose";

(async () => {
  try {
    const connectOptions: ConnectOptions = {
      appName: "mongo-x-ts",
    };

    const db = await mongoose.connect(`mongodb://localhost/mongo-x-ts`, connectOptions);
    console.log(
      "Base de datos conectada con " + db.connection.name
    );
  } catch (error) {
    console.log(error);
  }
})();
