import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import Feed from '@/components/Feed'
import UploadModal from '@/components/UploadModal'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className='bg-gray-50 min-h-screen'>
      <Head>
        <title>Agrolivery</title>
        <meta name="description" content="E-commerce para conectar emprendedores y agricultores con clientes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Feed */}
      <Feed />
      {/* Modal */}
      <UploadModal />
      </div>
    </>
  )
}
