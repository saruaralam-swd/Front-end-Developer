import React from 'react';
import './Workout.css'

const Workout = ({addTime, workout}) => {
  const {img, title, duration} = workout;

  return (
    <div className="col">
      <div className="card h-100">
        <img src={img} alt="img" />
        <div className="card-body">
          <h5 className="card-text fw-bold">{title}</h5>
          <p className='card-text'>Time required <b>{duration} days</b></p>
          <button onClick={() => addTime(workout)} className="custom-btn">Add to List</button>
        </div>
      </div>
    </div>
  );
};

export default Workout;