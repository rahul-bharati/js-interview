const app = require("./index");
const Data = require("./models/data");

const main = async () => {
  await Data.sync({ force: true });
  app.listen(3000, () => {
    console.log("App listening on port 3000");
  });
};

main().catch((error) => {
  console.log("Error occurred", error);
  process.exit(1);
});
