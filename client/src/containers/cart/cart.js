import React, { Component } from 'react'
import CartItem from "../cartItem/cartItem";
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'

class cart extends Component {
    removeFromCart = (id) => {
        this.props.onRemoveChart(id)
    }
    render() {
        const calculateTotal = (items) => {
            let total = items.map(item => item.price).reduce((prev, curr) => prev + curr, 0);
            return total
        }       
        return (
            <>
                <h2>Your Cart</h2>
                {this.props.cart.length === 0 ? <p>No items in cart.</p> : null}
                {this.props.cart.map(item => (
                    <CartItem
                        key={item.id}
                        item={item}
                        removeFromCart={() => this.removeFromCart(item.id)}
                    />
                ))}
                <h2>Total:{calculateTotal(this.props.cart)}</h2>
            </>
        );
    }
}
const mapStateToProps = state => ({
    cart: state.product.cart,
    exist: state.product.exist
})
const mapDispatchToProps = (dispatch) => ({
    onRemoveChart: (id) => dispatch(actions.removeFromCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(cart)
