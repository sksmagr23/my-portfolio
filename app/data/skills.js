export const skillsData = [
  'HTML',
  'CSS',
  'Javascript',
  'Typescript',
  'Python',
  'Go',
  'React',
  'Next JS',
  'Tailwind',
  'Node JS',
  'Express',
  'MongoDB',
  'MySQL',
  'Firebase',
  'Django',
  'Git',
  'C++',
  'Ubuntu',
  'Linux',
  'Docker',
  'Markdown',
  'Bash',
];

export const skillsImage = (skill) => {
  const skillMapping = {
    'html': 'html',
    'css': 'css',
    'javascript': 'js',
    'typescript': 'ts',
    'python': 'python',
    'go': 'go',
    'react': 'react',
    'next js': 'nextjs',
    'tailwind': 'tailwindcss',
    'node js': 'nodejs',
    'express': 'express',
    'mongodb': 'mongodb',
    'mysql': 'mysql',
    'firebase': 'firebase',
    'django': 'django',
    'git': 'git',
    'c++': 'cpp',
    'ubuntu': 'ubuntu',
    'linux': 'linux',
    'docker': 'docker',
    'markdown': 'markdown',
    'bash': 'bash',
  };

  const skillID = skill.toLowerCase();
  const iconId = skillMapping[skillID] || skillID;
  
  return {
    src: `https://skillicons.dev/icons?i=${iconId}`,
    width: 48,
    height: 48
  };
}
