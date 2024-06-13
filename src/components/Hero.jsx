const HeroSection =() =>{
  return(
    <main className="container">
      <div className="hero-left">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div className="shop"><button className="shop-btn butn">Shop Now</button>
        <button className="category-btn butn">Category</button>

        <p>Also Available On</p></div>
      
        <div className="brand">
        <img src="/images/flipkart.png" alt="flipkart" />
        <img src="/images/amazon.png" alt="amazon" />
        </div>
      </div>
      <div className="hero-right">
        <img src="/images/shoe_image.png" alt="product-image" />
      </div>
      
      </main>

  )
};
export default HeroSection;