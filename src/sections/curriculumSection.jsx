import React from "react";

const CurriculumSection = () => {
  return (
    <>
      <div className="contactSection_div">
        <div id="cv" className="flex justify-start">
          <h1 className="flex justify-end mb-4">Curriculum</h1>
        </div>
        <div className="grid grid-columns-2 gap-4">
          <div className="grid grid-columns-2">
            <h2 className="mb-3">Relevant Work Experience</h2>
            <h4 className="mb-2">
              SOFTWARE DEVELOPER JUNIOR ACCENTURE PROJECT FOR A BANK BBVA
              <br/>
              (JANUARY-MARCH 2021) Alicante, Spain
            </h4>
            <h4>
              SOFTWARE DEVELOPER JUNIOR CURTIS FITCH 
              <br/>
              (AUGUST-NOV 2020) Cheltenham, UK
            </h4>
          </div>
          <div>
          <h2 className="mb-3">Studies Related</h2>
          <h4 className="mb-2">
              FULL STACK DEVELOPER BOOTCAMP (Certificate) GENERAL ASSEMBLY 
              <br />
              LONDON (ENERO-MAYO 2020)
            </h4>
            <h4 className="mb-2">
              FULL STACK DEVELOPER BOOTCAMP (Certificate) 4GEEKS 
              <br />
              SPAIN (OCTOBER-ENERO 2023)
            </h4>
            <h4 className="mb-2">
              HIGH DEGREE WEB DEVELOPMENT 
            <br />
            (Formación Profesional II Desarrollo de Aplicaciones Web DAW)</h4>
            <h4 className="mb-2">
              HIGH DEGREE CIMENA, TV AND AUDIOVISUAL 
            <br />
            (Formación Profesional II)</h4>
            <h4 className="mb-2">
              MEDIUM DEGREE GRAPHIC DESIGN 
            <br />
            (Formación Profesional I)</h4>
            <h4 className="mb-2">
              MASTER FINANCIAL GESTION AND ACCOUNTANT 
            </h4>
            <br />

            <h2 className="mb-3">OTHERS</h2>

            <h4 className="mb-2">
            English – 10 years in England (London, Bristol and York).
            <br />
            Professional and responsible when making decisions that concern other people
            <br />
            Quick learn
            <br />
            Ability to adapt to new situations
            <br />
            initiative at work
            <br />
            Persevering and organized with the ability to multitask
            <br />
            Ability to prioritize ideas
            <br />
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurriculumSection;
