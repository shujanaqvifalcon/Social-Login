/**
 * Social Login
 * @author Shuja Naqvi
 */
require('dotenv').config();
const app = require('express')();
const port = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'dev';
//DB Connectivity
require('./database');
// Middleware
require('./middleware/common')(app); //Please go through commonjs once because social configuration is there :)
// Route Initializer -> Go to Routes and check Index.js :xD
app.use("/api",require("./routes"))
// If we are in production mode, then we will use the cluster mode to create multiple processes
if (NODE_ENV === 'prod') {
  const cluster = require('cluster');
  if (cluster.isMaster) {
    require('os')
      .cpus()
      .forEach(() => cluster.fork());
  } else {
    app.listen(port, () => {
      // eslint-disable-next-line no-console
      console.log(`Server is running in ${NODE_ENV} mode on port ` + port);
    });
  }
} else {
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is running in ${NODE_ENV} mode on port ` + port);
  });
}



