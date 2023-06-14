import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'
import { Inter, Noto_Sans_Buginese } from 'next/font/google'
import { Container } from '@/components/bootstrap';
import NavBar from './NavBar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nexjs 13.4 Image Gallery',
  description: 'Tutorial by Coding with Flow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <Container>
          {children}
        </Container>
      </body>
    </html>
  )
}
