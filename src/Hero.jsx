import './Hero.css'
function Hero() {
    const imageUrls = [
      './images/adi.jpeg',
      './images/yuki.jpeg',
      './images/renny.jpeg',
      './images/sid.jpeg',
      './images/akkash.jpg',
      './images/kevin.jpeg',
      './images/pranav.jpeg',
      './images/joel.jpeg'

    ];
  
    return (
      <div className="hero">
        {imageUrls.map((imageUrl, index) => (
          <div class = 'image-container' key={imageUrl}>
            <img src={imageUrl} alt={`Image ${index}`} />
            <div className='about'>
              <div className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Integer leo neque, ultrices ac nisl vel, 
              efficitur tempus felis. Praesent ut sem quis ligula vehicula ultricies. 
              Phasellus consequat a metus eget tincidunt. Praesent eleifend erat semper est congue efficitur. 
              Fusce varius nibh ornare urna tempus, at ultrices felis posuere. 

              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default Hero;
  