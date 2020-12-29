const Cal = require('../lib/index')

console.log(
    Cal.help(),
    Cal.add(1, 1),
    Cal.subtract(5, 1),
    Cal.multiply(6, 1),
    Cal.divide(4, 2),
    Cal.sqrt(81),
    Cal.random(1, 5)
)