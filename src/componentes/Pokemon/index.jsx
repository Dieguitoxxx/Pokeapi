import { useParams } from "react-router-dom"; 
import './style.css'

function Pokemon() {
 const { name } = useParams(); 
  return (
    <>
      {name}
    </>
  )
}

export default Pokemon