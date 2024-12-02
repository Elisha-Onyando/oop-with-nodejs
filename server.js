const app = require("./src/app");
const { sequelize } = require("./src/config/database");

const startAppServer = async () => {
  console.log("Starting the app server....")

  //1. Sync Models with DB Tables
  try {
    await sequelize.sync({ force: false });
    console.log('Database synced successfully');
  } catch (error) {
    console.error(error.message);
  }

  //2. Start the App Server
  const port = 3000;
  const server = app.listen(port, () => {
    console.log(`App running on port ${port}...`)
  });

  //3. Graceful server shutdown in case of Unhandled Rejection
  process.on('unhandledRejection', err => {
    console.log(err.name, err.message);
    server.close(() => {
      process.exit(1);
    })
  });
};
startAppServer();
