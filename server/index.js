import express from "express"
import cors from "cors"
import routes from "./routes/routes.js"

const app = express();
const port = process.env.PORT || 3001

/* MIDDLEWARE */
app.use(express.json())
app.use(cors())

app.use('/', routes)

app.listen(port, () => console.log(`Listening on port ${port}`))