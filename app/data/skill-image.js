import canva from '../../app/assets/svg/skills/canva.svg';
import cplusplus from '../../app/assets/svg/skills/cplusplus.svg';
import css from '../../app/assets/svg/skills/css.svg';
import firebase from '../../app/assets/svg/skills/firebase.svg';
import git from '../../app/assets/svg/skills/git.svg';
import go from '../../app/assets/svg/skills/go.svg';
import html from '../../app/assets/svg/skills/html.svg';
import javascript from '../../app/assets/svg/skills/javascript.svg';
import mongoDB from '../../app/assets/svg/skills/mongoDB.svg';
import nextJS from '../../app/assets/svg/skills/nextjs.jpeg';
import react from '../../app/assets/svg/skills/react.svg';
import tailwind from '../../app/assets/svg/skills/tailwind.svg';
import typescript from '../../app/assets/svg/skills/typescript.svg';
import linux from '../../app/assets/svg/skills/linux.svg'
import nodejs from '../../app/assets/svg/skills/nodejs.svg'
import ubuntu from '../../app/assets/svg/skills/ubunutu.jpeg'
import express from '../../app/assets/svg/skills/express.svg'

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html':
      return html;
    case 'node js':
      return nodejs;  
    case 'ubuntu':
      return ubuntu;
    case 'css':
      return css;
    case 'express':
      return express;
    case 'javascript':
      return javascript;
    case 'next js':
      return nextJS;
    case 'react':
      return react;
    case 'typescript':
      return typescript;
    case 'mongodb':
      return mongoDB;
    case 'tailwind':
      return tailwind;
    case 'c':
      return c;
    case 'c++':
      return cplusplus;
    case 'go':
      return go;
    case 'python':
      return python;
    case 'aws':
      return aws;
    case 'django':
      return django;
    case 'firebase':
      return firebase;
    case 'git':
      return git;
    case 'numpy':
      return numpy;
    case 'opencv':
      return opencv;
    case 'figma':
      return figma;
    case 'canva':
      return canva;
    case 'kubernetes':
      return kubernetes;
    case 'linux':
      return linux;
    default:
      break;
  }
}
