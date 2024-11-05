import { Hono } from 'hono'
import { cors } from 'hono/cors'

import { userRouter } from './routes/user'
import { blogRouter } from './routes/blog';


const app = new Hono<{
  Bindings:{
      DATABASE_URL:string,
      MY_SECRET_KEY:string
  }
}>();

app.use('/*', cors())
app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);


export default app
