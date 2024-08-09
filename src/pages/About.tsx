import { experiences, skills } from '../constants';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { CTA } from '../components';
import { useTranslation } from 'react-i18next';

interface Experience {
  name: string;
  points: string[];
}

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{' '}
        <span className="blue-gradient_text font-semibold drop-shadow">
          {' '}
          Hanbong
        </span>{' '}
        👋
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>{t('about.description')}</p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience.</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>{t('about.experience')}</p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {(t('about.list', { returnObjects: true }) as Experience[]).map(
              (data, index) => (
                <VerticalTimelineElement
                  key={data.name}
                  date={experiences[index].date}
                  iconStyle={{ background: experiences[index].iconBg }}
                  icon={
                    <div className="flex justify-center items-center w-full h-full">
                      <img
                        src={experiences[index].icon}
                        alt={data.name}
                        className="w-[60%] h-[60%] object-contain"
                      />
                    </div>
                  }
                  contentStyle={{
                    borderBottom: '8px',
                    borderStyle: 'solid',
                    borderBottomColor: experiences[index].iconBg,
                    boxShadow: 'none',
                  }}
                >
                  <div className={'mt-5'}>
                    <h3 className="text-black text-xl font-poppins font-semibold">
                      {experiences[index].title}
                    </h3>
                    <p
                      className="text-black-500 font-medium text-base"
                      style={{ margin: 0 }}
                    >
                      {data.name}
                    </p>
                  </div>

                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {data.points.map((point, index) => (
                      <li
                        key={`experience-point-${index}`}
                        className="text-black-500/50 font-normal pl-1 text-sm"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ),
            )}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
