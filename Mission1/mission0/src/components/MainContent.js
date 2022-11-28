import Style from "../Styling/MainContent.module.css";
import logo from "../public/TurnersCarsBackgroundImage.jpeg";
import HandleSearch from '../components/searchQuery.js';



export default function MainContent() {
  return (

    


    <div className={Style.MainContainer}>
      <div className={Style.MainContainerItems}>
        <div className={Style.h1}>
          <h1>Turners: Search for the car you want!</h1>
          <img src="../public/TurnersCarsBackgroundImage.jpeg" alt=""/>
        </div>
        <div className={Style.FormContainer}>
          <form className={Style.FormItems}>
            <textarea rows="4" cols="" type="text" className={Style.textarea} />
            <label className={Style.Search}>
              <p>Search</p>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
}
