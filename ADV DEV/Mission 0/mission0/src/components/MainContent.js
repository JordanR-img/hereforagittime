import Style from '../Styling/MainContent.module.css'


export default function MainContent() {
  return (
    <div className={Style.MainContainer}>
      <div className={Style.h1}>
        <h1>Where is your true love?</h1>
      </div>
      <div className={Style.FormContainer}>
        <form className={Style.FormItems}><textarea rows="4" cols="" type="text"/><label className={Style.Search}>Search</label></form>
      </div>
    </div>
  );
}
