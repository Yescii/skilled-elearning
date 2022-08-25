import HeroImg from "../assets/assets/image-hero-mobile.webp";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__para">
        <h2>Maximize skill, minimize budget</h2>
        <p>
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </p>
        <button> Get Started</button>
      </div>
      <div className="hero__img__layout">
        {/* <img className="hero__test" src={HeroImg} alt="e-learing" /> */}
        <div className="hero__img__box">
          <div className="hero__background__circle">
            <div className="hero__img"></div>
          </div>
          <div id="hero__top__right__box" className="hero__img__sub__box">
            <h5>Members</h5>
            <p>29k</p>
          </div>
          <div id="hero__bottom__left__box" className="hero__img__sub__box">
            <h5>Course hours</h5>
            <p>1,451</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
