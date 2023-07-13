const server = require("./src/server");

const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log("Server on port", port);
});
