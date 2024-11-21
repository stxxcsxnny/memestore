import React from 'react'
import vg from '../assets/2.png'
import { AiFillAmazonCircle, AiFillGoogleCircle, AiFillFacebook, AiFillInstagram, AiFillTwitterCircle} from 'react-icons/ai'

const Home = () => {
  return (
      <>
          <div className='home' id='home'>
          <main>
              <h1>MEMESTORE</h1>
              <p>Memes for all your problems</p>
         </main>
         
          </div>
          <div className='home2' >
              <img src={vg} alt='graphic' />
              <div>
                  <p>
                  "Got a problem? We've got the meme! Our page serves up hilarious, relatable memes for every situation. From daily struggles to unexpected mishaps, we're here to make you laugh through it all. Join us and turn every problem into a punchline!"
                  </p>
              </div>
          </div>
          <div className="home3" id='about'>
              <div>
              <h1>
                  who we are?
                  </h1>
                  <p>
                  Welcome to Memestore  your ultimate destination for daily laughs, relatable content, and meme magic! We’re a community of humor enthusiasts who believe in the power of a good meme to brighten your day, share a laugh, and bring people together.

Our mission? To spread joy, one meme at a time. From classic memes to trending topics, we’ve got it all. So, whether you're a meme veteran or new to the scene, join us in celebrating the universal language of humor. Because life’s too short not to laugh!

Stay connected, stay entertained, and let’s make the world a funnier place together. 😂🎉
                  </p>

              </div>
          </div>
          <div className="home4" id='brands'>
              <div>
                  <h1>Memes</h1>

                  <article>
                      <div style={{animationDelay: '0.3s'}}>
                          <AiFillGoogleCircle />
                          <p>google</p>
                      </div>

                      <div style={{animationDelay: '0.5s'}}>
                          <AiFillAmazonCircle />
                          <p>Amazone</p>
                      </div>

                      <div style={{animationDelay: '0.7s'}}>
                          <AiFillInstagram />
                          <p>Instagram</p>
                      </div>

                      <div style={{animationDelay: '1s'}}>
                          <AiFillFacebook />
                          <p>Facebook</p>
                      </div>
                  </article>
              </div>
          </div>
              
      </>
  )
}

export default Home
