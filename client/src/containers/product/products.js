import React, { Component } from 'react'
import { styled } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card/Card';
import CardActions from '@material-ui/core/CardActions/CardActions';
import CardContent from '@material-ui/core/CardContent/CardContent';
import CardMedia from '@material-ui/core/CardMedia/CardMedia';
import Button from '@material-ui/core/Button/Button';
import Typography from '@material-ui/core/Typography/Typography';
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'

class products extends Component {

    componentDidMount() {
        this.props.onFetchProducts()
        this.props.onGetFavoriteProducts()
    }
    addFavorite = (id) => {
        this.props.onAddFavorite(id, true)
        window.location.reload()
    }
    removeFavorite = (id) => {
        this.props.onRemoveFavorite(id)
        window.location.reload()
    }
    addToCart = (id) => {
        this.props.onAddToCart(id)
    }
    render() {
        let productIdsArray = []
        this.props.productId.map(fav => {
            productIdsArray.push(parseInt(fav.id))
        })
        console.log(this.props.productId)
        return (
            <div >
                {this.props.productList.map(product => (
                    <Card key={product.id} style={{ marginTop: '10px' }}>
                        <img src={product.image} style={{ maxHeight: '250px', objectFit: 'cover', borderRadius: '20px 20px 0 0' }}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {product.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {product.description}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                                {product.price}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button onClick={() => this.addToCart(product.id)} size="small">Add to Cart</Button>
                            {productIdsArray.includes(product.id) ? <Button onClick={() => this.removeFavorite(product.id)} size="small">unfavorite</Button> : <Button onClick={() => this.addFavorite(product.id)} size="small">add to favorite</Button>}
                        </CardActions>
                    </Card>
                ))
                }
            </div>
        );

    }

}
const mapStateToProps = (state) => ({
    productList: state.product.productList,
    favorite: state.product.favorite,
    productId: state.product.selectedProductId
})

const mapDispatchToProps = (dispatch) => ({
    onFetchProducts: () => dispatch(actions.fetchAllProducts()),
    onAddFavorite: (id, favoriteStatus) => dispatch(actions.addFavorite(id, favoriteStatus)),
    onGetFavoriteProducts: () => dispatch(actions.getFavoriteProduct()),
    onRemoveFavorite: (id) => dispatch(actions.removeFavorite(id)),
    onAddToCart: (id) => dispatch(actions.addToCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(products)