import app from "./app";
import "./database/db"

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(
    `server escuchando desde el puerto: ${PORT}
    >>> http://localhost:${PORT}`
    );
})