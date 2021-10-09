import React from 'react'
import { CardProps } from '../interfaces'

export class Card extends React.PureComponent<CardProps, never> {
  render(): React.ReactNode {
    return (
      <div className="card">
        <div className="card__body">
          <img className="card__img" src={this.props.image} alt="Rick&Morty" />
        </div>
        <div className="card__footer">
          <button
            className="card__btn_delete"
            onClick={() => {
              this.props.onDeleteCard({ image: this.props.image, liked: !this.props.liked, id: this.props.id })
            }}>
            Удалить
          </button>
          <button
            onClick={() => {
              this.props.onChangeLikeCard({ image: this.props.image, liked: !this.props.liked, id: this.props.id })
            }}
            className={`card__btn_like ${this.props.liked ? 'card__btn_like-active' : ''}`}
          />
        </div>
      </div>
    )
  }
}
