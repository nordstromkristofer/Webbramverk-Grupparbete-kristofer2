import React from 'react'
import './Kristofer.css'

const Loggain = () => {
  return (
    <div className='container'>
    <br></br><br></br> 
    <br></br><br></br> 
    <br></br><br></br> 
    <br></br><br></br> 
    <h1>LOGGA IN</h1>
  

<section className='form'>
<br></br><br></br> 
<br></br><br></br> 
<form> 
    <div className='form-group'>
    <input type="email" placeholder='Användare'></input>
    </div>  
    <div className='form-group'>
    <input type="password" placeholder='Lösenord'/>    
    </div>

    
    <div className='form-group'>
        <button type="submit" className='btn btn-block'>Logga in</button>
    </div>
</form>
</section>

</div>

    
  )
}

export default Loggain