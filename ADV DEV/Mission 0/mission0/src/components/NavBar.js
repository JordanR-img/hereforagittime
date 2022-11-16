import Style from "../Styling/NavBar.module.css";
import logo from "../public/FoodFinder.png";
import { useState } from "react";
  import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
 
  import {faBars, faDisplay} from '@fortawesome/free-solid-svg-icons'

export default function NavBar() {
  // const [nav, hideNav] = useState(true);

  // function HamBurger(){
  //   if (Style.Menu && Style.Login === 'none'){

  //   }
  // }
document.getElementById('NavBarList')
  const [show, setShow] = useState(true);
  // if (show === false) {
  //   return 'NavBarList' =
  // }

//   useEffect(()=> {
//      > 947 ? setOpenMenu(true) : setOpenMenu(false)
//  },[]
//   )

  return (
    <div className={Style.NavBarContainer}>
      <div className={Style.NavBarItems}>
        <div className={Style.NavBarItemsLeft}>
          <ul className={Style.NavBarListLeft}>
            <li className={Style.LogoList}>
              <img
                src={logo}
                alt="FoodFinder Logo"
                className={Style.FoodFinder}
              />
              <span className={Style.FoodFinderList}>Food Finder</span>
            </li>
            {/* <li className={Style.FoodFinderList}>Food Finder</li> */}
          </ul>
        </div>
        <div className={Style.NavBarItemsRight}>
        {show && (
            <ul className={Style.NavBarList} id="NavBarList">
              <li className={Style.Menu}>Subscribe</li>
              <li className={Style.Menu}><span>Bug Report</span></li>
              <li className={Style.Menu}>Contact</li>
              <li className={Style.Login}>Login</li>
            </ul>
          )}
<FontAwesomeIcon icon={faBars} onClick={() => setShow(!show)} className={Style.hamburger}/>   


        
        </div>
      </div>
    </div>
  );
}
