const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  res.send('Hello! from the Dummy Backend!');
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
