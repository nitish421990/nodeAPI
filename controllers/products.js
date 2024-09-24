const Product = require('../models/product');
const getAllProducts = async (req, res) => {
    try {
        const { company, name, featured,sort,select } = req.query;
        const queryObject = {};
        if (company) {
            queryObject.company = company;
        }
        if (name) {
            queryObject.name = { $regex: name, $options: 'i' };
        }
        if (featured) {
            queryObject.featured = featured;
        }
        let apiData=  Product.find(queryObject);
        if(sort){
            let sortFix=sort.split(",").join(" ");
            apiData=apiData.sort(sortFix);
        }
        if(select){
            let selectFix=select.split(",").join(" ");
            apiData=apiData.select(selectFix);
        }
        // pagination
        let page=Number(req.query.page) || 1;
        let limit=Number(req.query.limit) || 3;
        let skip= (page-1)*limit;
       // apiData=apiData.skip(skip).limit(limit);
        const products = await apiData.skip(skip).limit(limit)  ;
        res.status(200).json({ products, nbHits: products.length, page, limit });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getAllProductsTesting = async (req, res) => {
    res.status(200).json({ msg: "getAllProductsTesting" });
}

module.exports = { getAllProducts, getAllProductsTesting };