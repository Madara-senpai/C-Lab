import { companyLogos } from '../../constants'
import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const CompanyLogos = ({className}) => {

  const t = useTranslations('hero');

  return (
    <div className={className}>
    <h5 className='tagline mb-6 text-center text-n-1/50'>{t('ctitle')}</h5>
    <ul className='flex'>
        {companyLogos.map((logo, index) => (
            <li key={index} className='flex items-center justify-center flex-1 h-[8.5rem]'>
                <Image src={logo} alt={logo} width={134} height={28} />
            </li>
        ))}
    </ul>
    </div>
  )
}

export default CompanyLogos