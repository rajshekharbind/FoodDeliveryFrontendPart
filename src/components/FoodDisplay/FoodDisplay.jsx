import { useContext } from 'react';  // No need to import React
import PropTypes from 'prop-types';
import './FoodDisplay.css';
import { StoreContext } from '../../Context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);

    return (
        <div className="food-display" id="food-display">
            <h2>Top dishes near you</h2>
            <div className="food-display-list">
                {food_list
                    .filter(item => category === "All" || category === item.category)
                    .map(item => ( 
                        <FoodItem 
                            key={item._id} 
                            id={item._id} 
                            name={item.name} 
                            description={item.description} 
                            price={item.price} 
                            image={item.image} 
                        />
                    ))
                }
            </div>
        </div>
    );
};

// ✅ Add PropTypes validation
FoodDisplay.propTypes = {
    category: PropTypes.string.isRequired, 
};

export default FoodDisplay;



