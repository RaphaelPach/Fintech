import React from "react";
import UseFetch from "../Hooks/UseFetch";
import { useState } from "react";

type Isales = {
  id: string;
  nome: string;
  preco: number;
  status:"pago" | "processando" | "falha" ;
  pagamento: "boleto" | "pix" | "cartao";
  data: string;
  parcelas: number | null;
}

type IDataContext = {
  loading: boolean;
  error: string | null;
  data: Isales[] | null;
  inicio: string;
  final: string;
  setInicial: React.Dispatch<React.SetStateAction<string>>;
  setFinal: React.Dispatch<React.SetStateAction<string>>;
}

const DataContext = React.createContext<IDataContext | null>(null);

export const useData = () => {
  const context = React.useContext(DataContext);
  if(!context) throw new Error("useData must be used within a DataContextProvider");
  return context;
};

function getDate (n: number) {
  const date = new Date();
  date.setDate(date.getDate() - n);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
}


export const DataContextProvider = ({children}: React.PropsWithChildren) => {
  const [inicio, setInicial] = useState(getDate(30));
 const [final, setFinal] = useState(getDate(0)); 
  
  const { data, loading, error }= UseFetch<Isales[]>(
    'https://data.origamid.dev/vendas/?inicio=${inicio}&fim=${final}'
    );
  
  return (
   <DataContext.Provider
    value={{
    data,
    loading,
    error,
    inicio,
    final,
    setInicial,
    setFinal
    
    }}>
    {children}
    </DataContext.Provider>
  )
}