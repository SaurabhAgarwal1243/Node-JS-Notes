this.a='variable';

console.log(this == module.exports)

setTimeout(function () {
    this.a='changed'
},1000)

module.exports = {
    a: this.a
}
