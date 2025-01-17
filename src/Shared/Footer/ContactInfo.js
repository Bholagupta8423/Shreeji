import React from 'react';
import { Phone, Mail, Globe } from 'lucide-react';

export const ContactInfo = () => {
  return (
    <div className="space-y-4 text-gray-300">
      <h3 className="text-xl font-semibold text-white mb-6">Get In Touch</h3>
      <div className="flex items-center gap-3">
        <Phone className="w-5 h-5 text-yellow-400" />
        <a href='tel:8009657788'>
        <span>+918009657788</span>
        </a>
      </div>
      <div className="flex items-center pointer gap-3">
        <Mail className="w-5 h-5 text-yellow-400" />
        <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=shreejihometution@gmail.com" className="hover:text-yellow-400 pointer transition-colors">
          shreejihometuton@gmail.com
        </a>
      </div>
      <div className="flex items-center gap-3">
        <Globe className="w-5 h-5 text-yellow-400" />
        <a href="https://www.shreejituition.com" className="hover:text-yellow-400 transition-colors">
          www.shreejituition.com
        </a>
      </div>
    </div>
  );
};