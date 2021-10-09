import { connect } from 'react-redux'
import { Storage } from './interfaces'
import { CardList, CardListProps } from './js/components/card-list'
import { Sidebar, SidebarProps } from './js/components/sidebar'

export const SidebarContainer = connect(sidebar)(Sidebar),
  DogsContainer = connect(cardList)(CardList)

function sidebar(state: Storage): SidebarProps {
  return { ...state.sidebar }
}

function cardList(state: Storage): CardListProps {
  return { ...state.cardList, filter: state.sidebar.filter }
}
