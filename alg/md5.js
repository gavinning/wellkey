const md5 = require('md5')

class Acc {
    constructor(key) {
        this.AccessKey = md5(key || 'c8dcd9b1-426e-45f3-80ce-54c817c9955d')
    }

    md5(data) {
        return md5(data)
    }

    create(data) {
        if(Array.isArray(data)){
            return this.forArray(data)
        }
        if(typeof data === 'object'){
            return this.forObject(data)
        }
        return this.forString(data)
    }

    forString(str) {
        let arr = new Array(3)
        let AccessKey = this.AccessKey
        arr.forEach(item => AccessKey = md5(AccessKey + item))
        return md5(`${AccessKey}${str}`)
    }

    forArray(arr) {
        let AccessKey = this.AccessKey
        arr.forEach(item => AccessKey = md5(AccessKey + item))
        return md5(`${AccessKey}${arr}`)
    }

    forObject(data) {
        let AccessKey = this.AccessKey
        for(let key in data){
            let val = data[key]
            AccessKey = md5(data[key]+AccessKey)
        }
        return md5(`${AccessKey}${data}`)
    }
}

module.exports = Acc
