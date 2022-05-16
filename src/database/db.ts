import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL || "mongodb://localhost/mongo-x-ts";

(async () => {
  try {
    const db = await mongoose.connect(MONGODB_URL);
    console.log(
      "Base de datos conectada con " + db.connection.name
    );
  } catch (error) {
    console.log(error);
  }
})();
