import React from 'react'
import { CardListProps, Card as ICard, CardListState } from './interfaces'
import { Card } from './components/Card'

import { actions } from './index'

export class CardList extends React.PureComponent<CardListProps, CardListState> {
  readonly initialState: CardListState = {
    cardList: []
  }

  constructor(props: CardListProps) {
    super(props)
    this.state = { ...this.initialState }
  }

  componentDidMount(): void {
    this.setState({ cardList: this.props.cardList })
  }

  componentDidUpdate(prevProps: Readonly<CardListProps>): void {
    if (!prevProps.filter && this.props.filter) {
      this.setState({ cardList: this.filter() })
      return
    }

    if (prevProps.filter && !this.props.filter) {
      this.setState({ cardList: this.props.cardList })
      return
    }

    if (prevProps.cardList !== this.props.cardList && this.props.filter) {
      this.setState({ cardList: this.filter() })
      return
    }

    if (prevProps.cardList !== this.props.cardList && !this.props.filter) {
      this.setState({ cardList: this.props.cardList })
    }
  }

  filter(): ICard[] {
    return this.props.cardList.filter((card) => card.liked === true)
  }

  onChangeLikeCard = (card: ICard): void => {
    this.props.dispatch(actions.onChangeLikeCard(card))
  }

  onDeleteCard = (card: ICard): void => {
    this.props.dispatch(actions.onDeleteCard(card))
  }

  render(): React.ReactNode {
    console.log('cardList props', this.props)
    console.log('cardList state', this.state.cardList)
    if (this.props.cardList.length < 1) {
      return (
        <div className="card-list_no-content">
          <h2 className="card-list__title">Добавьте карточку :)</h2>
        </div>
      )
    }

    if (this.props.cardList.length > 0 && this.state.cardList.length < 1) {
      return (
        <div className="card-list_no-content">
          <h2 className="card-list__title">Лайкните понравившуюся карточку!</h2>
        </div>
      )
    }

    return (
      <div className="card-list">
        {this.state.cardList.map((card) => (
          <Card
            key={card.id}
            url={card.url}
            liked={card.liked}
            id={card.id}
            onChangeLikeCard={this.onChangeLikeCard}
            onDeleteCard={this.onDeleteCard}
          />
        ))}
      </div>
    )
  }
}
