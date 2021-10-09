import { Action, Dispatch } from 'redux'
import { CardListStorage } from './js/components/card-list'
import { SidebarStorage } from './js/components/sidebar'

export interface Storage {
  sidebar: SidebarStorage
  cardList: CardListStorage
}

export interface IAction {
  type: string
  payload?: unknown
}

export interface IActionAsync {
  (dispatch: Dispatch<IAction>): void
}

export interface DispatchWithFn extends Dispatch<IAction> {
  <A extends Action>(action: IAction | IActionAsync): A
}

export interface IProps {
  dispatch?: DispatchWithFn
}
