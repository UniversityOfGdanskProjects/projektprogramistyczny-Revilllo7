import './styles/global.css';

export const metadata = {
  title: 'Landing Page',
  description: 'Landing page for a bike store and bike fans',
  icons: { icon: '/images/favicon.ico' },
  robots: 'index, follow, nosnippet',
  keywords: 'bike store, project, landing page, newsletter, bikes, biking, cycling, eco-friendly, durable, life-changing, comfortable, light weight',
  author: 'Revi',
  charset: 'UTF-8',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body>
        {children}
      </body>
    </html>
  );
}