exports.Mutation = {
    addCategory: (parent, {input}, {categories}) => {
        const {name} = input;

        const newCategory = {
            name
        }

        categories.push(newCategory);

        return newCategory;
    }
}