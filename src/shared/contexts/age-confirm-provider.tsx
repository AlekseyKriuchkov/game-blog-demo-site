'use client'

import {createContext, useState, useContext, ReactNode, FC} from 'react';

type AgeConfirmContextType = {
  isAgeConfirmed: boolean;
  setIsAgeConfirmed: (value: boolean) => void;
}

type Props = {
  children: ReactNode
}

const AgeConfirmContext = createContext<AgeConfirmContextType | undefined>(undefined)

export const AgeConfirmProvider: FC<Props> = ({ children }) => {
  const [isAgeConfirmed, setIsAgeConfirmed] = useState(false);

  return (
    <AgeConfirmContext.Provider value={{ isAgeConfirmed, setIsAgeConfirmed }}>
      {children}
    </AgeConfirmContext.Provider>
  );
};
export const useAgeConfirmation = (): AgeConfirmContextType => {
  const context = useContext(AgeConfirmContext);

  if (!context) {
    throw new Error("useAgeConfirmation must be used within an AgeConfirmationProvider");
  }

  return context;
};