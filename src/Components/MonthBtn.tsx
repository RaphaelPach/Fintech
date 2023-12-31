import { useData } from "../Context/DataContext"

function monthName (n: number) {
  const date = new Date();
  date.setMonth(date.getMonth() + n);
  return new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(date);
}

function formatDate (date: Date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
}


const MouthBtn = ({ n }: { n: number }) => {
  const { setInicio, setFinal } = useData();
  
const setMonth = (n: number) => {
  const date = new Date();
  date.setMonth(date.getMonth() + n);

  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  setInicio(formatDate(firstDay));
  setFinal(formatDate(lastDay));
}

  
  return (
    <button className="dateBtn" onClick={() => setMonth(n)}>
      {monthName(n)}
      </button>
  )
}

export default MouthBtn