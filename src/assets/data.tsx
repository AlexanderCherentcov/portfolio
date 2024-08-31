import React from 'react';
import { LinkProps } from '@/components/links/Link';
import { ProjectProps } from '@/components/linksProject/LinkProject';
import { TelegramIcon, WhatsappIcon, MailIcon } from '@/assets/img/icon/Icon';
import Blanchard from '@/assets/img/Project/Blanchard.jpg';
import Euclid from '@/assets/img/Project/Euclid.jpg';
import HighPass from '@/assets/img/Project/HighPass.jpg';
import Logotip from '@/assets/img/Project/Logotip.jpg';
import LoungeHouse from '@/assets/img/Project/LoungeHouse.jpg';
import ToDo from '@/assets/img/Project/ToDo.jpg';
import Crm from '@/assets/img/Project/CRM.jpg';
import Portfolio from '@/assets/img/Project/Portfolio.jpg';

export const linksHeader: LinkProps[] = [
  { name: 'Обо мне', href: '#about', id: 'About' },
  { name: 'Мои работы', href: '#projects', id: 'Projects' },
  { name: 'Контакты', href: '#contact', id: 'Contact' },
  {
    name: 'GitHub',
    href: 'https://github.com/AlexanderCherentcov',
    id: 'GitHub',
    target: 'blank',
  },
];
export const linksContacts: LinkProps[] = [
  {
    name: <MailIcon />,
    href: 'mailto:asmosurgxx@gmail.com',
    id: 'e-mail',
    type: 'isSvg',
    target: 'blank',
  },
  {
    name: <TelegramIcon />,
    href: 'https://t.me/asmoSurgxx',
    id: 'telegram',
    type: 'isSvg',
    target: 'blank',
  },
  {
    name: <WhatsappIcon />,
    href: 'https://wa.me/79822292884',
    id: 'whatsapp',
    type: 'isSvg',
    target: 'blank',
  },
];

export const projectsData: ProjectProps[] = [
  {
    title: 'Euclid',
    description: 'Первая работа во время обучения (HTML, CSS, JS)',
    link: 'https://alexandercherentcov.github.io/Euclid/',
    img: Euclid,
  },
  {
    title: 'Blanchard',
    description:
      'Лендинг итоговая работа по верстки, одна из первых больших работ (HTML, CSS, JS, PHP).',
    link: 'https://alexandercherentcov.github.io/Blanchard/',
    img: Blanchard,
  },
  {
    title: 'HighPass',
    description: 'Лендинг (HTML, JS)',
    link: 'https://alexandercherentcov.github.io/HighPass/',
    img: HighPass,
  },
  {
    title: 'Nstdesign',
    description:
      'Это простой лендинг, первый боевой проект. Этот сайт предназначен для заказа логотипов и позволяет пользователям отправлять запросы или обратную связь непосредственно через сайт, запрос приходит на почту. Это мой первый опыт в создании и развертывании реального сайта. (HTML, JS, немного PHP)',
    link: 'https://alexandercherentcov.github.io/nstdesign/',
    img: Logotip,
  },
  {
    title: 'LoungeHouse',
    description:
      'Это многостраничный сайт, посвященный роскошному отдыху на природе. Платформа позволяет пользователям исследовать и бронировать уникальные глэмпинг-проживания в различных домах, а также покупать эксклюзивные сувениры, которые отражают атмосферу их отдыха.(HTML, JS, SCSS, PHP) ',
    link: 'https://alexandercherentcov.github.io/loungehouse/',
    img: LoungeHouse,
  },
  {
    title: 'ToDo',
    description:
      'ToDo — простое и удобное приложение для управления задачами. Оно позволяет пользователям добавлять, удалять и отмечать задачи как выполненные. Приложение поддерживает создание нескольких пользователей, позволяя каждому пользователю управлять собственным списком задач. (HTML, CSS, JS)',
    link: 'https://github.com/AlexanderCherentcov/Affairs.git',
    img: ToDo,
  },
  {
    title: 'CRM',
    description:
      'Это CRM-приложение позволяет управлять клиентами и их контактной информацией. Оно предоставляет возможности для добавления, редактирования и удаления клиентов, а также поиска по списку клиентов. (HTML, CSS, JS)',
    link: 'https://github.com/AlexanderCherentcov/CRM.git',
    img: Crm,
  },
  {
    title: 'Portfolio',
    description:
      'Этот сайт представляет мой первый опыт работы с React и Webpack, демонстрируя мой путь в современную веб-разработку. Сайт предназначен для того, чтобы показать мои навыки, проекты и достижения. (React, SCSS, JS)',
    link: 'https://github.com/AlexanderCherentcov/CRM.git',
    img: Portfolio,
  },
];
