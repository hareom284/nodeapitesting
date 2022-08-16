import { json, urlencoded } from "body-parser";
import morgan from "morgan";

const express = require("express");

export const app = express();

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan("dev"))

export const start = () => { }