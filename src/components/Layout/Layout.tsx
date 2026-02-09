import React from 'react'
import Header from '../../components/Header/Header'
import ExcellentIcon from '../../assets/img/icons/Excellent-header-icon.png'
import ExcellentTitle from '../../assets/img/icons/Excellent-title.svg'

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({children}: LayoutProps) {
  return (
    <div className="page">
      <div className="page_logo">
        <img src={ExcellentIcon} width={32} height={32} alt='Cube icon'/>
        <img src={ExcellentTitle} alt='Excellent'/>
      </div>
      <div className="page_content">
        <Header/>
        <main className='main'>
          {children}
        </main>
      </div>
    </div>
  )
}
