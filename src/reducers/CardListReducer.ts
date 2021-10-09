import { IAction } from '../interfaces'
import { reducer as cardListReducer, CardListStorage } from '../js/components/card-list'
import { Card } from '../js/components/card-list/interfaces'
import { actions as actionsSidebar } from '../js/components/sidebar'

function addCard(state: CardListStorage, card: Card): CardListStorage {
  const modifyCardList = [...state.cardList]
  modifyCardList.push(card)
  return { ...state, cardList: modifyCardList }
}

export function reducer(state: CardListStorage, action: IAction): CardListStorage {
  switch (action.type) {
    case actionsSidebar.GET_DOGS_OK:
      return addCard(state, action.payload as Card)

    default:
      return cardListReducer(state, action)
  }
}
