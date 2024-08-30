import React from 'react';
import { TitleSection } from '../titleSection/TitleSection';
import classes from './projects.module.scss';
import { projectsData } from '../../assets/data'; // Импортируйте массив данных
import { LinkProject } from '../linksProject/LinkProject'; //
export default function Projects() {
  return (
    <section className={classes.projects} id="projects">
      <div className={classes.projects__content}>
        <TitleSection>Мои работы</TitleSection>
        <div className={classes.projects__grid}>
          {projectsData.map((project, index) => (
            <LinkProject
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
              img={project.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
