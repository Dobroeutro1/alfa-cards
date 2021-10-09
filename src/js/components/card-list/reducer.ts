import { Card, CardListStorage } from './interfaces'
import { IAction } from '../../../interfaces'
import { actions } from './index'

const initialState: CardListStorage = {
  cardList: [],
  filter: false
}

function onChangeLike(state: CardListStorage, card: Card): CardListStorage {
  const modifyCardList = state.cardList.map((cardEl) => {
    if (cardEl.id === card.id) {
      cardEl.liked = card.liked
      return cardEl
    }

    return cardEl
  })
  return { ...state, cardList: modifyCardList }
}

function onDeleteCard(state: CardListStorage, card: Card): CardListStorage {
  const modifyCardList = state.cardList.filter((cardEl) => cardEl.id !== card.id)
  return { ...state, cardList: modifyCardList }
}

export function reducer(state = initialState, action: IAction): CardListStorage {
  switch (action.type) {
    case actions.CHANGE_LIKE_CARD:
      return onChangeLike(state, action.payload as Card)
    case actions.DELETE_CARD:
      return onDeleteCard(state, action.payload as Card)

    default:
      return { ...state }
  }
}
