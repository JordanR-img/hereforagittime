import Style from "../Styling/Footer.module.css";

export default function footer() {
  return (
    <div className={Style.FooterContainer}>
      <div className={Style.FooterItems}>
        <div>Step 1: Identify food you are craving.</div>
        <div>Step 2: Put the Food item into the search bar</div>
        <div>Step 3: Pick a restaurant that has your desired craving</div>
      </div>
    </div>
  );
}
