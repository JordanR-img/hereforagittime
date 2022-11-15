import Style from "../Styling/NavBar.module.css";
import logo from '../public/FoodFinder.png'
import useState from 'react';


export default function NavBar() {
  // const [nav, hideNav] = useState(true);

  // function HamBurger(){
  //   if (Style.Menu && Style.Login === 'none'){
      
  //   }
  // }





  return (
    <div className={Style.NavBarContainer}>
      <div className={Style.NavBarItems}>
        <div className={Style.NavBarItemsLeft}>
            <ul className={Style.NavBarListLeft}>
                <li><img src={logo} alt="FoodFinder Logo" className={Style.FoodFinder}/> <span className={Style.FoodFinderList}>Food Finder</span></li>
                {/* <li className={Style.FoodFinderList}>Food Finder</li> */}
            </ul>
        </div>
        <div className={Style.NavBarItemsRight}>
        <ul className={Style.NavBarList}>
          <li className={Style.Menu}>Subscribe</li>
          <li className={Style.Menu}>Bug Report</li>
          <li className={Style.Menu}>Contact</li>
          <li className={Style.Login}>Login</li>
          <span className={Style.Hamburger}>Button</span>
        </ul>
        </div>
      </div>
    </div>
  );
}
