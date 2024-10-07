import React, { useState } from 'react';
import data from './data';
import './styles.css';

function AccordianRevision() {
    const allData = data;

    // State to determine if only one accordion can be open at a time
    const [showSingleAccordion, setShowSingleAccordion] = useState(true);

    // State to keep track of open accordions by their IDs
    const [openAccordions, setOpenAccordions] = useState([]);

    // Handler to toggle between single and multiple accordion modes
    const toggleMode = () => {
        setShowSingleAccordion(prev => {
            const newMode = !prev;
            if (newMode) {
                // If switching to single mode, keep only the first open accordion
                if (openAccordions.length > 1) {
                    setOpenAccordions([openAccordions[0]]);
                }
            }
            return newMode;
        });
    };

    // Handler to open/close accordions based on the current mode
    const showContent = (id) => {
        if (showSingleAccordion) {
            // Single Mode
            if (openAccordions.includes(id)) {
                // If the clicked accordion is already open, close it
                setOpenAccordions([]);
            } else {
                // Open the clicked accordion and close others
                setOpenAccordions([id]);
            }
        } else {
            // Multiple Mode
            if (openAccordions.includes(id)) {
                // If already open, remove it (close)
                setOpenAccordions(openAccordions.filter(accId => accId !== id));
            } else {
                // Open the clicked accordion
                setOpenAccordions([...openAccordions, id]);
            }
        }
    };

    return (
        <>
            <div className='div-main'>
                {/* Toggle Button */}
                <button onClick={toggleMode}>
                    {showSingleAccordion ? "Show Multiple Accordions" : "Show Single Accordion"}
                </button>

                {/* Render Accordions */}
                {
                    allData.map((item) => (
                        <div
                            key={item.id}
                            className='accordian'
                            onClick={() => showContent(item.id)}
                            style={{
                                cursor: 'pointer',
                                border: '1px solid #ccc',
                                padding: '10px',
                                margin: '5px 0',
                                borderRadius: '4px',
                                backgroundColor: openAccordions.includes(item.id) ? '#f9f9f9' : '#fff',
                                transition: 'background-color 0.3s ease',
                            }}
                        >
                            {/* Accordion Header */}
                            <h1>{item.question}</h1>

                            {/* Conditional Accordion Content */}
                            {openAccordions.includes(item.id) && (
                                <p>{item.answer}</p>
                            )}
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default AccordianRevision;
