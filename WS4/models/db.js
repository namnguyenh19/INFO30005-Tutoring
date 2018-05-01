var faker = require('faker');

var users = [];
const NO_OF_USERS = 10;

for (let i=0; i<NO_OF_USERS; i++) {
    users[i] = ({
        name: faker.name.findName(),
        email: faker.internet.email()
    });
}

module.exports = users;
