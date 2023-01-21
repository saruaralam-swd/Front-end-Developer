import React, { useEffect, useState } from 'react';
import './Workouts.css'
import Workout from '../Workout/Workout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import MyImg from '../../images/img.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../../images/logo.png';

const Workouts = () => {
  const [workouts, SetWorkouts] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => SetWorkouts(data));
  }, []);


  // add to list handler
  let [time, SetTime] = useState(0)
  const addTime = (workout) => {
    const duration = parseInt(workout.duration);
    time = duration + time;
    SetTime(time);
  }

  // getTime form local storage
  const getItem = localStorage.getItem('time');

  const [buttonText, setButtonText] = useState(getItem);

  // add to break time handler
  function handleClick(e) {
    const second = e.target.textContent;
    localStorage.setItem('time', second);

    setButtonText(second);
  }

  // toastify 
  const notify = () => toast.success('Congratulation!', {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  return (
    <div>
      <main>
        <div className="mt-4">
          <div className="row">
            <div className="col-lg-8 mb-4">
              <div className='d-flex mb-3'>
                <img className='logo-custom me-3' src={logo} alt="logo" />
                <h2 className='text-white'>Front end Developer</h2>
              </div>
              <p className='text-white'>Select today's learn topic</p>
              <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-4">
                {
                  workouts.map(workout => <Workout addTime={addTime} key={workout.id} workout={workout}></Workout>)
                }
              </div>
            </div>

            <div className="col-lg-4">
              <div className="mb-4 p-3 border text-white rounded">
                <div className="d-flex align-items-center">
                  <img className="me-4 my-img" src={MyImg} alt="img" />
                  <div>
                    <h4>Md. Saraur Alam</h4>
                    <span>
                      <FontAwesomeIcon icon={faLocation} className="me-3"></FontAwesomeIcon>
                      jamalpur, Bangladesh
                    </span>
                  </div>
                </div>

                <div className='d-flex justify-content-between bg-white text-black my-4 p-2 rounded'>
                  <div>
                    <p className='m-0 fw-bold'>62kg</p>
                    <p className='m-0'>Weight</p>
                  </div>
                  <div>
                    <p className='m-0 fw-bold'>5.5</p>
                    <p className='m-0'>Height</p>
                  </div>
                  <div>
                    <p className='m-0 fw-bold'>20yrs</p>
                    <p className='m-0'>Age</p>
                  </div>
                </div>

                <h5 className=''>Add A Break</h5>
                <div className='d-flex justify-content-between bg-white text-black my-4 mb-5 p-2 rounded'>
                  <button onClick={handleClick} className='time border'>10</button>
                  <button onClick={handleClick} className='time border'>20</button>
                  <button onClick={handleClick} className='time border'>30</button>
                  <button onClick={handleClick} className='time border'>40</button>
                  <button onClick={handleClick} className='time border'>50</button>
                </div>

                <h5>Course Details</h5>
                <div className='d-flex justify-content-between rounded bg-white text-black p-2 mb-3'>
                  <h6>Course time</h6>
                  <p><span>{time}</span> days</p>
                </div>
                <div className='d-flex justify-content-between rounded bg-white text-black p-2'>
                  <h6>Break time</h6>
                  <p><samp>{buttonText ? buttonText : 0}</samp> minute</p>
                </div>

                <button onClick={notify} className="mt-4 w-100 btn btn-primary">course complete</button>
                <ToastContainer />

              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Workouts;