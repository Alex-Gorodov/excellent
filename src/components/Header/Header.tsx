import { Link } from 'react-router-dom'
import { AppRoute } from '../../const'
import {ReactComponent as Home} from "../../assets/img/icons/Homepage-icon.svg"
import {ReactComponent as Orders} from "../../assets/img/icons/Orders-icon.svg"
import {ReactComponent as Products} from "../../assets/img/icons/Products-icon.svg"
import {ReactComponent as Clients} from "../../assets/img/icons/Clients-icon.svg"
import {ReactComponent as Stats} from "../../assets/img/icons/Stats-icon.svg"
import {ReactComponent as Settings} from "../../assets/img/icons/Settings-icon.svg"
import { users } from '../../assets/mocks/users'

export default function Header() {
  return (
    <header>
      <nav className='navigation'>
        <ul className='navigation_list'>
          <li className='navigation_item navigation_item--avatar'>
            <Link className='navigation_link' to={AppRoute.Profile} aria-label='Profile'>
              <img src={users[0].avatar} alt={users[0].name} width={40} height={40}/>
            </Link>
          </li>
          <li className='navigation_item'>
            <Link className='navigation_link' to={AppRoute.Root} aria-label='Home page'>
              <Home/>
            </Link>
          </li>
          <li className='navigation_item'>
            <Link className='navigation_link' to={AppRoute.Orders} aria-label='Orders'>
              <Orders/>
            </Link>
          </li>
          <li className='navigation_item'>
            <Link className='navigation_link' to={AppRoute.Products} aria-label='Products'>
              <Products/>
            </Link>
          </li>
          <li className='navigation_item'>
            <Link className='navigation_link' to={AppRoute.Clients} aria-label='Clients'>
              <Clients/>
            </Link>
          </li>
          <li className='navigation_item'>
            <Link className='navigation_link' to={AppRoute.Stats} aria-label='Statistics'>
              <Stats/>
            </Link>
          </li>
          <li className='navigation_item'>
            <Link className='navigation_link' to={AppRoute.Settings} aria-label='Settings'>
              <Settings/>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
