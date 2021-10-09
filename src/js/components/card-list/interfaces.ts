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
  id: number
  image: string
  liked: boolean
  onChangeLikeCard: (card: Card) => void
  onDeleteCard: (card: Card) => void
}

export interface Card {
  id: number
  image: string
  liked: boolean
}
