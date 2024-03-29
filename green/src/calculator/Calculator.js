//import {Link} from 'react-router-dom';
import React, { useState } from 'react';
import '../Styles/Calculator.css'

// export default function Calculator() {
//   return (
//     <>
//       <h1 className='marketing'>CALCULATOR</h1>
//     </>
//   );
// }

// Define an array of questions


const questions = [
  {
    id: 1,
    type: 'SelectOne',
    questionText: 'Where is your project located?',
    options: [
      { text: 'Option 1', points: 5 },
      { text: 'Option 2', points: 10 },
      { text: 'Option 3', points: 8 },
    ],
  },
  {
    id: 2,
    type: 'SelectOne',
    questionText: 'Will your project provide parking?',
    options: [
      { text: 'Yes', points: 0 },
      { text: 'No', points: 1 },
      { text: 'Parking already exists nearby', points: 0.5 },
    ],
  },
  {
    id: 3,
    type: 'SelectOne',
    questionText: 'Will 5% or two spaces of your parking location provide charging locations for electric vehicles?',
    options: [
      { text: 'Yes', points: 1 },
      { text: 'No', points: 0 },
    ],
  },
  {
    id: 4,
    type: 'SelectOne',
    questionText: 'Does your project require a long term (>2 years) irrigation system?',
    options: [
      { text: 'Yes', points: 0 },
      { text: 'No', points: 2 },
      { text: 'Not sure', points: 0 },
    ],
  },
  {
    id: 5,
    type: 'SelectOne',
    questionText: "By how much will you reduce the project's landscape water requirement?",
    options: [
      { text: '0%-25%', points: 0 },
      { text: '50% - 75%', points: 1 },
      { text: '100%', points: 2 },
    ],
  },
  {
    id: 6,
    type: 'SelectOne',
    questionText: 'Indoor water use reduction',
    options: [
      { text: 'Option 1', points: 5 },
      { text: 'Option 2', points: 10 },
      { text: 'Option 3', points: 8 },
    ],
  },
  {
    id: 7,
    type: 'SelectOne',
    questionText: 'Does the maximum number of cycles achieved for all parameters (CaCO3, Total Alkalinity, SiO2, Cl-Conductivity) under any maximum concentration levels or not affecting operation of condenser water system?',
    options: [
      { text: 'Yes', points: 1 },
      { text: 'Yes and increase the number of cycles by a minimum of 25%', points: 2 },
      { text: 'Yes and use a minimum 20% recycled nonpotable water', points: 2 },
      { text: 'No', points: 0},
    ],
  },
  {
    id: 8,
    type: 'SelectOne',
    questionText: 'What percentage of annual water use is reduced compared to Water-Cooled Chiller System? (must include a cooling tower)',
    options: [
      { text: '0%-25%', points: 0 },
      { text: '25%-50%', points: 1 },
      { text: 'minimum 50%', points: 2 },
    ],
  },
  {
    id: 9,
    type: 'SelectOne',
    questionText: 'What percentage of recycled alternative water is needed to meet process water demand?',
    options: [
      { text: '0%-20%', points: 0 },
      { text: '20%-30%', points: 1 },
      { text: 'minimum 30%', points: 2 },
    ],
  },
  {
    id: 10,
    type: 'SelectOne',
    questionText: 'Which of the following systems does your project implement to identify additional future water-saving opportunities? At least 2 are required.',
    options: [
      { text: 'Water meters serving at least 80% of the irrigated landscaped area', points: 1 },
      { text: 'Water meters serving at least 80% of the indoor fixtures', points: 1 },
      { text: 'Water meter use of at least 80% of the installed domestic hot water heating capacity', points: 1 },
      { text: 'Boiler with aggregate projected annual water use of 100,000 gallons (378,500 liters) or more, or boiler of more than 500,000 BtuH (150 kW)', points: 1},
      { text: 'Reclaimed water', points: 1},
    ],
  },
  {
    id: 11,
    type: 'SelectOne',
    questionText: 'Is there a contract in place that states the following methods will be used on site? Both the contractor and the owner must agree to the way comissioning will be achieved.',
    options: [
      { text: 'Option 1', points: 5 },
      { text: 'Option 2', points: 10 },
      { text: 'Option 3', points: 8 },
    ],
  },
  {
    id: 12,
    type: 'Based on the following chart, and the guidelines laid out in ashrae 90.1, does the project save more than 10 percent compared to other projects for new buildings, or 8 percent for existing builds?',
    questionText: '',
    options: [
      { text: 'Option 1', points: 5 },
      { text: 'Option 2', points: 10 },
      { text: 'Option 3', points: 8 },
    ],
  },
  {
    id: 13,
    type: 'SelectOne',
    questionText: 'Is there a plan in place to measure the energy used for at least a year of post occupation, implemented by one of the three ways shown below?',
    options: [
      { text: 'Option 1', points: 5 },
      { text: 'Option 2', points: 10 },
      { text: 'Option 3', points: 8 },
    ],
  },
  {
    id: 14,
    type: 'SelectOne',
    questionText: "Does the project tie into the city's demand response program, or is it prepared to do so if the city does not have one?",
    options: [
      { text: 'Option 1', points: 5 },
      { text: 'Option 2', points: 10 },
      { text: 'Option 3', points: 8 },
    ],
  },
  {
    id: 15,
    type: 'SelectOne',
    questionText: 'How much renewable energy does the site produce (1-13 percent)',
    options: [
      { text: 'Option 1', points: 5 },
      { text: 'Option 2', points: 10 },
      { text: 'Option 3', points: 8 },
    ],
  },
  {
    id: 16,
    type: 'SelectOne',
    questionText: 'Does the project not use refriegerants, or if it does, does it meet the maximum limts as seen in the attached link',
    options: [
      { text: 'Option 1', points: 5 },
      { text: 'Option 2', points: 10 },
      { text: 'Option 3', points: 8 },
    ],
  },
  {
    id: 17,
    type: 'SelectOne',
    questionText: "Is there a contract in place for at least two years that 35 percent of the buildings energy will be renewable as defined by green power?",
    options: [
      { text: 'Option 1', points: 5 },
      { text: 'Option 2', points: 10 },
      { text: 'Option 3', points: 8 },
    ],
  },
  {
    id: 18,
    type: 'SelectOne',
    questionText: 'How much of the existing structure and envelope will the design keep?',
    options: [
      { text: '55%', points: 1 },
      { text: '75%', points: 2 },
      { text: '95%', points: 3 },
    ],
  },
  {
    id: 19,
    type: 'SelectOne',
    questionText: 'Does the design keep at least 50% of the non structural elements?',
    options: [
      { text: 'Yes', points: 1 },
      { text: 'No', points: 0 },
    ],
  },
  {
    id: 20,
    type: 'SelectOne',
    questionText: 'How much construction waste is planned to be recycled (not reused)?',
    options: [
      { text: '50%', points: 1 },
      { text: '75%', points: 2 },
    ],
  },
  {
    id: 21,
    type: 'SelectOne',
    questionText: 'How much of the project will be using salvaged refurbished or reused materials (from this site or others)?',
    options: [
      { text: 'Option 1', points: 5 },
      { text: 'Option 2', points: 10 },
      { text: 'Option 3', points: 8 },
    ],
  },
  {
    id: 22,
    type: 'SelectOne',
    questionText: 'By weight, how many materials are manufactured within 500 miles of the project site?',
    options: [
      { text: '10%', points: 1 },
      { text: '20%', points: 2 },
    ],
  },
  {
    id: 23,
    type: 'SelectOne',
    questionText: 'How much of the building material is renewable material (e.g. wood)?',
    options: [
      { text: 'Below 2.5%', points: 0 },
      { text: 'Above 2.5%', points: 1 },
    ],
  },
  {
    id: 24,
    type: 'SelectOne',
    questionText: 'What percantage of the wood used in the project (including temporary construction) are FSC certified?',
    options: [
      { text: 'Below 50%', points: 0 },
      { text: 'At least 50%', points: 1 },
    ],
  },
  {
    id: 25,
    type: 'SelectOne',
    questionText: 'Will the building have monitors for CO2 for all indoor air intakes?',
    options: [
      { text: 'Yes', points: 1 },
      { text: 'No', points: 0 },
    ],
  },
  {
    id: 26,
    type: 'SelectOne',
    questionText: 'Will the provided mechanical systems exceeded Ashrae 62.1, or the other regional equivalent for ventilation by at least 30%?',
    options: [
      { text: 'Yes', points: 1 },
      { text: 'No', points: 0 },
    ],
  },
  {
    id: 27,
    type: 'SelectOne',
    questionText: 'Is there a clear plan to monitor how construction impacts air quality as defined by the relevant standards listed below:',
    options: [
      { text: 'Indoor', points: 1 },
      { text: 'Outdoor', points: 1 },
      { text: 'Both', points: 2 },
    ],
  },
  {
    id: 28,
    type: 'SelectOne',
    questionText: 'Do each of the materials used meet or exceed the standards set by the following list:',
    options: [
      { text: 'Adhesives and sealants', points: 1 },
      { text: 'Paints and coatings', points: 1 },
      { text: 'Flooring systems', points: 1 },
      { text: 'Composite wood agrifiber product', points: 1},
      { text: 'All of the above', points: 4 },
    ],
  },
  {
    id: 29,
    type: 'SelectOne',
    questionText: 'Does the project allow for separated entry ways that are designed and ventilated per the following specifications?',
    options: [
      { text: 'Yes', points: 1 },
      { text: 'No', points: 0 },
    ],
  },
  {
    id: 30,
    type: 'SelectOne',
    questionText: 'Does the project meet the standards of ASHRAE standard 55-2004, and is the performance intended to be mnonitored following construction?',
    options: [
      { text: 'Yes', points: 1 },
      { text: 'Yes and monitored', points: 2 },
    ],
  },
  {
    id: 31,
    type: 'SelectOne',
    questionText: 'Are 75% of the spaces daylight as laid out in the following tables?',
    options: [
      { text: 'Yes', points: 5 },
      { text: 'Views', points: 10 },
      { text: 'Both', points: 8 },
    ],
  },

  // Add more questions similarly...
];

