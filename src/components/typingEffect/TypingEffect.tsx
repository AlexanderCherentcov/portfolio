import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import classes from './typingEffect.module.scss';

export const TypingEffect: React.FC = () => {
  return (
    <div className={classes.typing_effect}>
      <Typewriter
        words={[
          `Я решил полностью сменить сферу деятельности и перейти в IT, выбрав профессию веб-разработчика. Меня зовут Александр, и я рад приветствовать вас. Я целеустремленный, стремящийся к созданию современных и функциональных веб-приложений. В настоящее время я продолжаю обучение на курсах веб-разработки от Skillbox, где осваиваю такие технологии, как HTML, CSS, JavaScript, React и Node.js. На этом сайте вы найдете примеры моих работ, которые демонстрируют мои навыки и подход к созданию качественных веб-приложений.
          
          Спасибо за внимание и приятного просмотра моего портфолио!`,
        ]}
        loop={1}
        cursor
        cursorStyle="|"
        typeSpeed={80}
        delaySpeed={1000}
      />
    </div>
  );
};
