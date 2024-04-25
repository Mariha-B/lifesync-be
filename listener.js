const app = require('./app');
const PORT = process.env.PORT || 9090;
const connectToDatabase = require('./db');

connectToDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  });