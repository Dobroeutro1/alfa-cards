import { IProps } from '../../../interfaces'

export interface CardListStorage {
  filter: boolean
  cardList: Card[]
}

export interface CardListProps extends IProps {
  filter: boolean
  cardList: Card[]
}

export interface CardListState extends IProps {
  cardList: Card[]
}

export interface CardProps {
  url: string
  id: number
  liked: boolean
  onChangeLikeCard: (card: Card) => void
  onDeleteCard: (card: Card) => void
}

export interface Card {
  url: string
  id: number
  liked: boolean
}
