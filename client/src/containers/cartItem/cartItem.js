import { Button } from "@material-ui/core";

const CartItem = ({ item, addToCart, removeFromCart, calculateTotal }) => {
  return (
    <>
      <div>
        <h3>{item.title}</h3>
        <div>
          <p>Price: ${item.price}</p>          
        </div>
        <div>
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => removeFromCart(item.id)}
          >
            Remove From Cart
          </Button>
        </div>      
      </div>
      <img src={item.image} style={{ maxHeight: '250px', objectFit: 'cover', borderRadius: '20px 20px 0 0' }}
      />
    </>
  );
};

export default CartItem;
