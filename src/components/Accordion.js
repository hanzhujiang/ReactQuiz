import React,{useState} from 'react';
import './Accordion.css';

export default function Accordion({ sections }) {
  const [selectedSection, setSelectedSection] = useState(new Set());

  return (
    <div>
      {sections.map(({ value, title, contents }) => {
        const isExpanded = selectedSection.has(value);
        return (
          <div key={title} className='accordion-item'>
            <button 
            type='button'
            className='accordion-item-title'
            onClick={()=>{
                let newSelectedSection=new Set(selectedSection);
                selectedSection.has(value)?newSelectedSection.delete(value):newSelectedSection.add(value)
                setSelectedSection(newSelectedSection)

            }}>
              {title} <span aria-hidden={true} className={['accordion-icon',isExpanded&&'accordion-icon-rotate'].filter(Boolean).join(' ')} />
            </button>
            <div hidden={isExpanded}>{contents}</div>
          </div>
        );
      })}
    </div>
  );
}
