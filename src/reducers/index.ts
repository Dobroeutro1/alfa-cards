import { combineReducers } from 'redux'

import { reducer as sidebar } from '../js/components/sidebar'
import { reducer as cardList } from './CardListReducer'

export default combineReducers({ sidebar, cardList })
