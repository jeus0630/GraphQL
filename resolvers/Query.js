exports.Query = {
    products: (parent,{filter},{products}) => {
        let filterProducts = products;

        if(filter){
            if(filter.onSale == true){
                filterProducts = filterProducts.filter(product => {
                    return product.onSale
                })
            }
        }

        return filterProducts;
    },
    product: (parent, {id}, {products}) => {
        return products.find(product => product.id == id);
    },
    categories: (parent, args, {categories}) => {
        return categories;
    },
    category: (parent, args, {categories}) => {
        const {id} = args;
        return categories.find(category => category.id == id);
    }
}