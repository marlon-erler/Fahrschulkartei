import Model from "../Model/model";
import Server from "./server";

const model = new Model();
const server = new Server(model);
server.start(8000);
