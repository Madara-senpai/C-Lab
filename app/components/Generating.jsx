import { loading } from '../../public/assets'
import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const Generating = ({className}) => {

  const t = useTranslations('hero');

  return (
    <div className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${className || ""} text-base`}>
        <Image src={loading} alt="loading" width={30} height={30} className="mr-4" />
        {t('generating')}
    </div>
  )
}

export default Generating