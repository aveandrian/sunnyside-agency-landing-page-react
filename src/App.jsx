
import Navbar from './components/Navbar'
import './App.css'

function App() {
  return (
    <>
      <main>
        <div className='header-section'>
          <Navbar />
          <div className='header-content'>
            <h1 className='header-title'>We are creatives</h1>
            <img className='arrow' src='/images/icon-arrow-down.svg'></img>
          </div>
        </div>
        <div className='transform-section'>
          <div className='transform-content'>

          
          <h2 className='transform-title'>Transform your brand</h2>

          <p className='transform-text'>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>

          <a className='transform-link'>Learn more</a>
          </div>
        </div>
        <div className='transform-picture'>
          
        </div>
        <div className='stand-picture'>

        </div>
        <div className='stand-section'>
          <div className='stand-content'>
            <h2 className='stand-title'>Stand out to the right audience</h2>
            <p className='stand-text'> Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>          
            <a className='stand-link'>Learn more</a>
          </div>
        </div>
        <div className='graphic-design-section'>
          <h2 className='graphic-design-title'>Graphic design</h2>
          <p className='graphic-design-text'>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
        </div>
        <div className='photography-section'>
            <h2 className='photography-title'>Photography</h2>
            <p className='photography-text'>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
        </div>
        <div className='review-section'>
          <h2 className='review-title'>Client testimonials</h2>
          <div className='review-content'>
            <div className='review'>
                <img className='review-ava' src='/images/image-emily.jpg'></img>
                <p className='review-text'>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
                <p className='review-name'>Emily R.</p>
                <p className='review-work'>Marketing Director</p>
            </div>
            <div className='review'>
                <img className='review-ava' src='/images/image-thomas.jpg'></img>
                
                <p className='review-text'>Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
                <p className='review-name'>Thomas S.</p>
                <p className='review-work'>Chief Operating Officer</p>
            </div>
            <div className='review'>
                <img className='review-ava' src='/images/image-jennie.jpg'></img>
                <p className='review-text'>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
                <p className='review-name'>Jennie F.</p>
                <p className='review-work'>Business Owner</p>
            </div>
          </div>
        </div>
        <div className='milk-picture'></div>
        <div className='orange-picture'></div>
        <div className='ice-cream-picture'></div>
        <div className='cubes-picture'></div>
        <div className='social-section'>
          <img className='footer-logo' src='/images/logo.svg'></img>
          <div className='social-links'>
            <a>About</a>
            <a>Services</a>
            <a>Services</a>Projects
          </div> 
          <div className='social-icons'>
            <img src='/images/icon-facebook.svg'></img>
            <img src='/images/icon-instagram.svg'></img>
            <img src='/images/icon-twitter.svg'></img>
            <img src='/images/icon-pinterest.svg'></img>
          
          </div>
        </div>

  
  


  




  </main>
  <footer className="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>.
  </footer>
    </>
  )
}

export default App
