import React from 'react';
import Whatsapp from "../../Image/icons/whatsapp.png";
import Call from "../../Image/icons/call.png";
import Instagram from "../../Image/icons/instagram.png";
import Youtube from "../../Image/icons/youtube.png";
import Facebook from "../../Image/icons/facebook.png";
import Gmail from "../../Image/icons/gmail.png";

const links = [
  { name: 'Home', href: '/' },
  { name: 'Career', href: '/Career' },
  { name: 'Courses', href: '/Courses' },
  { name: 'Faculty', href: '/Faculty' },
  { name: 'Gallery', href: '/Gallery' },
  { name: 'Contact', href: '/Contact' },
];

const socialLinks =[
  {icon: Instagram , url :"https://www.instagram.com/shree_ji_tuition?igsh=MXg3dTc4Y25ic3puYg=="},
  {icon: Youtube , url :"https://youtube.com/@shreejituition?si=bjZGahw-d9NyPSXu"},
  {icon: Facebook , url :"https://www.facebook.com/share/15SjB8bsJ1/?mibextid=qi2Omg"},
  {icon: Whatsapp , url :"https://api.whatsapp.com/send?phone=918009657788"},
  {icon: Call , url :"tel:8009657788"},
  {icon: Gmail , url :"https://mail.google.com/mail/u/0/?view=cm&fs=1&to=shreejihometution@gmail.com"},
]
export const FooterLinks = () => {
  return (<>
    <nav className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-center gap-6 md:gap-8">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="text-gray-300 hover:text-yellow-400 transition-colors"
        >
          {link.name}
        </a>
      ))}
    </nav>
    <nav className="flex justify-between gap-7 mt-3 sm:w-[90%] md:w-[90%]">
      {socialLinks.map((item) => (
        <a
          key={item.url}
          href={item.url}
          // target='blank'
          className="text-gray-300 flex justify-center   hover:text-yellow-400 transition-colors"
        >
         <img src={item?.icon} style={{width : "40px"}} />
        </a>
      ))}
    </nav>
  </>);
};