// @flow

import express from "express";

import type { $Application, $Request, $Response } from "express";

const PORT: number =
  process.env.PORT != null ? parseInt(process.env.PORT, 3000) : 8080;

const app: $Application = express();

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
