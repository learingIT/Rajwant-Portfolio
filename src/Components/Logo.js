import React from 'react'

export default function active() {
  return (
    <>
      <div className="container" id='contect us'>
        <h1>Contect Me</h1>
      </div>
      <div className="active">
        <div className="firstlogo">
          <a className='logoA' href="https://www.linkedin.com/in/rajwant-singh-8aba0224a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BFCYBk9U2T8ylXvFrN2XPXA%3D%3D" target="_blank" rel="noreferrer">
            <img src="./image/linkdin.png" className="icon" alt="Icon" />
            <span className='contextitem'>click me</span>
          </a>
        </div>
        <div className="firstlogo">
          <a className='logoA' href="https://github.com/learingIT" target="_blank" rel="noreferrer">
            <img src="./image/github.png" className="icon" alt="Icon" />
            <span className='contextitem'>click me</span>
          </a>
        </div>
        <div className="firstlogo">
          <a className='logoA' href="https://www.naukri.com/mnjuser/profile" target="_blank" rel="noreferrer">
            <img src="./image/naukri.com_png"className="icon" alt="Icon" />
            <span className='contextitem'>click me</span>
          </a>
        </div>
        
      </div>
      
    </>
  )

}
