import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'
import { DarkLayout } from '../../components/layouts/DarkLayout'
import { ReactNode } from 'react'

export default function PricingPage() {
  return (
    <>
        <h1>Pricing</h1>
        <h2 className={'title'}>
          Ir a <Link href="/">Home</Link>
        </h2>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/pricing/pricing.jsx</code>
        </p>
    </>
  )
}

PricingPage.getLayout = function getLayout(page:ReactNode) {
  return(
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}
