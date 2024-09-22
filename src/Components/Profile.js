import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

function Profile() {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Web Developer', 'UI Designer', 'Data Analyst', 'React.js','Python programer'],
      typeSpeed: 90,
      backSpeed: 90,
      smartBackspace: true,
      loop:true,
    };
    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home">
        <div className="left">
          {/* "Hi: I am" is static, and Typed.js will handle only the job titles */}
          <h1>
              Hi: I am <span className="newspan" ref={typedRef}></span>
            <div className="new-line">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur non eligendi expedita amet explicabo minus fugiat, odit repellat pariatur ?
            </div>
          </h1>

          <a
            href="pdf/resume_rajwant.docx"
            download="resume_rajwant.docx"
            className="button"
          >
            Download Resume
          </a>
        </div>

        <div className="right">
          <div className="img">
            <img
              src="./image/raj.jpg"
              alt="Rajwant Singh profile"
              className="img"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
