import React, { useState } from 'react';
import '../Stylesheets/AdmissionsPage.css';

const AdmissionsPage = () => {
  const [activeTab, setActiveTab] = useState('admission-procedure');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="admissions-page">
      <h1>Admissions</h1>

      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'admission-procedure' ? 'active' : ''}`}
          onClick={() => handleTabClick('admission-procedure')}
        >
          Admission Procedure
        </button>
        <button 
          className={`tab ${activeTab === 'btech' ? 'active' : ''}`}
          onClick={() => handleTabClick('btech')}
        >
          BTech
        </button>
        <button 
          className={`tab ${activeTab === 'mtech' ? 'active' : ''}`}
          onClick={() => handleTabClick('mtech')}
        >
          MTech
        </button>
        <button 
          className={`tab ${activeTab === 'phd' ? 'active' : ''}`}
          onClick={() => handleTabClick('phd')}
        >
          PhD
        </button>
        <button 
          className={`tab ${activeTab === 'fee-structure' ? 'active' : ''}`}
          onClick={() => handleTabClick('fee-structure')}
        >
          Fee Structure
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'admission-procedure' && (
          <div>
            <h2>Admission Procedure</h2>
            <p>Admissions to all programs are conducted through a series of examinations and interviews based on specific eligibility criteria. Below is the detailed procedure for each program:</p>
            <h3>Admission to B.Tech Programs:</h3>
            <p>Admissions to all B.Tech programs are made through the Jharkhand Combined Entrance Competitive Examination (JCECE) conducted by the JCECE Board constituted by the Government of Jharkhand. Lateral entry to diploma holders in engineering and technology is made in the 3rd semester through a competitive examination conducted separately for them. The number of seats through lateral entry in all branches is 10% of the normal seats.</p>
            <p>For more details, please see the JCECE website.</p>

            <h3>Admission to M.Tech Programs:</h3>
            <p>Admissions to M.Tech programs are made through a written test/interview conducted by the institute. Candidates with a valid GATE score, having a B.E. /B.Tech or equivalent in the respective discipline with a minimum of 60% marks or equivalent C.G.P.A (for SC/ST, the minimum marks required are 55% or equivalent C.G.P.A) from a recognized University/Institute, are eligible to apply in the prescribed format.</p>
            <p>Candidates possessing the above qualifications and having a valid GATE score will be entitled to a monthly stipend as per the A.I.C.T.E. / Government approved norms. If seats are not filled by GATE-qualified candidates for the M.Tech program, other candidates may also be considered without the monthly stipend.</p>

            <h3>Admission to Research Programs (Ph.D.):</h3>
            <p>Admission to the Ph.D. (Engineering) program in various engineering disciplines and interdisciplinary areas is made through a written test/interview conducted by the institute. Candidates with an M.E. /M.Tech or equivalent degree in the respective discipline with a minimum of 60% marks or equivalent C.G.P.A (for SC/ST candidates, the minimum marks required are 55% or equivalent C.G.P.A) from a recognized University/Institute, are eligible to apply in the prescribed format.</p>
            <p>Candidates possessing the above qualifications and having a valid GATE score will be entitled to a monthly stipend as per the A.I.C.T.E. / Government approved norms.</p>
          </div>
        )}

        {activeTab === 'btech' && (
          <div>
            <h2>BTech Admissions</h2>
            <p>The BTech program offers a variety of specializations. The intake and branches available for admission are as follows:</p>
            <table className="intake-table">
              <thead>
                <tr>
                  <th>Branch</th>
                  <th>Intake (Seats)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Computer Science & Engineering</td>
                  <td>120</td>
                </tr>
                <tr>
                  <td>Electrical Engineering</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>Mechanical Engineering</td>
                  <td>90</td>
                </tr>
                <tr>
                  <td>Civil Engineering</td>
                  <td>80</td>
                </tr>
                <tr>
                  <td>Electronics & Communication Engineering</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td><strong>Total Students</strong></td>
                  <td><strong>490</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'mtech' && (
          <div>
            <h2>MTech Admissions</h2>
            <p>The MTech program offers specializations in various advanced engineering fields. The intake and branches available for admission are as follows:</p>
            <table className="intake-table">
              <thead>
                <tr>
                  <th>Branch</th>
                  <th>Intake (Seats)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Data Science</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td>VLSI Design</td>
                  <td>25</td>
                </tr>
                <tr>
                  <td>Structural Engineering</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>Mechanical Engineering</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td>Power Systems</td>
                  <td>25</td>
                </tr>
                <tr>
                  <td><strong>Total Students</strong></td>
                  <td><strong>130</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'phd' && (
          <div>
            <h2>PhD Admissions</h2>
            <p>The PhD program offers research opportunities across a wide array of engineering disciplines. The intake and branches available for admission are as follows:</p>
            <table className="intake-table">
              <thead>
                <tr>
                  <th>Branch</th>
                  <th>Intake (Seats)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Computer Science & Engineering</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Electrical Engineering</td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>Mechanical Engineering</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>Civil Engineering</td>
                  <td>6</td>
                </tr>
                <tr>
                  <td>Electronics & Communication Engineering</td>
                  <td>9</td>
                </tr>
                <tr>
                  <td><strong>Total Students</strong></td>
                  <td><strong>40</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'fee-structure' && (
          <div>
            <h2>Fee Structure</h2>
            <p>Our fee structure is designed to provide quality education while ensuring affordability for all students. Below are the approximate fees for various programs:</p>
            <ul>
              <li><strong>BTech:</strong> ₹1,50,000 per year</li>
              <li><strong>MTech:</strong> ₹1,80,000 per year</li>
              <li><strong>PhD:</strong> ₹50,000 per year</li>
            </ul>
            <p>Note: The fees are subject to change. Additional charges may apply for hostel accommodation, examination, and other services.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdmissionsPage;
