const app = require('./app/app');

const port = 8080;
app.listen(port, () => {
  console.log(`Express server running on http://localhost:${port}`);
});
