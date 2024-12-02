import Model from "../Model/model";
import startServer from "./server";

const model = new Model();
startServer(8000, model);
