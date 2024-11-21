import React from 'react'
import vg from '../assets/2.png'
import { AiFillAmazonCircle, AiFillGoogleCircle, AiFillFacebook, AiFillInstagram, AiFillTwitterCircle} from 'react-icons/ai'

const Home = () => {
  return (
      <>
          <div className='home' id='home'>
          <main>
              <h1>MEMEstore</h1>
              <p>Memes for all your problems</p>
         </main>
         
          </div>
          <div className='home2' >
              <img src="src/assets/memes-icon-25.jpg" alt="" />
              <div>
                  <p>
                  "Facing a challenge? We’ve got you covered! Our team of experts provides customized solutions for any problem, big or small. With 24/7 support and innovative strategies, we turn obstacles into opportunities, ensuring you achieve the results you need. Your solution is just a step away!"
                  </p>
              </div>
          </div>
          <div className="home3" id='about'>
              <div>
              <h1>
                  who we are?
                  </h1>
                  <p>
                  Welcome to MEMESTORE your ultimate destination for daily laughs, relatable content, and meme magic! We’re a community of humor enthusiasts who believe in the power of a good meme to brighten your day, share a laugh, and bring people together.

Our mission? To spread joy, one meme at a time. From classic memes to trending topics, we’ve got it all. So, whether you're a meme veteran or new to the scene, join us in celebrating the universal language of humor. Because life’s too short not to laugh!

Stay connected, stay entertained, and let’s make the world a funnier place together. 😂🎉
                  </p>

              </div>
          </div>
          <div className="home4" id='brands'>
              <div>
                  <h1>memes</h1>

                  <article>
                      <div style={{animationDelay: '0.3s'}}>
                         <img src="src/assets/2.png" alt="" /> 
                      </div>

                      <div style={{animationDelay: '0.5s'}}>
                          <img src="src/assets/bg.jpg" alt="" />
                      </div>

                      <div style={{animationDelay: '0.7s'}}>
                          <img src="src/assets/bg3.jpg" alt="" />
                      </div>

                      <div style={{animationDelay: '1s'}}>
                          <img src="src/assets/Screenshot 2024-10-29 171333.png" alt="" />
                          
                      </div>
                  </article>
              </div>
          </div>
              
      </>
  )
}

export default Home