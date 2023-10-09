import '@astrojs/react'
import { useState } from 'react'
import './faq.css'

export default function FAQ() {

  const [open, setOpen] = useState(null);

  const toggle = () => {
    return console.log('clicked')
    // if (open === i){
    //   setOpen(null)
    //   return console.log("here 1")
    // }
    // setOpen(i)
    // return console.log("here 2")
    
  }

    return ( 
      <main>
        <div>
        <div className='faq-banner'>
            <h2 className='faq-banner-text'>Frequently Asked Questions!</h2>
        </div>
          <div className='faq-main'>
            {data.map((item, i) => (
              <div>
                <div className='faq-questions'>
                  <ul className='faq-list'>
                    <li onClickCapture={() => toggle }>{item.question} <span>+</span></li>
                  </ul>
                </div>
                <div className={open === i ? 'answer-visible' : 'answer'}>{item.answer}</div>
              </div>
            ))}
          </div>
          </div>
      </main>
    ); 
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
]


