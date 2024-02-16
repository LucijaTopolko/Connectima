import React, { useState } from 'react';
import '../styles/FAQ.css'
import Header from "./Header";
import Footer from "./Footer";

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqData = [
        { question: "Question 1?", answer: "Answer to question 1." },
        { question: "Question 2?", answer: "Answer to question 2." },
        { question: "Question 3?", answer: "Answer to question 3." },
        { question: "Question 1?", answer: "Answer to question 1." },
        { question: "Question 2?", answer: "Answer to question 2." },
        { question: "Question 3?", answer: "Answer to question 3." },
        { question: "Question 1?", answer: "Answer to question 1." },
        { question: "Question 2?", answer: "Answer to question 2." },
        { question: "Question 3?", answer: "Answer to question 3." }
    ];

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='faq'>
            <Header></Header>
            <div className="faq-container">
                <h2 className="faq-title">Frequently Asked Questions</h2>
                {faqData.map((item, index) => (
                    <div key={index}>
                        <div className="faq-item" onClick={() => handleToggle(index)}>
                            <h3 className="faq-question">{item.question}</h3>
                            {activeIndex === index ? <span className="faq-icon">&#9660;</span> : <span className="faq-icon">&#9658;</span>}
                        </div>
                        {activeIndex === index && <p className="faq-answer">{item.answer}</p>}
                        {index !== faqData.length - 1 && <hr className="faq-divider" />}
                    </div>
                ))}
            </div>
            <Footer></Footer>
        </div>
    );
}

export default FAQ;