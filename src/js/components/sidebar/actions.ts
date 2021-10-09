import { IAction, IActionAsync } from '../../../interfaces'
import { api } from '../../Api'
import { RickAndMortyResponse } from '../../Api/interfaces'
import { Card } from '../card-list/interfaces'
import { getId } from '../../../utils'

export class Actions {
  readonly GET_CARD = 'GET_CARD'
  readonly GET_CARD_OK = 'GET_CARD_OK'
  readonly GET_CARD_ERROR = 'GET_CARD_ERROR'

  readonly CHANGE_FILTER_STATE = 'CHANGE_FILTER_STATE'

  changeFilterState = (filter: boolean): IAction => ({ type: this.CHANGE_FILTER_STATE, payload: filter })

  getCard = (id: number): IActionAsync => async (dispatch) => {
    const convert = (card: RickAndMortyResponse): Card => ({ image: card.image, liked: false, id: card.id })
    dispatch({ type: this.GET_CARD })
    try {
      dispatch({ type: this.GET_CARD_OK, payload: convert(await api.getRickAndMorty(id)) })
    } catch (error) {
      dispatch({ type: this.GET_CARD_ERROR, payload: error })
    }
  }
}
