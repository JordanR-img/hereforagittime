import Style from "../Styling/NavBar.module.css";
import logo from "../public/TurnersLogo.png";
import { useState } from "react";

  import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
 
  import {faBars} from '@fortawesome/free-solid-svg-icons'

export default function NavBar() {
  // const [nav, hideNav] = useState(true);

  // function HamBurger(){
  //   if (Style.Menu && Style.Login === 'none'){

  //   }
  // }

  const [show, setShow] = useState(true);

// const nav = document.getElementById('nav')
//   if (window.innerWidth <= 1000) {
//     return setShow = 'false' }

//   useEffect(()=> {
//      > 947 ? setOpenMenu(true) : setOpenMenu(false)
//  },[]
//   )

function showNavBarList(){
 const el = document.getElementById( 'navLinks' );
  if( window.getComputedStyle( el ).display === "none" ) {
      el.style.display = "flex";
  } else {
      el.style.display = "none"; // unset flex, so it returns to `none` as defined in the CSS.
  }
}

  return (
    <div className={Style.NavBarContainer}>
      <div className={Style.NavBarItems}>
        <div className={Style.NavBarItemsLeft}>
          <ul className={Style.NavBarListLeft}>
            <li className={Style.LogoList}>
              <img
                src={logo}
                alt="FoodFinder Logo"
                // className={Style.FoodFinder}
              />
            </li>
            {/* <li className={Style.FoodFinderList}>Food Finder</li> */}
          </ul>
        </div>
        <div className={Style.NavBarItemsRight}>
        { (
            <ul className={Style.NavBarList} id="navLinks">
              <li className={Style.Menu}>Buy a car</li>
              <li className={Style.Menu}><span>Sell your car</span></li>
              <li className={Style.Menu}>How to buy</li>
              <li className={Style.Login}>Search</li>
            </ul>
          )}
<FontAwesomeIcon icon={faBars} onClick={showNavBarList} className={Style.hamburger}/>   


        
        </div>
      </div>
    </div>
  );
}
