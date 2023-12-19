const express = require('express');
const app = express();
const port = 3000; 


app.get('/callback', (req, res) => {
  console.log('Authorization callback:', req.query);
  res.send('Авторизация успешно прошла! Вы можете закрыть это окно.');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
