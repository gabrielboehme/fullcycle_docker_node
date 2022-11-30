import express from "express";
import routes from "../../internal/routes.js";
import { db } from "../../internal/database/db.js"

// Constants
const PORT = 8000;
const HOST = '0.0.0.0';

// Routes
const app = express();
app.use(express.json());
app.use(routes);

// DB Connection
try {
  await db.sync(
    () => console.log(`Banco de dados conectado: ${process.env.DB_NAME}`)
  )
} catch (e) {
  console.log('ERROR! - Could not connect to DB.')
  process.exit()
}


app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});