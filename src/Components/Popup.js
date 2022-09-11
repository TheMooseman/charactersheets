import React from 'react'

function Popup(props) {
  return (props.open) ? (
    <div className='popup'>
        <div className='popup-inner'>
            <button onClick={props.close}>X</button>
            {props.children}
        </div>
    </div>
  ) : '';
}

export default Popup