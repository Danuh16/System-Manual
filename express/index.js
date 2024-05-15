const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 3001;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Route to stream a video file
app.get("/video/:fileName", (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join(__dirname, "public", fileName);

  // Check if the file exists
  if (fs.existsSync(filePath)) {
    const readStream = fs.createReadStream(filePath);
    res.setHeader("Content-Type", "video/mp4");
    readStream.pipe(res);
    readStream.on("error", (err) => {
      console.error("Error streaming video:", err);
      res.status(500).send("Error streaming video");
    });
  } else {
    res.status(404).send("File not found");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
