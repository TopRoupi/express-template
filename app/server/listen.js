const app = require("./index");

const port = process.env.PORT || 3002
app.listen(port, () => console.log(`Server Spinning port ${port} - using ${process.env.NODE_ENV || "development"} environment`));
