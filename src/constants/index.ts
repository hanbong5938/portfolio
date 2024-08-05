// @ts-ignore
import {sallyplan, septem, wecruit} from "../assets/images";
// @ts-ignore
import {
    contact,
    css,
    docker,
    excel,
    football,
    github,
    html,
    java,
    javascript,
    job,
    kotlin,
    mongodb,
    mysql,
    nestjs,
    nextjs,
    nginx,
    python,
    react,
    sass,
    spring,
    tailwindcss,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: spring,
        name: "SpringBoot",
        type: "Animation",
    },
    {
        imageUrl: nestjs,
        name: "NestJS",
        type: "Backend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Language",
    },
    {
        imageUrl: kotlin,
        name: "Kotlin",
        type: "Language",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Language",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Language",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Language",
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "Image Container",
    },
    {
        imageUrl: nginx,
        name: "Nginx",
        type: "Server",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
];

export const experiences = [
    {
        title: "Backend Developer",
        company_name: "(주)위크루트",
        icon: wecruit,
        iconBg: "#a2d2ff",
        date: "2020.09 - Present",
        points: [
            "멀티 모듈화: Gradle 멀티모듈을 사용하여 프로젝트 구현",
            "Excel 라이브러리: Apache POI를 활용하여 Excel 읽기 및 출력 기능을 가진 라이브러리 제작",
            "메일 라이브러리: SMTP 메일 사용 시 템플릿을 읽어 발송하는 라이브러리 제작",
            "코드 리뷰 프로세스: 코드 리뷰 프로세스 적용",
            "PDF 생성 API: NestJS 기반의 PDF 생성 API 작성",
            "서비스 마이그레이션: Flask에서 Spring Boot로 서비스 마이그레이션을 주도",
            "캐시 적용: 자주 변하지 않는 데이터의 읽기 속도를 향상시키고 서버 부하를 낮추기 위해 캐시 사용",
            "보안 업그레이드: SSL OV 인증서로 전환",
            "이벤트 기반 아키텍처: 비즈니스 로직과 분리를 위해 SMS 및 메일 이벤트 리스너를 활용한 처리",
            "AOP를 활용한 로깅: Spring AOP를 구현하여 상세한 API 접근 로그 작성",
            "인증 전송 횟수 제한: bucket4j를 적용하여 IP 당 인증 번호 전송 횟수 제한",
            "데이터베이스 유지 관리: Flyway를 통합하여 DB 유지 관리",
            "서버 통합: Apache2 vhost를 사용하여 한 서버에 여러 서버 서비스를 구현",
            "SSL 인증서 자동화: Apache2에서 Nginx로 마이그레이션하고 Nginx Proxy Manager와 Let’s Encrypt Wildcard를 사용하여 SSL 인증서 자동화",
            "API 최적화: REST TEMPLATE에서 Web Client로 외부 API 사용 시 병목 현상 발생 가능성을 낮춤",
            "자동 문서화: 프론트엔드 개발자들과의 협업을 위해 Spring Open API 3.0을 구현하여 자동 문서화",
            "오픈 API 제공: LG 채용 시스템에 적용하기 위해 스트레스 테스트를 진행하고 커넥션 풀을 최적화하며 데드락 제거",
            "비용 효율적 해결책: GCP에서 AWS LightSail로 전략적 마이그레이션을 통해 서버 비용을 30% 절감",
            "성능 향상: 인덱스를 추가하여 풀 텍스트 검색 전략을 수정해 쿼리 속도 개선",
            "보안 강화: KISA의 웹 방화벽(Castle) 및 취약점 평가 도구(Whistle) 도입",
            "빌드 과정의 효율성: Maven에서 Gradle로 전환하여 필요한 부분만 빌드하여 시간을 크게 절감",
            "최적화된 스케줄링: 전통적인 쉘 스크립트를 통한 Crontab API 호출 문제를 외부 접근 방지 및 환경 이식성을 위해 Spring Batch로 대체하여 스케줄링 효율성 향상"
        ],
    },
    {
        title: "Web Developer",
        company_name: "주식회사 샐리플랜",
        icon: sallyplan,
        iconBg: "#fbc3bc",
        date: "2020.06 - 2020.09",
        points: [
            "EX-LIVE 프로젝트에서 드래그를 통해 데이터를 조합하고 가져와 제공하는 기능 구현 및 차후 개발자를 위한 문서 작성",
            "Spring에서 SSH 접속 및 API 구현",
            "Vue.js로 작성된 Drag&Drop 기능을 가진 프로젝트 jQuery로 변환",
            "프로젝트 IE 대응 위한 문법 변경 및 CSS 수정"
        ],
    },
    {
        title: "Web Developer",
        company_name: "(주)셉템",
        icon: septem,
        iconBg: "#accbe1",
        date: "2020.04 - 2020.06",
        points: [
            "CX-LIVE 프로젝트에서 Vue.js를 통한 UI/UX구현",
            "Chart.js 통한 다양한 데이터 통계 구현",
            "Javascript 활용하여 사용자 데이터 수집하여 웹상에서 리플레이 구현",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/hanbong5938',
    }
];

export const projects = [
    {
        iconUrl: excel,
        theme: 'btn-back-red',
        name: 'Excel Util',
        description: '엑셀 파일 데이터 읽어 오거나 엑셀 출력하는 라이브러리',
        link: 'https://github.com/hanbong5938/excel-util',
    },
    {
        iconUrl: football,
        theme: 'btn-back-green',
        name: ' Fc Bayern 팬 사이트',
        description: '스프링 부트 프레임워크를 이용한 mvc 모델  축구 팬 커뮤니티 사이트 구축',
        link: 'https://github.com/hanbong5938/fcbayern',
    },
    {
        iconUrl: job,
        theme: 'btn-back-blue',
        name: '취업 정보 제공 사이트',
        description: '스프링 프레임워크를 이용한 mvc 모델 취업 정보 제공 사이트 구축',
        link: 'https://github.com/hanbong5938/BTL',
    }
];
