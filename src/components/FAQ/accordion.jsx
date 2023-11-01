import { useState } from "react";
import './faq.css'

function Accordion() {

  // Added a default value to the `open` state variable.
  const [open, setOpen] = useState(false);

  // Added a `handleClose` function to close the accordion item.
  const handleClose = () => setOpen(false);

  // Added a `handleToggle` function to toggle the accordion item open and closed.
  const handleToggle = (i) => {
    if (open === i) {
      handleClose();
    } else {
      setOpen(i);
    }
  };


  return (
    <div className='faq-main'>
          {data.map((item, i) => (
            <div key={i}>
              <div
                open={open === i}
                className='faq-questions'
                onClick={() => handleToggle(i)}
              >
                <ul className='faq-list'>
                  <li className='faq-ques' >{item.question} <span>+</span></li>
                </ul>
              </div>
              {open === i && <div className='answer-visible'>{item.answer}</div>}
            </div>
          ))}
    </div>
  )
}

const data = [
  { question:'What is a Hack-a-thon? ',
    answer:'answer 1'},
    { question:'Who can attend and do I have to know coding?',
    answer:'answer 2'},
    { question:'When does the event start?',
    answer:'answer 3'},
    { question:' What’s the cost for attendance?',
    answer:'answer 3'},
    { question:'What kind of projects can I make?',
    answer:'answer 5'},
    { question:'Do I work by myself or with teams?',
    answer:'answer 6'},
    { question:'Who will I meet at the event?',
    answer:'answer 7'},
    { question:'Is there a theme for the project?',
    answer:'answer 8'},
    { question:'What other events will be held in the convention?',
    answer:'answer 9'},
    { question:'Can I volunteer to help with the event?',
    answer:'answer 10'}
];
export default Accordion