const Koa = require('koa')
const app = new Koa()
const router = new require('koa-router')()
const cors = require('koa-cors')

router.get('/a', async (ctx) => { // 知乎热报
  ctx.body = 1
})

app.use(cors({
  origin: function (ctx) {
    if (ctx.url === '/test') {
      return false;
    }
    return '*';
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))

app.use(router.routes()).use(router.allowedMethods())

app.listen(3001)