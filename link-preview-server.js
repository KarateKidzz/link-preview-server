const express = require('express');
const app = express();
var cors = require('cors');
const port = 8081;
const linkPreviewGenerator = require("link-preview-generator");

app.use(cors());

app.get('/', async (req, res) => {
    console.log('Received requst for preview');
    try {
        const previewData = await linkPreviewGenerator(req.query.url);
        console.log(previewData);

        res.json(previewData);
      } catch (error) {
          res.send(error);
      }
});

app.get('/preview', async (req, res) => {
    console.log('Received requst for preview');
    try {
        const previewData = await linkPreviewGenerator(req.query.url);
        console.log(previewData);

        res.json(previewData);
      } catch (error) {
          res.send(error);
      }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});