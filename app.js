const express = require('express')
const cors = require('cors')
const charactersRouter = require("./routers/charactersRouter")
const usersRouter = require("./routers/usersRouter")
const app = express()
const PORT = 3000

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({"message": 'Online'})
})
app.use("/characters", charactersRouter);
app.use("/users", usersRouter);

app.listen(PORT, ()=>{console.log(`Listening on port http://localhost:${PORT}/`)})