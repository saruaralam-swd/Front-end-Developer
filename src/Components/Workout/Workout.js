import React from 'react';
import './Workout.css'

const Workout = ({addTime, workout}) => {
  const {img, title, body, age, duration} = workout;

  return (
    <div className="col">
      <div className="card h-100">
        <img src={img} alt="img" />
        <div className="card-body">
          <h6 className="card-text">{title}</h6>
          <p className="text-muted">{body.slice(0, 40) + '...'}</p>
          <p className='card-text'>For age {age}</p>
          <p className='card-text'>Time required {duration}s</p>
          <button onClick={() => addTime(workout)} className="custom-btn">Add to List</button>
        </div>
      </div>
    </div>
  );
};

export default Workout;