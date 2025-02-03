'use client';
import '../styles/about.css';

const About = () => {

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-heading">About us!</h2>
        <p className="about-mission">Our mission is high quality life changing biking experience at the tip of your saddle</p>
        <div className="about-values">
          <h3>Our Bikes Top Qualities!</h3>
          <ul>
            <li>Eco-friendly</li>
            <li>Durable</li>
            <li>Life-changing</li>
            <li>Comfortable</li>
            <li>Light weight</li>
          </ul>
        </div>
      </div>
      <div className="about-team">
        <h3>All brought to you by our wonderul researchers</h3>
        <div className="team-members">
          <div className="team-member">
            <img src="/images/member1.jpg" alt="członek zespołu 1" />
            <h4>David Motorbike</h4>
            <p>David is a young and passionate fella, who spent 27 years of his entire life, sitting and riding bikes. He's done gravity racing all the way to Tour de France, however after injecting steroids in his buttocks, he can no longer do anything besides sitting on the bike saddle. </p>
          </div>
          <div className="team-member">
            <img src="/images/member2.jpg" alt="Team member 2 " />
            <h4>Jadwiga Kucharska</h4>
            <p>Young and motivated sportswoman with tons of experience. Evil twin of David Motorbike. She's the one who ressurected Maurice. She is also a wonderful friend and deserves to get immortalised on a silly website project</p>
          </div>
          <div className="team-member">
            <img src="/images/member3.jpg" alt="Team member 3 Maurice Garin Reborn" />
            <h4>Maurice Garin Reborn</h4>
            <p>After years of being dead, Maurice deicded to dig himself out to show the biking world how it's done - after all, being dead is just an excuse, biking is eternal.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;