import './App.css';
import Accordion from "./Accordian/AccordionApp";
import ContactFormApp from './ContactForm/ContactFormApp';
import GenerateTableApp from './GenerateTable/GenerateTableApp';
import FormApp from "./FormApp/FormApp";

const Delimiter =()=>{
  return  <div style={{backgroundColor:"pink",height:'10px',margin:'10px 0 10px 0'}}></div>
}

function App() {
  return (
    <div className="App">
      <Accordion/>
      <Delimiter/>
      <ContactFormApp/>
      <Delimiter/>
      <GenerateTableApp/>
      <Delimiter/>
      <FormApp/>
      <Delimiter/>

    </div>
  );
}

export default App;
