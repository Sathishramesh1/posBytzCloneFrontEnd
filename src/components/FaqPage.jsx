import React, { useState } from 'react';
import './faqPage.css';
import data from '../utilites/faq.json';
import { IoMdArrowDropright, IoMdArrowDropup } from "react-icons/io";

function FaqPage() {
  const [selected, setSelected] = useState(null);

  const handleClick = (index) => {
    setSelected(index === selected ? null : index);
    console.log(index, "clicked");
  };

  return (
    <div className='faq_page'>
      <div className="accordion-flush" id="accordionExample">
        {Array.isArray(data) && data.map((ele, index) => (
          <div className={`accordion-item  question`} key={index}>
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded={selected === index}
                aria-controls={`collapse${index}`}
                onClick={() => handleClick(index)}
              >
                {selected === index ? <IoMdArrowDropup /> : <IoMdArrowDropright />}
                <b><span className={index !== selected ? "selected" : "not_selected"}>{ele.question}</span></b>
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className={`accordion-collapse collapse ${selected === index ? 'show' : ''}`}
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {Array.isArray(ele.answer) ? (
                  ele.answer.map((ans, ansIndex) => (
                    <span key={ansIndex}>
                    <span className='sub_heading'>{ans.heading}</span>: <span className='sub_answer'>{ans.subAnswer}
                    </span>
                    </span>
                  ))
                ) : (
                  <>{ele.answer}</>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FaqPage;
