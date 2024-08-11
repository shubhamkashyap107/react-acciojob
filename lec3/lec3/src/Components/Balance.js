import React from 'react'


const Balance = (props) => {
    const{name,balance} = props;
  return (
    <div>
      Customer whose name is {name} owns {balance} rupees
    </div>
  )
}
export default Balance