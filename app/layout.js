import './globals.css';
import BarNav from './components/BarNav';
import Footer from './components/Footer';

export const metadata = {
  title: 'Farah Allouche — Portfolio',
  description: 'Développeuse Full Stack & Cybersécurité',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" data-theme="dark">
      <body>
        <BarNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}