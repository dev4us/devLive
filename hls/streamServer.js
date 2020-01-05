const NodeMediaServer = require("node-media-server");
const cron = require("node-cron");
const request = require("request");

const streamConfig = require("./streamConfig");
const generateThumb = require("./generateThumb");

cron.schedule("*/5 * * * * *", function() {
  console.log("running a task every 5 seconds");
  request.get(
    "http://127.0.0.1:" + streamConfig.http.port + "/api/streams",
    function(err, res, body) {
      let streams = JSON.parse(body);

      if (typeof (streams["live"] !== undefined)) {
        let live_streams = streams["live"];

        for (let stream in live_streams) {
          if (!live_streams.hasOwnProperty(stream)) continue;
          // create Thumbnail for live streamer :)
          generateThumb.generateThumbnail(stream);
        }
      }
    }
  );
});

var nms = new NodeMediaServer(streamConfig);
nms.run();
