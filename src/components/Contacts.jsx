import React from 'react'

const Contacts = () => {
  return (
    <div className='contact '>
      <main>
        <h1>contact us</h1>
        <form action="">
          <div>
          <label htmlFor="">Name</label>
          <input type="text" required placeholder='Name' />
        </div>
            
          <div>
            <label htmlFor="">Email</label>
            <input type="email" required placeholder='Email' />
          </div>

          <div> 
            <label htmlFor="">Message</label>
            <input type="text"  required placeholder='tell me about  you' />
          </div>

          <button type='submit'>Submit</button>
        
        
        </form>
      </main>
      Contacts</div>
  )
}

export default Contacts