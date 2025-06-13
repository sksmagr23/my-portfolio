export const skillsData = [
  'HTML',
  'CSS',
  'Javascript',
  'Typescript',
  'Go',
  'React',
  'Next JS',
  'Tailwind',
  'Node JS',
  'Express',
  'MongoDB',
  'Firebase',
  'Git',
  'C++',
  'Ubuntu',
  'Linux'
];

export const skillsImage = (skill) => {
  const skillMapping = {
    'html': 'html',
    'css': 'css',
    'javascript': 'js',
    'typescript': 'ts',
    'go': 'go',
    'react': 'react',
    'next js': 'nextjs',
    'tailwind': 'tailwindcss',
    'node js': 'nodejs',
    'express': 'express',
    'mongodb': 'mongodb',
    'firebase': 'firebase',
    'git': 'git',
    'c++': 'cpp',
    'ubuntu': 'ubuntu',
    'linux': 'linux',
  };

  const skillID = skill.toLowerCase();
  const iconId = skillMapping[skillID] || skillID;
  
  return {
    src: `https://skillicons.dev/icons?i=${iconId}`,
    width: 48,
    height: 48
  };
}
