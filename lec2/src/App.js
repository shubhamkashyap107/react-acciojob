import React from 'react'
// import "./App.css"
import 'semantic-ui-css/semantic.min.css'

const App = () => {
  // const styleObj1 = {backgroundColor:"red", height : "150px", width : "150px", border : "1px solid black"}



  return (
    // <div>
    //   <div style={styleObj1}>Dabba one</div>
    //   <div style={{backgroundColor:"yellow",  height : "150px", width : "150px", border : "1px solid black"}}>Dabba two</div>
    //   <div className='third'>Dabba three</div>
    // </div>

    <div style={{width : "300px", margin  : "auto", marginTop : "150px"}}>
           <form class="ui form">
  <div class="field">
    <label>First Name</label>
    <input type="text" name="first-name" placeholder="First Name" />
  </div>
  <div class="field">
    <label>Last Name</label>
    <input type="text" name="last-name" placeholder="Last Name" />
  </div>
  <div class="field">
    <div class="ui checkbox">
      <input type="checkbox" tabindex="0" class="hidden" />
      <label>I agree to the Terms and Conditions</label>
    </div>
  </div>
  <button class="ui button blue" type="submit">Submit</button>
</form>
      
    </div>

  )
}

export default App


