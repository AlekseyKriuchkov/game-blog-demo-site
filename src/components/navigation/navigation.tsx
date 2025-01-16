'use client'

import React, {useEffect, useState} from 'react';
import style from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/assets/18.svg";
import BurgerMenu from "@/assets/burger-menu.svg";
import cn from 'classnames'
import {localStorageGet, LocalStorageKeys} from "@/utils/local-storage";
import {LinksEnum} from "@/constants/enum";
import {useAgeConfirmation} from "@/shared/contexts/age-confirm-provider";

export const Navigation = () => {
  const [disabledLinks, setDisabledLinks] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { isAgeConfirmed } = useAgeConfirmation()

  const links = [
    { href: LinksEnum.HOME, text: "HOME" },
    { href: LinksEnum.PRIVACY_POLICY, text: "PRIVACY" },
    { href: LinksEnum.TERMS_AND_CONDITIONS, text: "TERMS" },
    { href: LinksEnum.BLOGS, text: "BLOGS" },
  ]

  useEffect(() => {
    const confirmAge = localStorageGet(LocalStorageKeys.IS_ADULT)
    if(confirmAge) {
      setDisabledLinks(!confirmAge);
    }
  }, [isAgeConfirmed]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    setMenuIsOpen(false)
    if (disabledLinks) {
      e.preventDefault();
    }
  };

  const handleOpenMenu = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  return (
      <div className={style.wrapper}>
        <Image className={style.image} src='/images/header-image.png' alt='' width='80' height='80'/>
        <BurgerMenu onClick={handleOpenMenu} className={style.burger} />
        <div className={cn(style.navBlock, {[style.isOpenMenu]: menuIsOpen})}>
          {links.map((link, index) => (
            <nav key={index}>
              <Link
                onClick={handleLinkClick}
                className={cn(style.link, { [style.isOpenMenu]: menuIsOpen })}
                href={link.href}
              >
                {link.text}
              </Link>
            </nav>
          ))}
        </div>
        <Icon  className={style.image}/>
      </div>
  );
};
