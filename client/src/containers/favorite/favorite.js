import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'
import { styled } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card/Card';
import CardActions from '@material-ui/core/CardActions/CardActions';
import CardContent from '@material-ui/core/CardContent/CardContent';
import Button from '@material-ui/core/Button/Button';
import Typography from '@material-ui/core/Typography/Typography';


const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '50%',
    maxHeight: '50%',
});
class favorite extends Component {
    removeFavorite = (event, id) => {
        event.preventDefault()
        this.props.onRemoveFavorite(id)
        window.location.reload()
    }
    componentDidMount() {
        this.props.onGetFavoriteProducts()
        this.props.onFetchProducts()
    }
    render() {
        let favProductIds = []
        this.props.favProduct.map(fav => {
            favProductIds.push(parseInt(fav.id))
        })      

        let favProducts = this.props.products.filter(product => {
            if (favProductIds.includes(product.id)) {
                return product
            }
        })
        return (
            <>
                {favProducts.map(products => (
                    <Card key={products.id} style={{ marginTop: '10px' }}>
                        <img src={products.image} style={{ maxHeight: '250px', objectFit: 'cover', borderRadius: '20px 20px 0 0' }}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {products.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {products.description}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                                {products.price}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button onClick={(event) => this.removeFavorite(event, products.id)} size="small">unfavorite</Button>
                        </CardActions>
                    </Card>
                ))}
            </>

        )
    }
}
const mapStateToProps = (state) => ({
    products: state.product.productList,
    favProduct: state.product.favProducts,
    selectedProductId: state.product.selectedProductId
})
const mapDispatchToProps = (dispatch) => ({
    onGetFavoriteProducts: () => dispatch(actions.getFavoriteProduct()),
    onFetchProducts: () => dispatch(actions.fetchAllProducts()),
    onRemoveFavorite: (id) => dispatch(actions.removeFavorite(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(favorite)