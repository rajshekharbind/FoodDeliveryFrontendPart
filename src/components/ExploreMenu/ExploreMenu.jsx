import PropTypes from 'prop-types';  // Import PropTypes
import './ExploreMenu.css';
import { menu_list } from '../../assets/frontend_assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
      </p>
      
      <div className="explore-menu-list">
        {menu_list.map((item) => (
          <div
            key={item.menu_name}  // Use a unique key instead of index
            className="explore-menu-list-item"
            onClick={() => setCategory?.(prev => (prev === item.menu_name ? "All" : item.menu_name))} 
          >
            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt={item.menu_name} />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>

      <hr />
    </div>
  );
};

// ✅ Add PropTypes validation
ExploreMenu.propTypes = {
  category: PropTypes.string.isRequired, // Ensure category is a required string
  setCategory: PropTypes.func.isRequired, // Ensure setCategory is a required function
};

export default ExploreMenu;

