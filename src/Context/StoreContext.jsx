import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';  // ✅ Import PropTypes
import axios from 'axios';

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {  // ✅ Destructure children from props
    const [cartItem, setCartItem] = useState({});
    const url = "http://localhost:4000";
    const [token, setToken] = useState("");
    const [food_list, setFoodList] = useState([]);

    const addToCart = (itemId) => {
        setCartItem(prev => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1
        }));
    };

    const removeFromCart = (itemId) => {
        setCartItem(prev => ({
            ...prev,
            [itemId]: prev[itemId] - 1
        }));
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                let itemInfo = food_list.find(product => product._id === item);
                if (itemInfo) {
                    totalAmount += itemInfo.price * cartItem[item];
                }
            }
        }
        return totalAmount;
    };

    const fetchFoodList = async () => {
        const response = await axios.get(url + "/api/food/list");
        setFoodList(response.data.data);
    };

    useEffect(() => {
        async function loadData() {
            await fetchFoodList();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"));
            }
        }
        loadData();
    }, []);

    const contextValue = {
        food_list,
        cartItem,
        setCartItem,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
};

// ✅ Add PropTypes Validation for `children`
StoreContextProvider.propTypes = {
    children: PropTypes.node.isRequired,  // `children` must be a React node
};

export default StoreContextProvider;
