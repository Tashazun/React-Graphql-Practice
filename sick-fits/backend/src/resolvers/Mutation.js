const Mutations = {
    async createItem(parent, args, cxt, info) {
        
        const item = await cxt.db.mutation.createItem({
            data: {
                ...args
            }
        }, info);

        return item;
    }
};

module.exports = Mutations;
