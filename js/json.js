const user = { id: 12, name: 'Sakil Khan', job: 'Actor' }
    // console.log(user)

// JSON = Javascript Object Notation
const stringified = JSON.stringify(user)
    // console.log(stringified)

const shop = {
    name: 'Jamal Store',
    address: 'Chattogram',
    profit: 20000,
    product: ['laptop', 'mobile', 'pepsi'],
    owner: {
        name: 'Mahabub Ali',
        profession: 'businessman'
    },
    isExpensive: false
};
const shopStringified = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringified);
const converted = JSON.parse(shopStringified);
console.log(converted)
console.log(converted.owner)