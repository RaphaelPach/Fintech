import React from "react";


function UseFetch<T>(url: RequestInfo | URL, options?: RequestInit) {
const [data, setData] = React.useState<T | null>(null);
const [loading, setLoading] = React.useState(false);
const [error, setError] = React.useState<string | null>(null);

const optionsRef = React.useRef(options);
optionsRef.current = options;

React.useEffect(() => {
  const controller = new AbortController();
  const {signal} = controller;
  
  const fetchData = async () => {
    setLoading(true);
    setData(null);  
    try{
        const response = await fetch(url, {
          signal,
          ...optionsRef.current,
        });
        if(!response.ok) throw new Error(`Error: ${response.statusText}`);
        const json = await response.json();
        if(!signal.aborted) setData(json);
        console.log(response);
        
        } catch (error) {
          if(!signal.aborted && error instanceof Error) setError(error.message);
        
        } finally {
          if(!signal.aborted)
          setLoading(false);
        }
    };
    fetchData();   
}, [url]); //toda vez que a url mudar eu quero que ocorra alguma coisa. Se eu deixar o array vazio, ele só vai executar uma vez

return { data, loading, error};
}

export default UseFetch;