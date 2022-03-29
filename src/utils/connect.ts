import mongoose from "mongoose";
import config from "config";
import logger from "./logger";

const connect = async () => {
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);

    logger.info("Db connected");
  } catch (error) {
    logger.error(JSON.stringify(error));

    process.exit(1);
  }
};

export default connect;
