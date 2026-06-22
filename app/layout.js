import './globals.css';

export const metadata = {
  title: 'SSM Solutions - Internet & Téléphonie',
  description: 'Résoudre. Connecter. Économiser.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
