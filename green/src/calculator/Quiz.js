import {Link} from 'react-router-dom';
import React, { Component } from "react";
import { useState } from 'react';

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
    questionText: 'Where is your project located?',
    options: [
      { text: 'Option 1', points: 5 },
      { text: 'Option 2', points: 10 },
      { text: 'Option 3', points: 8 },
    ],
  },
  {
    id: 12,
    type: 'SelectOne',
    questionText: 'Where is your project located?',
    options: [
      { text: 'Option 1', points: 5 },
      { text: 'Option 2', points: 10 },
      { text: 'Option 3', points: 8 },
    ],
  },
  {
    id: 13,
    type: 'SelectOne',
    questionText: 'Where is your project located?',
    options: [
      { text: 'Option 1', points: 5 },
      { text: 'Option 2', points: 10 },
      { text: 'Option 3', points: 8 },
    ],
  },
  {
    id: 14,
    type: 'SelectOne',
    questionText: 'Where is your project located?',
    options: [
      { text: 'Option 1', points: 5 },
      { text: 'Option 2', points: 10 },
      { text: 'Option 3', points: 8 },
    ],
  },
  {
    id: 15,
    type: 'SelectOne',
    questionText: 'Where is your project located?',
    options: [
      { text: 'Option 1', points: 5 },
      { text: 'Option 2', points: 10 },
      { text: 'Option 3', points: 8 },
    ],
  },
  {
    id: 16,
    type: 'SelectOne',
    questionText: 'Where is your project located?',
    options: [
      { text: 'Option 1', points: 5 },
      { text: 'Option 2', points: 10 },
      { text: 'Option 3', points: 8 },
    ],
  },
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
    id: 1,
    type: 'SelectOne',
    questionText: 'Where is your project located?',
    options: [
      { text: 'Option 1', points: 5 },
      { text: 'Option 2', points: 10 },
      { text: 'Option 3', points: 8 },
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

const FreeResponseQuestion = ({ question, answer, onChange }) => {
  return (
    <div>
      <h3>{question}</h3>
      <textarea value={answer} onChange={onChange} />
    </div>
  );
};

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleOptionChange = (event) => {
    // Handle option change for SelectOne type question
    // Update answers array with the selected option for the current question
    const selectedOption = event.target.value;
    setAnswers([...answers, { questionId: questions[currentQuestion].id, answer: selectedOption }]);
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleFreeResponseChange = (event) => {
    // Handle text input change for FreeResponse type question
    // Update answers array with the entered text for the current question
    const enteredText = event.target.value;
    setAnswers([...answers, { questionId: questions[currentQuestion].id, answer: enteredText }]);
    setCurrentQuestion(currentQuestion + 1);
  };

  const renderQuestion = () => {
    const currentQ = questions[currentQuestion];
    switch (currentQ.type) {
      case 'SelectOne':
        return (
          <SelectOneQuestion
            question={currentQ.questionText}
            options={currentQ.options}
            selectedOption={''} // Add logic to handle selected option
            onChange={handleOptionChange}
          />
        );
      case 'FreeResponse':
        return (
          <FreeResponseQuestion
            question={currentQ.questionText}
            answer={''} // Add logic to handle entered text
            onChange={handleFreeResponseChange}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>Quiz</h1>
      {currentQuestion < questions.length ? renderQuestion() : <p>Quiz completed!</p>}
    </div>
  );
};

export default Quiz;

