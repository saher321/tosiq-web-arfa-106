import React, { useRef } from 'react'

const Reference = () => {
    let text = useRef(null);

    const handleShowText = () => {
        let data = text.current.value;
        console.log(data);
    }
  return (
    <div>
        {/* <input ref={text} onKeyUp={handleShowText} type='text' placeholder='Enter any text' /> */}
        <input ref={text} type='text' placeholder='Enter any text' />
        <br />
        <br />
        <button onClick={handleShowText}>Show text</button>
    </div>
  )
}

export default Reference