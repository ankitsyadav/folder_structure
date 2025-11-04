const express = require("express");;
const app = express();
app.use(express.json());
const {userRoutes} = require("./users/routes");
app.use("/api/users",userRoutes);
app.listen(3000, () => console.log("Server running at http://localhost:3000"));

module.exports = {app}