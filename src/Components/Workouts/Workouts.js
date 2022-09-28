import React, { useEffect, useState } from 'react';
import './Workouts.css'
import Workout from '../Workout/Workout';

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
        <div className="container pb-4 pt-5">
          <div className="row">
            <div className="col-lg-8  order-2 order-lg-1">
              <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-4">
                {
                  workouts.map(workout => <Workout key={workout.id} workout={workout}></Workout>)
                }
              </div>
            </div>

            <div className="col-lg-4  order-1 order-lg-2">
              <div className="mb-4 p-3 border text-white rounded">
                <h4>My image and some info about me</h4>
              </div>
              <div className="p-3 border text-white rounded mb-5">
                some work
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Workouts;