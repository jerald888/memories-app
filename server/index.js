import express  from "express"; // 2.1
import bodyParser from "body-parser"; // 2.1
import mongoose from "mongoose"; // 2.1
import cors from "cors" // 2.1

import postRoutes from "./routes/posts-route.js" // 7.1

const app = express() /* 4.1 */


app.use(bodyParser.json({ limit: "30mb", extended: true })) /* 4.1 */
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true })) /* 4.1 */
app.use(cors()) /* 4.1 */

app.use("/posts", postRoutes) /* 7.1 */

const CONNECTION_URL = "mongodb+srv://jerald888:WHSe5cX33HSXwxdt@myclusters.eoaie4h.mongodb.net/?retryWrites=true&w=majority" /* 6.1 */


const PORT = process.env.PORT || 5000; /* 6.1 */

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`server is running on port: ${PORT}`)))
.catch((error) => console.log(error.message)) /* 6.1 */ 

// mongoose.set("useFindAndModify", false) /* 6.1 */


/* **** if not running login to mongoose cloud.... add current ip.... reset password  */

/* if cross origin error inside react app console in browser.... it's because we used app.use(posts) before app.use(cors)..... so make app.use(posts) come after app.use(cors)  */