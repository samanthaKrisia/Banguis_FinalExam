export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Samantha Krisia S.Banguis</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Front-End</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          Crafting digital masterpieces where code meets canvas, I'm a front-end developer weaving functionality into visual poetry. Let's turn your ideas into an interactive symphony of design and innovation!
            <br /> Want to know more?
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
