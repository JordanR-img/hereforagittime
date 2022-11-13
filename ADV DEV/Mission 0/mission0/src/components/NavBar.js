import Style from "../Styling/NavBar.module.css";

export default function NavBar() {
  return (
    <div className={Style.NavBarContainer}>
      <div className={Style.NavBarItems}>
        <div className={Style.NavBarItemsLeft}>
            <ul className={Style.NavBarListLeft}>
                <li>Image</li>
                <li>My Company</li>
            </ul>
        </div>
        <div className={Style.NavBarItemsRight}>
        <ul className={Style.NavBarList}>
          <li className={Style.Menu}>Menu1</li>
          <li className={Style.Menu}>Menu2</li>
          <li className={Style.Menu}>Menu3</li>
          <li className={Style.Login}>Login</li>
        </ul>
        </div>
      </div>
    </div>
  );
}
