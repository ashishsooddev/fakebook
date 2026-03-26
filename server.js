
import express from "express";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const app = express();

const currentFile = fileURLToPath(import.meta.url);
const currentDir = dirname(currentFile);

const publicPath = join(currentDir, "public");
app.use(express.static(publicPath));

app.get("/", (request, response) => {
  const homeFile = join(publicPath, "index.html");
  response.sendFile(homeFile);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});