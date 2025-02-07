import SocialMedia from './SocialMedia';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-8 mt-12 text-center">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        <h2 className="text-2xl font-bold">Matheus Barros</h2>
        <SocialMedia />
        <p className="text-gray-500 text-sm mt-6">© {new Date().getFullYear()} All rights reserved</p>
      </div>
    </footer>
  );
}
