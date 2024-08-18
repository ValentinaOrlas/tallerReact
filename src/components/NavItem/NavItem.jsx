import '../../styles/navItem.css'
import { Link } from "react-router-dom"

export const NavItem = ({item, to}) => {

  return (
    <div>
      
      <ul>
        <li className="li"><Link to={to}>{item}</Link></li>
      </ul>
      
    </div>
    
  )
}
