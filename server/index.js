import express from "express"
import cors from "cors"
import routes from "./routes/routes.js"
import helmet from 'helmet'

const app = express();
const port = process.env.PORT || 3001

/* MIDDLEWARE */
app.use(express.json())
app.use(cors())
app.use(helmet())
/* helmet adds a layer of security to your application by configuring HTTP headers such as X-XSS-Protection, X-Content-Type-Options, Strict-Transport-Security, X-Frame-Options, and more. These headers can help prevent various types of attacks, such as cross-site scripting (XSS) attacks, clickjacking attacks, and content sniffing attacks. */

app.use('/', routes)

app.listen(port, () => console.log(`Listening on port ${port}`))

export default app;