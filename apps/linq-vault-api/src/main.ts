/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

 import * as express from 'express';

 const app = express();
 const router = express.Router();

 app.use('/', router);
 
 router.get('/api', (req, res) => {
   res.send({ message: 'Welcome to svc-linq-vault!' });
 });
 
 router.get('/api/links', (req, res) => {
   res.send(links);
 });
 
 const port = process.env.port || 3333;
 
 const server = app.listen(port, () => {
   console.log(`Listening at http://localhost:${port}/api`);
 });
 
 server.on('error', console.error);
 
 const links = [
   {
     link: 'https://www.google.com',
     title: 'google',
     tags: ['search', 'bigco'],
   },
   {
     link: 'https://www.ally.com',
     title: 'ally bank',
     tags: ['bank', 'financial'],
   },
   {
     link: 'https://www.marginalrevolution.com',
     title: 'marginal revolution',
     tags: ['economics', 'blog'],
   },
 ];