//import { Inter } from 'next/font/google'
import './globals.css'

//const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'QuizFlY',
  description: 'Plataforma de preparacion para el examen de ingreso a la Uni',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <h3>layout</h3>
        {children}
      </body>
    </html>
  )
}
