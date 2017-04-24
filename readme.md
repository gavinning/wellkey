Wellkey
---
短期授权数字签名

### Usage
```js
const Wellkey = require('wellkey')
const key = new Wellkey({
    // 签名有效期，单位秒
    timeout: 60,
    // 基础加密字符串与服务器相对应
    AccessKey: 'ff6ef26f-fe30-4f1c-b04c-3adec850a980'
})

let acckey = key.create({
    AccessKeyID: 'lincodong',
    AccessKeySecret: '123456'
})
let keymap = key.server({
    AccessKeyID: 'lincodong',
    AccessKeySecret: '123456'
})

console.log('签名：', acckey)
console.log('服务器认证：', keymap.includes(acckey))
```

```sh
npm test
```
