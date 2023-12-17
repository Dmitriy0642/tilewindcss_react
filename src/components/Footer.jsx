import React from 'react'
import styles from '../style'
import { footerLinks, socialMedia } from '../constants'
import { logo } from '../assets'

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY}`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img
            src={logo}
            alt="hooBanl"
            className="w-[266px] h-[72px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A new way make the payments easy , relible and secure
          </p>
        </div>
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((item) => (
            <div
              key={item.title}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4
                className={`font-poppins text-medium text-[18px] leading-[27px] text-white`}
              >
                {item.title}
              </h4>
              <ul className="list-none mt-4">
                {item.links.map((link, index) => (
                  <li
                    className={`font-poppins font-normal leading-[24px] text-[16px] text-dimWhite hover:text-secondary cursor-pointer 
                      index !== 
                    ${index !== item.links.length ? 'mb-4' : 'mb-0'} `}
                    key={link.name}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Footer
