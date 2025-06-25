import { FaReact, FaNodeJs, FaDatabase, FaDocker, FaAngular } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiDjango, SiPostgresql, SiAndroid } from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';
import { AiOutlineDotNet } from 'react-icons/ai';

const skills = [
  { name: 'C# .NET', icon: <AiOutlineDotNet className='text-black dark:text-white' /> },
  { name: 'React.js', icon: <FaReact className='text-black dark:text-white' /> },
  { name: 'Angular', icon: <FaAngular className='text-black dark:text-white' /> },
  { name: 'SQL', icon: <FaDatabase className='text-black dark:text-white' /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className='text-black dark:text-white' /> },
  { name: 'Azure', icon: <VscAzure className='text-black dark:text-white' /> },
  { name: 'Docker', icon: <FaDocker className='text-black dark:text-white' /> },
  { name: 'Next.js', icon: <SiNextdotjs className='text-black dark:text-white' /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className='text-black dark:text-white' /> },
  { name: 'Django', icon: <SiDjango className='text-black dark:text-white' /> },
  { name: 'Android', icon: <SiAndroid className='text-black dark:text-white' /> },
  { name: 'Node.js', icon: <FaNodeJs className='text-black dark:text-white' /> },
];

export default function SkillsSection() {
  return (
    <section className='py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800'>
      <div className='max-w-6xl mx-auto px-8'>
        <h2 className='text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-12 tracking-tight'>Skills</h2>
        <div className='grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-8 justify-center'>
          {skills.map((skill) => (
            <div key={skill.name} className='group relative flex flex-col items-center bg-white dark:bg-gray-700 p-4 rounded-lg transition-transform'>
              <div className='text-5xl mb-2'>{skill.icon}</div>
              <span className='text-gray-700 dark:text-white text-lg font-medium'>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