const SelectOneQuestion = ({ question, options, selectedOption, onChange }) => {
  return (
    <div>
      <h3>{question}</h3>
      {options.map((option) => (
        <div key={option}>
          <input
            type="radio"
            value={option}
            checked={selectedOption === option}
            onChange={onChange}
          />
          <label>{option}</label>
        </div>
      ))}
    </div>
  );
};


const Quiz = () => {
  const [showSubmit, setShowSubmit] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleNext = () => {
    if (currentQuestion === questions.length - 2) {
      setShowSubmit(true);
    }
    setCurrentQuestion(currentQuestion + 1);
  };
  
  const handlePrevious = () => {
    setShowSubmit(false);
    setCurrentQuestion(currentQuestion - 1);
  };

  const handleOptionChange = (questionId, selectedOption) => {
    const newAnswers = [...answers];
    newAnswers[questionId] = selectedOption;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    
    alert(JSON.stringify(answers));
    
    // You can perform other actions like sending data to a server here
  };

  const renderQuestion = (question) => {
    switch (question.type) {
      case 'SelectOne':
        return (
          <div key={question.id} className='questionsSection'>
            <h3>{question.questionText}</h3>
            {question.options.map((option, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={`option${index}`}
                  name={`question${question.id}`}
                  value={option.text}
                  checked={answers[question.id] === option.text}
                  onChange={() => handleOptionChange(question.id, option.text)}
                />
                <label htmlFor={`option${index}`}>{option.text}</label>
              </div>
            ))}
          </div>
        );
      // Add handling for other question types here if needed

      default:
        return null;
    }
  };

  return (
    <div className='quizPage'>
      <div className='quiz-header'>
      <div className='quiz-title'>
      <h1>Quiz</h1>
      </div>
      <div className='questionsContainer'>
        {currentQuestion < questions.length ? (
          renderQuestion(questions[currentQuestion])
        ) : (
          <div>
            <p>Quiz completed!</p>
            <p>Answers: {JSON.stringify(answers)}</p>
          </div>
        )}
      </div>
      {/* Static position for Next and Previous buttons */}
      <div className='prevButton'>
        {currentQuestion > 0 && (
          <button onClick={handlePrevious}>Previous Question</button>
        )}
      </div>
      <div className='nextButton'>
        {currentQuestion < questions.length - 1 && (
          <button onClick={handleNext}>Next Question</button>
        )}
        {showSubmit && (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
       </div>
      </div>
  );
};

export default Quiz;