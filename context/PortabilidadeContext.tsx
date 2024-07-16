import React, { createContext, useState, ReactNode, useContext } from 'react';

interface PortabilidadeContextProps {
  ddd: string;
  numero: string;
  id: string;
  setDdd: (ddd: string) => void;
  setNumero: (numero: string) => void;
  setId: (id: string) => void;
}

const PortabilidadeContext = createContext<PortabilidadeContextProps | undefined>(undefined);

export const usePortabilidade = () => {
  const context = useContext(PortabilidadeContext);
  if (!context) {
    throw new Error('usePortabilidade must be used within a PortabilidadeProvider');
  }
  return context;
};

export const PortabilidadeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  let [ddd, setDdd] = useState('');
  let [numero, setNumero] = useState('');
  let [id, setId] = useState('');

  const idPadrao = '2027';

  if (!id) {
    setId(idPadrao)
  }

  return (
    <PortabilidadeContext.Provider value={{ ddd, numero, id, setDdd, setNumero, setId }}>
      {children}
    </PortabilidadeContext.Provider>
  );
};
