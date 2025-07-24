import React from 'react';

function GroupSection() {
  return (
    <div className='container-fluid gallery'>
      <div className="row gallery-group">
        
        <div className="gg col-lg-3 col-md-6 col-sm-12">
          <img src="https://i.pinimg.com/564x/2a/b1/59/2ab159cbedc9a2a0090535c7dd53c986.jpg" alt="" />
          <div className="overlay">
            <h3>BlackPink</h3>
            <h5>YG Entertainment</h5>
          </div>
        </div>

        <div className="gg col-lg-3 col-md-6 col-sm-12">
          <img src="https://i.pinimg.com/1200x/4b/46/8b/4b468b89fee9b7d5f1d9c91a8a1370e5.jpg" alt="" />
          <div className="overlay">
            <h3>Leeserafim</h3>
            <h5>Source Music</h5>
          </div>
        </div>

        <div className="gg col-lg-3 col-md-6 col-sm-12">
          <img src="https://i.pinimg.com/736x/5c/8b/b1/5c8bb105a8247a42c21e3fe6d60f4d12.jpg" alt="" />
          <div className="overlay">
            <h3>Zero Base One</h3>
            <h5>WakeOne</h5>
          </div>
        </div>

        <div className="gg col-lg-3 col-md-6 col-sm-12">
          <img src="https://i.pinimg.com/736x/af/23/5e/af235e6d9c761195eef88715f3277acc.jpg" alt="" />
          <div className="overlay">
            <h3>Stray Kids</h3>
            <h5>JYP Entertainment</h5>
          </div>
        </div>

      </div>
      

    </div>
  );
}

export default GroupSection;
