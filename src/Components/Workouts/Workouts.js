import React, { useEffect, useState } from 'react';
import './Workouts.css'
import Workout from '../Workout/Workout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation } from '@fortawesome/free-solid-svg-icons'

const Workouts = () => {
  const [workouts, SetCart] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => SetCart(data));
  }, []);

  return (
    <div>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 pt-5 order-2 order-lg-1">
              <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-4">
                {
                  workouts.map(workout => <Workout key={workout.id} workout={workout}></Workout>)
                }
              </div>
            </div>

            <div className="col-lg-4 order-1 order-lg-2">
              <div className="mb-4 p-3 border text-white rounded">
                <div className="d-flex align-items-center">
                  <img className="me-4" src="./img/img.png" alt="img" />
                  <div>
                    <h4>Saraur Alam</h4>
                    <span>
                      <FontAwesomeIcon icon={faLocation} className="me-3"></FontAwesomeIcon>
                      jamalput, Bangladesh
                    </span>
                  </div>
                </div>

                <div className='d-flex justify-content-between bg-secondary my-4 p-2 rounded'>
                  <div>
                    <p className='m-0'>62</p>
                    <p className='m-0'>Weight</p>
                  </div>
                  <div>
                    <p className='m-0'>5.5</p>
                    <p className='m-0'>Height</p>
                  </div>
                  <div>
                    <p className='m-0'>29</p>
                    <p className='m-0'>Age</p>
                  </div>
                </div>

                <h6 className=''>Add A Break</h6>
                <div className='d-flex justify-content-between   bg-secondary my-4 p-2 rounded'>
                  <p className='time'>10s</p>
                  <p className='time'>20s</p>
                  <p className='time'>30s</p>
                  <p className='time'>40s</p>
                  <p className='time'>50s</p>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Workouts;