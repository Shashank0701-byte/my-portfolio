import React from 'react'

const ContactInfoCard = ({ icon, text }) => {
  return (
    <div className='flex items-center gap-5 bg-orange-50 dark:bg-gray-800 rounded border-orange-100 dark:border-gray-700 px-4 py-3 mb-5'>
        <div className='w-10 h-10 text-white flex items-center justify-center bg-gradient-primary rounded-lg'>
            {icon}
        </div>
        <p className='text-secondary dark:text-gray-300 text-xs md:text-sm'>{text}</p>
    </div>
  )
}

export default ContactInfoCard