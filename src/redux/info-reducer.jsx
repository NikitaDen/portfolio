import js from './../assets/images/js.svg';
import ts from './../assets/images/ts.svg';
import react from './../assets/images/react.svg';
import redux from './../assets/images/redux.svg';
import vue from './../assets/images/vue.svg';
import html from './../assets/images/html.svg';
import css from './../assets/images/css.svg';
import sass from './../assets/images/sass.svg';

import fb from './../assets/images/facebook.svg';
import gmail from './../assets/images/gmail.svg';
import telegram from './../assets/images/telegram.svg';
import github from './../assets/images/github.svg';
import ln from './../assets/images/linkedin.svg';
import avatar from './../assets/images/avatar.JPG';

import tasker from './../assets/images/tasker.svg';
import chart from './../assets/images/chart.svg';
import bermudy from './../assets/images/bermudy.png';

let initialState = {
    age: '24',
    phone: '+375 (29) 317-05-55',
    avatar,
    technologies: [
        {photo: js, alt: 'JavaScript', id: 1},
        {photo: ts, alt: 'TypeScript', id: 2},
        {photo: react, alt: 'React', id: 3},
        {photo: redux, alt: 'Redux', id: 4},
        {photo: vue, alt: 'Vue', id: 5},
        {photo: html, alt: 'HTML', id: 6},
        {photo: css, alt: 'CSS', id: 7},
        {photo: sass, alt: 'Sass', id: 8},
    ],
    portfolio: [
        {
            href: 'https://nikitaden.github.io/analyzer/',
            title: 'Analyzer.',
            className: 'portfolio__projects__item analyzer',
            img: chart,
            description: 'This is a complex app that helps you identify weaknesses in your budget by providing analytics for expenses. If you don\'t want to sing up you can test the app with credentials: email - test@mail.com, password - 1234567. Please, don\'t delete expenses in the table, this is the test account for all the users. If you want to delete something - please, sign up with your own credentials.',
            stack: 'JavaScript, TypeScript, React, Redux, NodeJS, Express, MongoDB, JWT, JSX, SCSS',
            github: 'https://github.com/NikitaDen/analyzer',
            id: 3,
        },
        {
            href: 'https://nikitaden.github.io/systemyzer/',
            title: 'Systemyzer.',
            className: 'portfolio__projects__item systemyzer',
            img: 'S',
            description: 'This app helps you systematize your thoughts, task and whatever you\'d like to. If you don\'t want to sing up you can test the app with credentials: email - test@mail.com, password - 1234567. Please, don\'t delete any data, this is the test account for all the users. If you want to delete something - please, sign up with your own credentials.',
            stack: 'JavaScript, Vue, Vuex, Vue-router, Firebase, SCSS',
            github: 'https://github.com/NikitaDen/systemyzer',
            id: 5,
        },
        {
            href: 'https://nikitaden.github.io/palettor/',
            title: 'Pickolor.',
            className: 'portfolio__projects__item palettor',
            img: '',
            stack: 'JavaScript, React, Redux, JSX, SCSS',
            description: 'This is a simple app that helps you find colors for the design.',
            github: 'https://github.com/NikitaDen/palettor',
            id: 1,
        },
        {
            href: 'https://nikitaden.github.io/tasker/',
            title: 'Tasker.',
            className: 'portfolio__projects__item tasker',
            img: tasker,
            stack: 'JavaScript, React (React Hooks for state management), JSX, SCSS',
            description: 'This app helps you manage your everyday tasks more efficiently.',
            github: 'https://github.com/NikitaDen/tasker',
            id: 2,
        },
        {
            href: 'http://bermudy.by/',
            title: 'Bermudy.',
            className: 'portfolio__projects__item bermudy',
            img: bermudy,
            description: 'Bermudy - commercial project for fish farm, that provides fishing services',
            stack: 'JavaScript, Jquery, PHP, HTML, SCSS, Gulp',
            github: '',
            id: 4,
        },
    ],
    social: [
        {url: 'mailto:nickdnsv@gmail.com', photo: gmail, alt: 'gmail', id: 1},
        {url: 'https://t.me/NktDenisov', photo: telegram, alt: 'telegram', id: 2},
        {url: 'https://www.linkedin.com/in/nktdenisov/', photo: ln, alt: 'linkedIn', id: 3},
        {url: 'https://github.com/NikitaDen', photo: github, alt: 'github', id: 4},
        {url: 'https://www.facebook.com/profile.php?id=100004291969423', photo: fb, alt: 'facebook', id: 5},
    ],

    ru: {
        fullName: 'Никита Денисов',
        city: '\'Минск\'',
        info: [
            {
                head: '\'О себе\':', text: '\'Целеустремленный и дисциплинированный. ' +
                    'Мотивирован для карьерного роста и совершенствования навыков программирования. ' +
                    'Программирование дает прекрасную возможность сделать рабочую жизнь интересной и оцененной по достоинству,' +
                    ' поэтому у меня достаточно мотивации, чтобы стать хорошим программистом.\' ,', id: 1
            },
            {
                head: '\'Образование\':',
                text: '\'Магистр (БНТУ, кафедра "Стандартизация, метрология и информационные системы")\' ,',
                id: 2
            },
            {head: '\'Языки\':', text: '\'Английский, B1-B2\' ,', id: 3},
            {head: '\'Опыт\':', text: '\'Фриланс, январь 2020\'', id: 4},
            {head: '\'Коммерческие работы\':', text: '\'Веб-сайт Bermudy\'', id: 5},
        ],
    },

    en: {
        fullName: 'Nikita Denisov',
        city: '\'Minsk\'',
        info: [
            {
                head: 'Objective:', text: '\'Purposeful and disciplined. ' +
                    'Motivated for career growth and improving programming skills. ' +
                    'Programming gives a great opportunity to make work-life interesting and valued, ' +
                    'so I have enough motivation to become a good programmer.\'', id: 1
            },
            {
                head: 'Education:',
                text: '\'Master (BNTU, "Standartization, metrology and information systems")\' ,',
                id: 2
            },
            {head: 'Languages:', text: '\'English, B1-B2\' ,', id: 3},
            {head: 'Experience:', text: '\'Freelance, January 2020\'', id: 4},
            {head: 'Commercial projects:', text: '\'Website Bermudy\'', id: 5},
        ],
    }
};

const mainReducer = (state = initialState, action) => {
    return state;
};

export default mainReducer;

