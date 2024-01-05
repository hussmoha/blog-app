
import SideBar from './components/SideBar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My blog',
}

export default function RootLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <SideBar />
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
}
