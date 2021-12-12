const Product = require('../models/product.model');

exports.product_create = function (req, res) {
    let product = new Product(
        {
            _id: req.body._id,
            _libelle: req.body._libelle,
            _description: req.body._description,
            _image:req.body._image,
            _prix: req.body._prix,
            _nbStock: req.body._nbStock,
            _stock: req.body._stock,
            _date: req.body._date
        }
    );
    product.save(function (err) {
        if (err) {
            return (err);
        }
        res.send('Product Created successfully');
        
    })
};

exports.getProducts = function (req, res) {
    Product.find({},function (err, product) {
        if (err) return (err);
        res.send(product);
    })
};

exports.product_details = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return (err);
        res.send(product);
    })
};

exports.product_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Product udpated.');
    });
};

exports.product_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
