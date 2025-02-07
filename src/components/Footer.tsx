import SocialMedia from './SocialMedia';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-8 mt-12 text-center transition-colors">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        <h2 className="text-2xl font-bold">Matheus Barros</h2>
        <SocialMedia />
        <p className="text-gray-600 dark:text-gray-400 text-sm mt-6">© {new Date().getFullYear()} All rights reserved</p>
      </div>
    </footer>
  );
}
