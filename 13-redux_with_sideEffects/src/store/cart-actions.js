import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const  fetchCartData = () => {
    return async dispatch => {
        const fetcData = async () => {
            const response = await fetch(
                'https://react-http-22-24927-default-rtdb.firebaseio.com/cart.json'
            );

            if(!response.ok){
                throw new Error('Could not fetch cart data!');
            }

            const data = await response.json();

            return data;
        }

        try {
            const cartData = await fetcData();
            dispatch(cartActions.replaceCart({ // did not pass cartData instead passed like object so, if items are "undefined" then we get empty array to replace undefined value
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity
            }));
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'fetching cart data failed!',
              })
            );
        }
    }
}

export const sendCartdata = (cart) => {
    return async (dispatch) => {
      dispatch(uiActions.showNotification({
          status: 'pending',
          title: 'Sending...',
          message: 'Sending cart data!',
        })
      );
  
      const sendRequest = async () => {
        const response = await fetch('https://react-http-22-24927-default-rtdb.firebaseio.com/cart.json', {
          method: 'PUT',  // put overrides previous data
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
          }
        );
  
        if(!response.ok) {
          throw new Error('Sending cart data failed');
        }
  
      };
  
      try {
        await sendRequest();
  
        dispatch(uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!',
        })
        );
      } catch (error) {
        dispatch(uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        })
        );
      }
     
       
  
    };
  };