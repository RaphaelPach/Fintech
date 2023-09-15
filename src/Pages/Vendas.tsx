import VendaItem from '../Components/VendaItem';
import { useData } from '../Context/DataContext'

const Vendas = () => {
  const { data } = useData();
  
  if(data === null) return null;
  return (
    <div>
      <div>
        <ul>
          {data.map((venda) => (
            <li key={venda.id}>
              <VendaItem venda={venda} />
            </li>
          ))}
        </ul>
        

      </div>
    </div>
  )
}

export default Vendas