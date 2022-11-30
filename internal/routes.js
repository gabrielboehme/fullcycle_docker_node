import express from "express";
import { User } from "./database/models/user.js";
const routes = express.Router();

// Routes
routes.get('/', async (req, res) => { 
  const users = await User.findAll();
  let user_html = `<h1>Full Cycle Rocks!</h1>`
  users.forEach(user => {
    user_html = user_html + `\n<h1>${user.Name}<\h1>`
  });

  return res.send(user_html).status(200)
});
  
routes.post('/user/:name', async function (req, res) {
  // saves user name in db
  const user = await User.create({
    Name: req.params.name,
    lastName: 'Node App User'
  });
  return res.json({"user": {
    "id": user.id,
    "name": user.Name,
  }}).status(200)
})

routes.get('/health', (req, res) => {
  console.log('Service healthy.')
  return res.
      json({"status": "healthy"}).
      status(200);
  });

export { routes as default };