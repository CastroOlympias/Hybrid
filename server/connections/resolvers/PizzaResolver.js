const { Pizza } = require('../../collections');

const pizzaResolvers = {
    findAllPizzas: async (parent, args, context) => {
        const allUserData = await Pizza.find()
        return allUserData
    },
}

module.exports = pizzaResolvers;