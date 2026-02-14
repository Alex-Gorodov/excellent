import {ReactComponent as Products} from "../../assets/img/icons/Products-icon.svg"
import {ReactComponent as Settings} from "../../assets/img/icons/Settings-icon.svg"
import {ReactComponent as Clients} from "../../assets/img/icons/Clients-icon.svg"
import {ReactComponent as Home} from "../../assets/img/icons/Homepage-icon.svg"
import {ReactComponent as Orders} from "../../assets/img/icons/Orders-icon.svg"
import {ReactComponent as Stats} from "../../assets/img/icons/Stats-icon.svg"
import { users } from '../../assets/mocks/users'
import { NavLink } from 'react-router-dom'
import { AppRoute } from '../../const'

export default function Header() {

  return (
    <header>
      <nav className='navigation'>
        <ul className='navigation__list'>
          <li className='navigation__item'>
            <NavLink
              className={({ isActive }) =>
                `navigation__link ${isActive ? 'navigation__link--active' : ''}`
              }
              to={AppRoute.Profile}
              aria-label='Profile'
            >
              <img className='navigation__icon navigation__icon--avatar' src={users[0].avatar} alt={users[0].name}/>
            </NavLink>
          </li>
          <li className='navigation__item'>
            <NavLink
              className={({ isActive }) =>
                `navigation__link ${isActive ? 'navigation__link--active' : ''}`
              }
              to={AppRoute.Root}
              end
              aria-label='Home page'
            >
              <Home className='navigation__icon'/>
            </NavLink>
          </li>
          <li className='navigation__item'>
            <NavLink
              className={({ isActive }) =>
                `navigation__link ${isActive ? 'navigation__link--active' : ''}`
              }
              to={AppRoute.Orders}
              aria-label='Orders'
            >
              <Orders className='navigation__icon'/>
            </NavLink>
          </li>
          <li className='navigation__item'>
            <NavLink
              className={({ isActive }) =>
                `navigation__link ${isActive ? 'navigation__link--active' : ''}`
              }
              to={AppRoute.Products}
              aria-label='Products'
            >
              <Products className='navigation__icon'/>
            </NavLink>
          </li>
          <li className='navigation__item'>
            <NavLink
              className={({ isActive }) =>
                `navigation__link ${isActive ? 'navigation__link--active' : ''}`
              }
              to={AppRoute.Clients}
              aria-label='Clients'
            >
              <Clients className='navigation__icon'/>
            </NavLink>
          </li>
          <li className='navigation__item'>
            <NavLink
              className={({ isActive }) =>
                `navigation__link ${isActive ? 'navigation__link--active' : ''}`
              }
              to={AppRoute.Stats}
              aria-label='Statistics'
            >
              <Stats className='navigation__icon'/>
            </NavLink>
          </li>
          <li className='navigation__item'>
            <NavLink
              className={({ isActive }) =>
                `navigation__link ${isActive ? 'navigation__link--active' : ''}`
              }
              to={AppRoute.Settings}
              aria-label='Settings'
            >
              <Settings className='navigation__icon'/>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
