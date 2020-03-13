import React from "react";


const MainInfo = (props) => {
    const toggleLang = (componentRu, componentEn) => {
        return props.langRU ? componentRu : componentEn;
    };

    const setInfo = (arrRu, arrEn) => {
        return props.langRU ? arrRu.map(item => {
                return <div key={item.id} className='main-info__item'>
                    <h3>{item.head}</h3>
                    <p>{item.text}</p>
                </div>
            }) :
            arrEn.map(item => {
                return <div key={item.id} className='main-info__item'>
                    <h3>{item.head}</h3>
                    <p>{item.text}</p>
                </div>
            });
    };

    return (
        <div className='main-info'>
            <div className='main-info__item'>
                {toggleLang(<h3>Технологии</h3>, <h3>Technologies</h3>)}
                <div className={props.darkMode ? 'technologies technologies--dark' : 'technologies'}>
                    {props.technologies.map(item => <img key={item.id} src={item.photo} alt={item.alt}
                                                         className={props.darkMode ? 'technology technology--dark' : 'technology'}/>)}
                </div>
            </div>

            {setInfo(props.ru.info, props.en.info)}
        </div>
    )
};

export default MainInfo;