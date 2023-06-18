import express from 'express';
import bodyParser from 'body-parser';
import config from './db/config.js';
import userRoutes from './routes/userRoute.js';


const app = express();
//
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
// my-routes
userRoutes(app);


app.get('/', (req, res) => {
    res.send("Hello Welcome my Blog API!");
});

app.listen(config.port, () => {
    console.log(`Server is running on ${config.url}`);
});