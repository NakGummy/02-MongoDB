import express from "express";
import {
  createDoc,
  insertManyDoc,
  singleDoc,
  allDoc,
  docWithField,
  updateById,
} from "./models/Movies.js";

import { connectDB } from "./db/connectDB.js";

const app = express();
const port = process.env.PORT || 8000;
const DATABASE_URL = process.env.DATABASE_URL || `mongodb://127.0.0.1:27017/`;

connectDB(DATABASE_URL);

// Test
updateById("6697cf0ebfcf1c771b5235e2");

app.listen(port, () => console.log(`Server listening on port ${port}`));
