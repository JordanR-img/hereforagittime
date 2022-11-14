import Style from "../Styling/Footer.module.css";
export default function footer() {
  return (
    <div className={Style.FooterContainer}>
      <div className={Style.FooterItems}>
        <div className={Style.CravingContainer}><span className={Style.CravingText}>Step 1: Identify food you are craving.</span></div>
        <div className={Style.CravingContainer}><span className={Style.CravingText}>Step 2: Put the food item in the search</span></div>
        <div className={Style.CravingContainer}><span className={Style.CravingText}>Step 3: Pick restaurant that has your desired craving</span></div>
        {/* <div>Step 2: Put the Food item into the search bar</div>
        <div>Step 3: Pick a restaurant that has your desired craving</div> */}
      </div>
    </div>
  );
}
