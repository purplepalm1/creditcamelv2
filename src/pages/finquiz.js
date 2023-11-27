
import React, { useState } from 'react';
import logo from '../logo.png';
import '../App.css';
import '../index.css';
import '../Finquiz.css'


export const Finquiz = () => {
    const [answers, setAnswers] = useState(Array(8).fill(null));

    const handleAnswerChange = (questionIndex, selectedOption) => {
        const newAnswers = [...answers];
        newAnswers[questionIndex] = selectedOption;
        setAnswers(newAnswers);
    };

    const handleSubmit = () => {
        // Logic for checking answers and displaying result
        // You can compare the user's answers with the correct answers here
    };

    return (
        <div className="App">
            <header className="App-header">
                <div className='centered-heading'>
                    <h2>Almost there! <br />
                        Answer a couple questions to test your financial literacy.</h2>
                </div>
                <div className="quiz-container">
                    {/* Question 1 */}
                    <div className="question">
                        <p>1. What does APR stand for in the context of loans and credit cards?</p>
                        <label>
                            <input
                                type="radio"
                                value="a"
                                checked={answers[0] === 'a'}
                                onChange={() => handleAnswerChange(0, 'a')}
                            />
                            a) Annual Percentage Rate
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="b"
                                checked={answers[0] === 'b'}
                                onChange={() => handleAnswerChange(0, 'b')}
                            />
                            b) Average Payment Requirement
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="c"
                                checked={answers[0] === 'c'}
                                onChange={() => handleAnswerChange(0, 'c')}
                            />
                            c) Account Personal Record
                        </label>
                        {/* Add more options for question 1 if needed */}
                    </div>

                    {/* Question 2 */}
                    <div className="question">
                        <p>2. Which of the following is an example of a fixed expense?</p>
                        <label>
                            <input
                                type="radio"
                                value="a"
                                checked={answers[1] === 'a'}
                                onChange={() => handleAnswerChange(1, 'a')}
                            />
                            a) Gas
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="b"
                                checked={answers[1] === 'b'}
                                onChange={() => handleAnswerChange(1, 'b')}
                            />
                            b) Dining out at restaurants
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="c"
                                checked={answers[1] === 'c'}
                                onChange={() => handleAnswerChange(1, 'c')}
                            />
                            c) Rent/Mortgage payment
                        </label>

                    </div>

                    {/* Question 3 */}
                    <div className="question">
                        <p>3. What is the purpose of a budget?</p>
                        <label>
                            <input
                                type="radio"
                                value="a"
                                checked={answers[2] === 'a'}
                                onChange={() => handleAnswerChange(2, 'a')}
                            />
                            a) To increase your credit score
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="b"
                                checked={answers[2] === 'b'}
                                onChange={() => handleAnswerChange(2, 'b')}
                            />
                            b) To invest in the stock market
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="c"
                                checked={answers[2] === 'c'}
                                onChange={() => handleAnswerChange(2, 'c')}
                            />
                            c) To track your income and expenses to plan your spending
                        </label>
                    </div>

                    {/* Question 4 */}
                    <div className="question">
                        <p>4. What does 401(k) refer to?</p>
                        <label>
                            <input
                                type="radio"
                                value="a"
                                checked={answers[3] === 'a'}
                                onChange={() => handleAnswerChange(3, 'a')}
                            />
                            a) A type of credit card
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="b"
                                checked={answers[3] === 'b'}
                                onChange={() => handleAnswerChange(3, 'b')}
                            />
                            b) A retirement savings plac sponsored by an employer
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="c"
                                checked={answers[3] === 'c'}
                                onChange={() => handleAnswerChange(3, 'c')}
                            />
                            c) A sum of money
                        </label>
                    </div>


                </div>
                <button onClick={handleSubmit}>Submit</button>
            </header>
        </div>
    );
};
