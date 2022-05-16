import app from "./app";
import "./database/db"

const PORT = 3000;

app.listen(process.env.PORT || PORT, () => {
  console.log(
    `server escuchando desde el puerto: ${process.env.PORT || PORT}
    >>> http://localhost:${process.env.PORT || PORT}`
    );
})