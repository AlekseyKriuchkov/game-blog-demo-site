'use client'

import React, {useEffect, useState} from 'react';
import {localStorageGet, LocalStorageKeys, localStorageSet} from "@/utils/local-storage";
import {Modal} from "@/components/modal/modal";
import {ConfirmAgeModalContent} from "@/components/confirm-age-modal-content/confirm-age-modal-content";
import {useRouter} from "next/navigation";
import {useAgeConfirmation} from "@/shared/contexts/age-confirm-provider";

export const ConfirmAgeModal = () => {
  const [isShowModal, setIsShowModal] = useState(false)
  const { setIsAgeConfirmed } = useAgeConfirmation()
  const router = useRouter()

  useEffect(() => {
    const confirmAge = localStorageGet(LocalStorageKeys.IS_ADULT)
    confirmAge === 'false' && router.push('/privacy-policy')
    if (!confirmAge) {
      setIsShowModal(true)
    }
  }, [])

  const handleConfirmAgeModal = (isAdult: boolean) => {
    !isAdult && router.push('/privacy-policy')
    setIsAgeConfirmed(isAdult)
    localStorageSet(LocalStorageKeys.IS_ADULT, JSON.stringify(isAdult))
    setIsShowModal(false)
  }

  return (
    <>
      {isShowModal &&
          <Modal>
              <ConfirmAgeModalContent confirmAge={handleConfirmAgeModal}/>
          </Modal>
      }
    </>
  );
};
