import { SidebarStorage } from './interfaces'
import { IAction } from '../../../interfaces'
import { actions } from './index'

const initialState: SidebarStorage = {
  filter: false,
  loading: false
}

export function reducer(state = initialState, action: IAction): SidebarStorage {
  switch (action.type) {
    case actions.CHANGE_FILTER_STATE:
      return { ...state, filter: action.payload as boolean }
    case actions.GET_CARD:
      return { ...state, loading: true }
    case actions.GET_CARD_OK:
    case actions.GET_CARD_ERROR:
      return { ...state, loading: false }

    default:
      return { ...state }
  }
}
