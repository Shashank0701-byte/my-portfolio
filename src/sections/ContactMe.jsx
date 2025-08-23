import React from 'react'
import { ABOUT_ME } from '../utils/data';
import ContactInfoCard from '../components/ContactInfoCard';
import ContactForm from '../components/ContactForm';
import { IoMdMail } from 'react-icons/io';
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineWeb } from 'react-icons/md';

const ContactMe = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-8">
        <div className="w-full lg:w-[60vw] mx-auto text-center">
          <h4 className="section-title">Contact Me</h4>

          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mt-4 leading-6 max-w-2xl mx-auto">
            A versatile developer with hands-on expertise in modern 
            technologies, tools, and frameworks, dedicated to building 
            efficient, scalable, and user-centric solutions.
          </p>
        </div>
        
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16'>
          {/* Contact Information */}
          <div className="space-y-6">
            <h5 className='text-xl font-semibold text-gray-900 dark:text-white mb-6'>
              Get in Touch
            </h5>
            <ContactInfoCard icon={<IoMdMail />} text={ABOUT_ME.email} />
            <ContactInfoCard icon={<IoPhonePortraitOutline />} text={ABOUT_ME.phone} />
            <ContactInfoCard icon={<MdOutlineWeb />} text={ABOUT_ME.website} />
            
            {/* Additional Info */}
            <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <h6 className="font-semibold text-gray-900 dark:text-white mb-3">
                Let's work together
              </h6>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out if you'd like to collaborate or just want to say hello!
              </p>
            </div>
          </div>
        
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe