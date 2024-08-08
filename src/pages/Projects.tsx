import {Link} from "react-router-dom";

import {CTA} from "../components";
import {arrow} from "../assets/icons";
import {useTranslation} from "react-i18next";
import {projects} from "../constants";

interface Project {
    name: string;
    description: string;
}

const Projects = () => {
    const {t} = useTranslation();

    return (
        <section className='max-container'>
            <h1 className='head-text'>
                My{" "}
                <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
            </h1>

            <p className='text-slate-500 mt-2 leading-relaxed'>
                {t('projects.description')}
            </p>

            <div className='flex flex-wrap my-20 gap-16'>
                {(t('projects.list', {returnObjects: true}) as Project[]).map((project, index) => (
                    <div className='lg:w-[400px] w-full' key={project.name}>
                        <div className='block-container w-12 h-12'>
                            <div className={`btn-back rounded-xl ${projects[index].theme}`}/>
                            <div className='btn-front rounded-xl flex justify-center items-center'>
                                <img
                                    src={projects[index].iconUrl}
                                    alt='project icon'
                                    className='w-1/2 h-1/2 object-contain'
                                />
                            </div>
                        </div>

                        <div className='mt-5 flex flex-col'>
                            <h4 className='text-2xl font-poppins font-semibold'>
                                {project.name}
                            </h4>
                            <p className='mt-2 text-slate-500'>{project.description}</p>
                            <div className='mt-5 flex items-center gap-2 font-poppins'>
                                <Link
                                    to={projects[index].link}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='font-semibold text-blue-600'
                                >
                                    Live Link
                                </Link>
                                <img
                                    src={arrow}
                                    alt='arrow'
                                    className='w-4 h-4 object-contain'
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <hr className='border-slate-200'/>

            <CTA/>
        </section>
    );
};

export default Projects;
