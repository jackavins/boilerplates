import express from "express";
import * as dotenv from "dotenv";
import path from 'path';
import userRoute from "./routes/user";

const app = express();
dotenv.config({ path: path.join(__dirname, '.env') });
const { PORT } = process.env;


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

app.use('/users', userRoute);

app.listen(PORT, () => console.log(`app listening on ${PORT}`));