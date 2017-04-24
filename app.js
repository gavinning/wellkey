const path = require('path')
const Acc = require('./alg/md5')

class WellKey {
    constructor(config) {
        this.config = config
        this.acc = new Acc(config.AccessKey)
    }

    timeMap() {
        let arr = []
        let size = this.config.timeout/2
        let timestamp = this.timestamp()

        for(let i=0; i<size; i++){
            arr.push(timestamp-i)
            arr.push(timestamp+i)
        }
        return arr.sort()
    }

    timestamp() {
        return Number(new Date().getTime().toString().slice(0, 10))
    }

    create(key) {
        return this.acc.md5( this.acc.create(key) + this.acc.create(this.timestamp()) )
    }

    server(key) {
        return this.timeMap().map(item => {
            return this.acc.md5( this.acc.create(key) + this.acc.create(item) )
        })
    }
}

module.exports = WellKey
