const app = require("./app.js");

require("dotenv").config();

//Port
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3005;

//Listen
app.listen(PORT, () => console.log("Listening on port:", PORT));
