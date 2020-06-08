console.log(self)
importScripts('web-worker-externals.js')
self.addEventListener('message', e => {
  console.log('martin', e)/* 2020年01月14日 10时42分11秒 */
  fetch('http://111.231.55.237:3000/banner').then(res => res.json()).then(res => {
    console.log('martin', res)/* 2020年01月14日 13时42分47秒 */
    self.postMessage(res)
  })
})