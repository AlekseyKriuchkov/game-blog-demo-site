'use client'

import React, {useEffect, useState} from 'react';
import {localStorageGet, LocalStorageKeys, localStorageSet} from "@/utils/local-storage";
import cn from 'classnames'
import style from './styles.module.scss'

export const CookieConsentBanner = () => {
  const [isShowBanner, setIsShowBanner] = useState(false)

  useEffect(() => {
    const confirmCookie = localStorageGet(LocalStorageKeys.CONFIRM_COOKIE)
    if (!confirmCookie || confirmCookie === 'false') {
      setIsShowBanner(true)
    }
  }, [])

  const handleAcceptCookies = (isAccept: boolean) => {
    localStorageSet(LocalStorageKeys.CONFIRM_COOKIE, JSON.stringify(isAccept))
    setIsShowBanner(false)
  }
  return (
    <>
      {
        isShowBanner &&
          <div className={style.wrapper}>
            <div className={style.bannerWrapper}>
                <div className={style.banner}>
                  <p>
                      Cookie settings
                      <br/>
                      <br/>
                      Cancel all For the purpose of providing services, as well as for statistical and advertising purposes, the site uses information stored on users' end devices (cookies). If you decide to save cookies in your browser, they will be stored on your original device. You can specify the conditions for storing cookies or accessing them in your browser.
                      <br/>
                      <br/>
                      Cookie settings are available on each page of our site, where the user can at any time view a list of other companies, use cookies on this site and change the settings for these files. Detailed information about how we use your personal data and your rights can be found in our Privacy Policy.</p>
                  <div className={style.buttonsWrapper}>
                      <button onClick={() => handleAcceptCookies(true)} className={style.button}>accept</button>
                      <button onClick={() => handleAcceptCookies(false)} className={cn(style.button, {[style.rejectButton]: true})}>reject</button>
                  </div>
                </div>
            </div>
          </div>
      }

    </>
  );
};
