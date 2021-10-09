import { IAction } from '../../../interfaces'
import { Card } from './interfaces'

export class Actions {
  readonly CHANGE_LIKE_CARD = 'CHANGE_LIKE_CARD'
  readonly DELETE_CARD = 'DELETE_CARD'

  onChangeLikeCard = (card: Card): IAction => ({ type: this.CHANGE_LIKE_CARD, payload: card })
  onDeleteCard = (card: Card): IAction => ({ type: this.DELETE_CARD, payload: card })
}
