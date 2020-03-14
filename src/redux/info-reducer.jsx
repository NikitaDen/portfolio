import js from './../assets/images/js.svg';
import react from './../assets/images/react.svg';
import redux from './../assets/images/redux.svg';
import html from './../assets/images/html.svg';
import css from './../assets/images/css.svg';
import sass from './../assets/images/sass.svg';

import vk from './../assets/images/vk.svg';
import fb from './../assets/images/facebook.svg';
import gmail from './../assets/images/gmail.svg';
import telegram from './../assets/images/telegram.svg';
import github from './../assets/images/github.svg';
import avatar from './../assets/images/avatar.JPG';

let initialState = {
    age: '23',
    phone: '+375 (29) 317-05-55',
    avatar: avatar,
    technologies: [
        {photo: js, alt: 'JS', id: 1},
        {photo: react, alt: 'React', id: 2},
        {photo: redux, alt: 'Redux', id: 3},
        {photo: html, alt: 'HTML', id: 4},
        {photo: css, alt: 'CSS', id: 5},
        {photo: sass, alt: 'Sass', id: 6},
    ],
    portfolio: [
        {href: 'https://nikitaden.github.io/palettor/', title: 'Palettor.', className: 'portfolio__projects__item palettor', id: 1},
        {href: 'https://nikitaden.github.io/palettor/', title: 'Palettor.', className: 'portfolio__projects__item palettor', id: 2},
    ],
    social: [
        {url: 'https://vk.com/nkt_dnsv', photo: vk, alt: 'vk', id: 1},
        {url: 'https://www.facebook.com/profile.php?id=100004291969423', photo: fb, alt: 'facebook', id: 2},
        {url: 'mailto:nikita.denisov.1991@gmail.com', photo: gmail, alt: 'gmail', id: 3},
        {url: 'https://t.me/NktDenisov', photo: telegram, alt: 'telegram', id: 4},
        {url: 'https://github.com/NikitaDen', photo: github, alt: 'github', id: 5},
    ],
    ru: {
        fullName: 'Никита Денисов',
        city: '\'Минск\'',
        info: [
            {head: '\'О себе\':', text: '\'Целеустремленный и дисциплинированный. ' +
            'Мотивирован для карьерного роста и совершенствования навыков программирования. ' +
            'Программирование дает прекрасную возможность сделать рабочую жизнь интересной и оцененной по достоинству,' +
            ' поэтому у меня достаточно мотивации, чтобы стать хорошим программистом.\' ,', id: 1},
            {head: '\'Образование\':', text: '\'Магистр (БНТУ, кафедра "Стандартизация, метрология и информационные системы")\' ,', id: 2},
            {head: '\'Языки\':', text: '\'Английский, B1-B2\' ,', id: 3},
            {head: '\'Опыт\':', text: 'null', id: 4},
        ],
    },
    en: {
        fullName: 'Nikita Denisov',
        city: '\'Minsk\'',
        info: [
            {head: 'Objective:', text: '\'Purposeful and disciplined. ' +
                    'Motivated for career growth and improving programming skills. ' +
                    'Programming gives a great opportunity to make work-life interesting and valued, ' +
                    'so I have enough motivation to become a good programmer.\'', id: 1},
            {head: 'Education:', text: '\'Master (BNTU, "Standartization, metrology and information systems")\' ,', id: 2},
            {head: 'Languages:', text: '\'English, B1-B2\' ,', id: 3},
            {head: 'Experience:', text: 'null', id: 4},
        ],
    }
};

const mainReducer = (state = initialState, action) => {
    return state;
};

export default mainReducer;

