import Header from './Header.jsx';
import Footer from './Footer.jsx';
import PageTransition from './PageTransition.jsx';

export default function Layout({ children }) {
  return (
    <>
      <a className="skip-link" href="#main-content">Aller au contenu</a>
      <Header />
      <main id="main-content">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </>
  );
}
