import {experiences, skills} from "../constants";
import {VerticalTimeline, VerticalTimelineElement,} from "react-vertical-timeline-component";
import {CTA} from "../components";

const About = () => {
    return (
        <section className='max-container'>
            <h1 className='head-text'>
                Hello, I'm{" "}
                <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
                    Hanbong
        </span>{" "}
                👋
            </h1>

            <div className='mt-5 flex flex-col gap-3 text-slate-500'>
                <p>
                    스타트업 환경에서 5년간 백엔드 웹 서비스 분야의 경험을 쌓은 소프트웨어 개발자입니다. Spring Boot를 사용한 백엔드 API 개발과 리눅스 서버 관리에 능숙하며, 빠른
                    개발과 디버깅 능력으로 까다로운 기한을 지속적으로 충족시켜 왔습니다. 신뢰할 수 있는 고품질의 성과를 제공하며, 빠르게 변화하는 환경에 적응하고 성장하는 능력이 뛰어납니다.
                    지속적인 학습과 최신 기술 동향에 대한 깊은 이해로 복잡한 문제를 효과적으로 해결합니다. Java, Spring, MySQL, AWS 서비스, Spring Batch에 능숙하며,
                    SQL 쿼리 최적화를 통해 포괄적인 기술 세트를 보여줍니다. 민첩한 프로젝트 관리로 여러 프로젝트를 성공적으로 이끌고 팀 환경에서 효과적으로 일하는 능력을 입증하였습니다.
                </p>
            </div>

            <div className='py-10 flex flex-col'>
                <h3 className='subhead-text'>My Skills</h3>

                <div className='mt-16 flex flex-wrap gap-12'>
                    {skills.map((skill) => (
                        <div className='block-container w-20 h-20' key={skill.name}>
                            <div className='btn-back rounded-xl'/>
                            <div className='btn-front rounded-xl flex justify-center items-center'>
                                <img
                                    src={skill.imageUrl}
                                    alt={skill.name}
                                    className='w-1/2 h-1/2 object-contain'
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='py-16'>
                <h3 className='subhead-text'>Work Experience.</h3>
                <div className='mt-5 flex flex-col gap-3 text-slate-500'>
                    <p>
                        저는 여러 회사에서 일하면서 실력을 키웠으며 뛰어난 사람들과 함께 협력을 진행해왔습니다.
                    </p>
                </div>

                <div className='mt-12 flex'>
                    <VerticalTimeline>
                        {experiences.map((experience) => (
                            <VerticalTimelineElement
                                key={experience.company_name}
                                date={experience.date}
                                iconStyle={{background: experience.iconBg}}
                                icon={
                                    <div className='flex justify-center items-center w-full h-full'>
                                        <img
                                            src={experience.icon}
                                            alt={experience.company_name}
                                            className='w-[60%] h-[60%] object-contain'
                                        />
                                    </div>
                                }
                                contentStyle={{
                                    borderBottom: "8px",
                                    borderStyle: "solid",
                                    borderBottomColor: experience.iconBg,
                                    boxShadow: "none",
                                }}
                            >
                                <div className={'mt-5'}>
                                    <h3 className='text-black text-xl font-poppins font-semibold'>
                                        {experience.title}
                                    </h3>
                                    <p
                                        className='text-black-500 font-medium text-base'
                                        style={{margin: 0}}
                                    >
                                        {experience.company_name}
                                    </p>
                                </div>

                                <ul className='my-5 list-disc ml-5 space-y-2'>
                                    {experience.points.map((point, index) => (
                                        <li
                                            key={`experience-point-${index}`}
                                            className='text-black-500/50 font-normal pl-1 text-sm'
                                        >
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
            </div>

            <hr className='border-slate-200'/>

            <CTA/>
        </section>
    );
};

export default About;
