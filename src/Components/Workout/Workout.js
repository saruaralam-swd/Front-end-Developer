import React from 'react';

const Workout = (props) => {
  console.log(props.workout);
  const {img, title, body, age, duration} = props.workout;

  return (
    <div className="col">
      <div className="card h-100">
        <img src={img} alt="img" />
        <div className="card-body">
          <h6 className="card-text">{title}</h6>
          <p className="text-muted">{body.slice(0, 40) + '...'}</p>
          <p className='card-text'>For age {age}</p>
          <p className='card-text'>Time required {duration}s</p>
          <button className="btn btn-primary w-100">SELECT</button>
        </div>
      </div>
    </div>
  );
};

export default Workout;