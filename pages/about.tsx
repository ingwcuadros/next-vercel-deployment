import styles from '../components/layouts/MainLayout.module.css'
import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'
import { DarkLayout } from '../components/layouts/DarkLayout'
import { ReactNode } from 'react';

export default function AboutPage() {
  return (
    <>
        <h1>About page</h1>
        <h2 className={'title'}>
          Ir a <Link href="/">Home</Link>
        </h2>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/about.jsx</code>
        </p>
    </>
  )
}

AboutPage.getLayout = function getLayout(page: ReactNode) {
  return(
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}
