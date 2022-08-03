const app = require("./index");

const port = process.env.PORT || 3002
app.listen(port, () => console.log(`Server Spinning ${port}`));
