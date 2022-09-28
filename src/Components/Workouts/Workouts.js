import React, { useEffect, useState } from 'react';
import './Workouts.css'
import Workout from '../Workout/Workout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import MyImg from '../../images/img.png'

const Workouts = () => {
  const [workouts, SetWorkouts] = useState([]);
  useEffect(() => {
    fetch('data.json')
    .then(res => res.json())
    .then(data => SetWorkouts(data));
  }, []);
  
  let [time, SetTime] = useState(0)
  const addTime = (workout) => {
    const duration = parseInt( workout.duration);
    time = duration + time;
    SetTime(time);
  }

  const [breakTime, SetBreakTime] = useState(0)
  const getBreakTime = (value) => {
    SetBreakTime(value);
  }

  return (
    <div>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 pt-5 order-2 order-lg-1">
              <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-4">
                {
                  workouts.map(workout => <Workout addTime={addTime} key={workout.id} workout={workout}></Workout>)
                }
              </div>
            </div>

            <div className="col-lg-4 order-1 order-lg-2">
              <div className="mb-4 p-3 border text-white rounded">
                <div className="d-flex align-items-center">
                  <img className="me-4 w-25" src={MyImg} alt="img" />
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
                    <p className='m-0 fw-bold'>62kg</p>
                    <p className='m-0'>Weight</p>
                  </div>
                  <div>
                    <p className='m-0 fw-bold'>5.5</p>
                    <p className='m-0'>Height</p>
                  </div>
                  <div>
                    <p className='m-0 fw-bold'>29yrs</p>
                    <p className='m-0'>Age</p>
                  </div>
                </div>

                <h5 className=''>Add A Break</h5>
                <div className='d-flex justify-content-between bg-secondary my-4 mb-5 p-2 rounded'>
                  <button onClick={() => getBreakTime(10)} className='time'>10s</button>
                  <button onClick={() => getBreakTime(20)} className='time'>20s</button>
                  <button onClick={() => getBreakTime(30)} className='time'>30s</button>
                  <button onClick={() => getBreakTime(40)} className='time'>40s</button>
                  <button onClick={() => getBreakTime(50)} className='time'>50s</button>
                </div>

                <h5>Exercise Details</h5>
                <div className='d-flex justify-content-between  p-2 mb-3 bg-secondary'>
                  <h6>Exercise time</h6>
                  <p><span>{time}</span> seconds</p>
                </div>
                <div className='d-flex justify-content-between  p-2 bg-secondary'>
                  <h6>Break time</h6>
                  <p><samp>{breakTime}</samp> seconds</p>
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