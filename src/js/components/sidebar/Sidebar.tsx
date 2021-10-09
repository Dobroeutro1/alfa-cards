import React from 'react'
import { SidebarProps } from './interfaces'
import { actions } from './index'
import { getRandomId } from '../../../utils'

export class Sidebar extends React.PureComponent<SidebarProps, never> {
  addDog(): void {
    const id = getRandomId(1, 671)
    this.props.dispatch(actions.getCard(id))
  }

  changeFilter(): void {
    this.props.dispatch(actions.changeFilterState(!this.props.filter))
  }

  render(): React.ReactNode {
    return (
      <div className="sidebar">
        <div className="sidebar__filter">
          <h5 className="filter__title">Отфильтровать карточки</h5>
          <input className="filter-input" id="checkbox" type="checkbox" />
          <label onClick={() => this.changeFilter()} className="filter-label" htmlFor="checkbox" />
        </div>

        <button className="sidebar__btn" onClick={() => this.addDog()}>
          {this.props.loading ? "Загружаю..." :'Добавить карточку'}
        </button>
      </div>
    )
  }
}
