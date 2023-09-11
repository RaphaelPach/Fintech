import DateInput from './DateInput'
import { useData } from '../Context/DataContext'

const DateRange = () => {  
 const {inicio, final, setInicial, setFinal} = useData();
  return (
    <form className='box flex' onSubmit={(e) => e.preventDefault}>
      <DateInput 
       label='Inicio'
       value={inicio}
       onChange={({ target }) => setInicial(target.value)}
      />
      <DateInput 
      label='Final'
      value={final}
      onChange={({ target }) => setFinal(target.value)}
       />
    </form>
  )
}

export default DateRange