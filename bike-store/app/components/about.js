'use client';
import '../styles/about.css';
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-heading">{t('about.heading')}</h2>
        <p className="about-mission">{t('about.mission')}</p>
        <div className="about-values">
          <h3>{t('about.values.heading')}</h3>
          <ul>
            <li>{t('about.values.1')}</li>
            <li>{t('about.values.2')}</li>
            <li>{t('about.values.3')}</li>
            <li>{t('about.values.4')}</li>
            <li>{t('about.values.5')}</li>
          </ul>
        </div>
      </div>
      <div className="about-team">
        <h3>{t('about.team.heading')}</h3>
        <div className="team-members">
          <div className="team-member">
            <img src="/images/member1.jpg" alt={t('about.team.members.member1.alt')} />
            <h4>{t('about.team.members.member1.name')}</h4>
            <p>{t('about.team.members.member1.description')}</p>
          </div>
          <div className="team-member">
            <img src="/images/member2.jpg" alt={t('about.team.members.member2.alt')} />
            <h4>{t('about.team.members.member2.name')}</h4>
            <p>{t('about.team.members.member2.description')}</p>
          </div>
          <div className="team-member">
            <img src="/images/member3.jpg" alt={t('about.team.members.member3.alt')} />
            <h4>{t('about.team.members.member3.name')}</h4>
            <p>{t('about.team.members.member3.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;