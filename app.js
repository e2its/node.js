const { Router } = require('express');
const express = require('express');
const app = express();
const router = express.Router();
const port = 3000

app.listen(port, () => console.info(`Server is running on port ${port}`));