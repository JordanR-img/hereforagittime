import Style from "../Styling/Footer.module.css";
// import logo from "../public/TurnersLogo.png";

export default function footer() {
  return (

    <div className={Style.FooterContainer}>
      <div className={Style.FooterItems}>
        <div className={Style.CravingContainer}><span className={Style.CravingText}>Instagram</span></div>
        <div className={Style.CravingContainer2}><span className={Style.CravingText}>FaceBook</span></div>
        <div className={Style.CravingContainer3}><span className={Style.CravingText}>Email Alerts</span></div>
      </div>
    </div>
  );
}
