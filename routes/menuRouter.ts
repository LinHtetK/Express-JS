import express from "express";
import { appData } from "../demoData";

export const menuRouter = express.Router();
const { menu } = appData;

menuRouter.get("/", (req, res) => {
  res.send(menu);
});
