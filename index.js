const express = require("express");
const sqlConnection = require("./config/connection");
const allRoutes = require("./routes");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", allRoutes);

sqlConnection.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`listening at http://localhost:${PORT}`);
    });
});
