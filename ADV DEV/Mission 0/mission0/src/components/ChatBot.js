import Style from '../Styling/ChatBot.module.css';





export default function chatBot() {

return (
//     <div className={Style.ChatBotContainer}><iframe className={Style.ChatBot}
//     allow="microphone;"
//     width="350"
//     height="430"
//     src="https://console.dialogflow.com/api-client/demo/embedded/6628382f-3f62-435a-a816-175416050f49">
      
// </iframe></div>

<div>
<df-messenger
  intent="WELCOME"
  chat-title="Appointment-Scheduler"
  agent-id="6628382f-3f62-435a-a816-175416050f49"
  language-code="en"
  
></df-messenger>
</div>

)
}