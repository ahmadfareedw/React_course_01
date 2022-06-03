import { Fragment } from "react";
import mealsImae from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header>
        <h1>React Meals</h1>
        <button>Cart</button>
      </header>
      <div>
        <img />
      </div>
    </Fragment>
  );
};

export default Header;
