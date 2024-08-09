import React, { useState } from 'react';

function Accordion() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            <div className="container">
                {[1, 2, 3].map((item, index) => (
                    <div className='m-3 px-3' key={index}>
                        <div
                            className="container ques border border-3 border-success rounded-5 my-3 py-3"
                            onClick={() => toggleAccordion(index)}
                            style={{ cursor: 'pointer' }}
                        >
                            <h3>Question {item}</h3>
                        </div>
                        {activeIndex === index && (
                            <div className="container ans border border-3 border-warning rounded-5 my-3 py-3">
                                <h5>Answer {item}</h5>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}

export default Accordion;
