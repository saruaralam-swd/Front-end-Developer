import React from 'react';

const Question = () => {
  return (
    <div className='mt-5'>
      <div className='border rounded my-3 p-3'>
        <div>
          <h4 className='text-white'>How to react work</h4>
        </div>
      </div>
      <div className='border rounded my-3 p-3'>
        <div>
          <h4 className='text-white'>Difference Between <b>State</b> VS <b>Props</b></h4>
          <div>
            <div className='text-white my-4'>
              <h5>State</h5>
              <ul>
                <li> state can be modify using setState </li>
                <li>states are mutable.</li>
                <li>states are associated with the individual components can't be used by other components.</li>
                <li>states are initialize on component mount.</li>
                <li>states are used for rendering dynamic changes within component.</li>
              </ul>
            </div>
            <div className='text-white'>
              <h5>Props</h5>
              <ul>
                <li>props are read-only</li>
                <li>props can not be modify</li>
                <li>props are immutable.</li>
                <li>you can pass props between components.</li>
                <li>props are mostly used to communicate between components.You can pass from parent to child directly. For passing from child to parent you need use concept of lifting up states.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='border rounded my-3 p-3'>
        <div>
          <h4 className='text-white'>Use case useEffect</h4>
        </div>
      </div>
    </div>
  );
};

export default Question;