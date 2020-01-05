var fs = require("fs");
var ffmpeg = require("fluent-ffmpeg");

const generateThumbnail = stream => {
  let thumbnailDir = `./thumbnails/${stream}`;

  if (!fs.existsSync(thumbnailDir)) {
    fs.mkdirSync(thumbnailDir);
  }

  ffmpeg(`./media/live/${stream}/index.m3u8`).screenshots({
    timestamps: ["00:00:01"],
    filename: "thumbnail.png",
    folder: thumbnailDir,
    size: "320x240"
  });
};

module.exports = { generateThumbnail };
