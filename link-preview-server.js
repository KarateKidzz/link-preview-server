const express = require('express');
const app = express();
var cors = require('cors');
const port = 8081;
const linkPreviewGenerator = require("link-preview-generator");

app.use(cors());

app.get('/preview', async (req, res) => {
    console.log('Generating preview for: ' + req.query.url);
    try {
        const previewData = await linkPreviewGenerator(req.query.url, [
          '--single-process', '--no-zygote', '--no-sandbox'
        ]);
        res.json(previewData);
      } catch (error) {
	        console.log(error);
          res.send(error);
      }
});

app.listen(port, () => {
  console.log(`Link preview server listening on port ${port}`)
});