import React from 'react';

const Question = () => {
  return (
    <div className='mt-5'>
      <div className='border rounded my-3 p-3'>
        <div>
          <h4 className='text-white'><li>How to react work ?</li></h4>
          <p className='text-white'> DOM is slow for HTML and XML documents
            It defines the logical structure of documents and the way a
            document is accessed and manipulated. So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript
            So when it needs to read or write to the DOM, it will use the virtual representation of it.
            Then the virtual compare actual dom and will try to find the most efficient way to update the browser's DOM.
            Unlike browser DOM elements, React elements are plain objects and are cheap to create.
            React DOM takes care of updating the DOM to match the React elements
            The reason for this is that JavaScript is very fast and it's worth keeping a DOM tree in it to speed up its manipulation.
            Although React was conceived to be used in the browser, because of its design it can also be used in the server with Node.js.
          </p>
        </div>
      </div>
      <div className='border rounded my-3 p-3'>
        <div>
          <h4 className='text-white'><li>Difference Between <b>State</b> VS <b>Props</b></li></h4>
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
        <div className='text-white'>
          <h4 className='text-white'><li>The useEffect Hook Usages</li></h4>
          <ul>
            <li>fetch API data</li>
            <li>validating input field</li>
            <li>live filtering</li>
            <li>DOM manipulated</li>
            <li>setTimeout</li>
            <li>SetInterval</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Question;