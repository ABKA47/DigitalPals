const express = require('express')

const router = express.Router()

const { Product } = require('../model/product')

router.get('/product/favorite', (req, res) => {
    Product.find().then(product => {
        res.send(product)
    }).catch(err => {
        res.status(500).send({ message: err.message || "Error occurred while retriving product information!" })
    })
})

router.post('/product/addfavorite', (req, res) => {
    let product = new Product({
        id: req.body.id,
        favorite: req.body.favoriteStatus
    })

    product.save().then(data => {
        res.status(200).send({
            message: data.message
        })
    }).catch(err => {
        res.status(500).send({
            message: err.message
        })
    })
})
router.delete('/product/removefavorite/:id', (req, res) => {
    const id = req.params.id
    Product.findOneAndRemove(id).then(data => {
        if (!data) {
            res.status(404).send({ message: `Cannot delete with ${id}.Maybe id is wrong!` })
        } else {
            res.send({
                message: "Product was deleted successfully!"
            })
        }
    }).catch(err => {
        res.status(500).send({ message: "Could not delete Product with id =" + id })
    })
})

module.exports = router