import React from 'react';
import myPhoto from '../assets/my_photo-removebg.png'; // استيراد صورة شخصية

const Main = () => {
  return (
    <section>
      <div className="main" id="main">
        <div className="moon-image">
          <div className="z1">
            <h1>Welcome to my Portfolio website<br />
              <span>Information security, networks and website building</span>
            </h1>
            <h3>trainee</h3>
          </div>
        </div>
        <div className="personal-image">
          <img src={myPhoto} alt="Personal" />
        </div>
      </div>
    </section>
  );
};

export default Main;
