import Head from 'next/head';
import Header from '../components/Header';
import TopBar from '../components/TopBar'; // Importa el componente TopBar
import Feed from '@/components/Feed';
import UploadModal from '@/components/UploadModal';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <>
      <div className='bg-gray-50 min-h-screen'>
        <Head>
          <title>Agrolivery</title>
          {/* ... tus metadatos ... */}
        </Head>
        {/* Header */}
        <Header />
        {/* Feed */}
        <Feed />
        {/* Modal */}
        <UploadModal />
        {/* Componente TopBar */}
        <TopBar />
        {/* Componente Footer */}
        <Footer />
      </div>
    </>
  );
}
