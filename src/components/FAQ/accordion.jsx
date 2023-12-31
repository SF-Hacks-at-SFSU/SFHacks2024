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
    <div>
      <div className='faq-banner'>
        <h2 className='faq-banner-text'>Frequently Asked Questions!</h2>
      </div>
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
            {open === i && <div className='answer-visible bg-blue-950 p-3 rounded-md'>{item.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  )
}

const data = [
  {
    question: 'What is a Hack-a-thon? ',
    answer: 'A hackathon is a 24-hour event where individuals get together for a short period of time to collaborate on a project. Participants work rapidly and often work in groups to achieve their tasks.'
  },
  {
    question: 'Who can attend and do I have to know coding?',
    answer: 'No prior knowledge of computer science is needed! We encourage all levels of coders to attend. In our events, we dedicate officers/mentors/tutors to help all hackers find their beginnings in CS.'
  },
  {
    question: 'When does the event start?',
    answer: 'The event starts on April 5th and last until April 7th.'
  },
  {
    question: 'Where is the venue located?',
    answer: 'The event is located at Annex I, 1 N State Dr, San Francisco, CA 94132'
  },
  {
    question: ' What’s the cost for attendance?',
    answer: 'It’s a free event hosted by the SF Hacks Team at San Francisco State University.'
  },
  {
    question: 'Do I work by myself or with teams?',
    answer: 'You can work either in a solo project, or you can choose to work with other students as a team.'
  },
  {
    question: 'Who will I meet at the event?',
    answer: 'You will meet other students, event organizers, or even company/sponsor representatives.'
  },
  {
    question: 'Is there a theme for the project?',
    answer: 'Yes, there is a theme planned for the event. We\'ll unveil it as we approach the event date.'
  },
  {
    question: 'What other events will be held in the convention?',
    answer: 'There will be a host of events including workshops from sponsors and ACM student leaders, panels, showcases, and fun mini-games!'
  },
  {
    question: 'Can I volunteer to help with the event?',
    answer: <p>You can volunteer!  Simply sign up using the registration button at the top of the page or go <a className="underline font-bold" href="bit.ly/sfhacks2024-register">here</a> and select the volunteer option on the first page.</p>
  },
  {
    question: 'Where can contact for any questions or support?',
    answer: <p className="">
      {" "}
      You may email us at{" "}
      <a
        href="mailto:sfhacksteam@gmail.com"
        className=" pointer-events-auto text-sfPink hover:underline"
      >
        sfshacksteam@gmail.com{" "}
      </a>
    </p>
  },
];
export default Accordion