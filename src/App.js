import './App.css';
import Accordion from "./Accordian/AccordionApp";
import ContactFormApp from './ContactForm/ContactFormApp';
import GenerateTableApp from './GenerateTable/GenerateTableApp';

function App() {
  return (
    <div className="App">
      <Accordion/>
      <div>-----------------------------------</div>
      <ContactFormApp/>
      <div>-----------------------------------</div>
      <GenerateTableApp/>
      <div>-----------------------------------</div>

    </div>
  );
}

export default App;
