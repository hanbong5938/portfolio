import React from 'react';
import {Link} from "react-router-dom";
// @ts-ignore
import {arrow} from "../assets/icons";

interface InfoBoxProps {
    text: string;
    link: string;
    buttonText: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({text, link, buttonText}) => {
    return (
        <div className="info-box">
            <p className={'font-medium sm:text-xl text-center'}>{text}</p>
            <Link to={link} className={'neo-brutalism-white neo-btn'}>
                {buttonText}
                <img src={arrow} alt={'arrow'} className={'w-4 h-4 object-contain'}/>
            </Link>
        </div>
    );
};


const renderContent: { [key: number]: React.ReactNode } = {
    1: <h1 className={'sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'}>
        안녕하세요, 저는 <span className={'font-semibold'}>배한봉</span>입니다 🖐️
        <br/>
        백엔드 개발자입니다.
    </h1>,
    2: <InfoBox text={'여러 회사에서 일하며 다양한 기술을 습득했습니다'} link={'/about'}
                buttonText={'더 알아보기'}/>,
    3: <InfoBox text={'여러 프로젝트를 성공적으로 이끌었습니다. 결과가 궁금하신가요?'} link={'/projects'}
                buttonText={'포트폴리오 보기'}/>,
    4: <InfoBox text={`프로젝트가 필요하시거나 개발자를 찾고 계신가요?`} link={'/contact'}
                buttonText={`연락하기`}/>,
};



interface HomeInfoProps {
    currentStage: number;
}

const HomeInfo: React.FC<HomeInfoProps> = ({currentStage}) => {
    return renderContent[currentStage] || null;
}

export default HomeInfo;
