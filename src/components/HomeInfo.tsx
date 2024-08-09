import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';
import { useTranslation } from 'react-i18next';

interface InfoBoxProps {
  text: string;
  link: string;
  buttonText: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ text, link, buttonText }) => {
  return (
    <div className="info-box">
      <p className="font-medium sm:text-xl text-center">{text}</p>
      <Link to={link} className="neo-brutalism-white neo-btn">
        {buttonText}
        <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
      </Link>
    </div>
  );
};

interface HomeInfoProps {
  currentStage: number;
}

const HomeInfo: React.FC<HomeInfoProps> = ({ currentStage }) => {
  const { t } = useTranslation();

  const renderContent: { [key: number]: React.ReactNode } = {
    1: (
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        {t('home.hello.prefix')}{' '}
        <span className="font-semibold">{t('home.name')}</span>
        {t('home.hello.suffix')} 🖐️
        <br />
        {t('home.position')}
      </h1>
    ),
    2: (
      <InfoBox
        text={t('home.about.content')}
        link="/about"
        buttonText={t('home.about.button')}
      />
    ),
    3: (
      <InfoBox
        text={t('home.projects.content')}
        link="/projects"
        buttonText={t('home.projects.button')}
      />
    ),
    4: (
      <InfoBox
        text={t('home.contact.content')}
        link="/contact"
        buttonText={t('home.contact.button')}
      />
    ),
  };

  return renderContent[currentStage] || null;
};

export default HomeInfo;
