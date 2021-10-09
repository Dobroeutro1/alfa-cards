import { IAction, IActionAsync } from '../../../interfaces'
import { api } from '../../Api'
import { getDogResponse } from '../../Api/interfaces'
import { Card } from '../card-list/interfaces'
import { getId } from '../../../utils'

export class Actions {
  readonly GET_DOGS = 'GET_DOGS'
  readonly GET_DOGS_OK = 'GET_DOGS_OK'
  readonly GET_DOGS_ERROR = 'GET_DOGS_ERROR'

  readonly CHANGE_FILTER_STATE = 'CHANGE_FILTER_STATE'

  changeFilterState = (filter: boolean): IAction => ({ type: this.CHANGE_FILTER_STATE, payload: filter })

  getDogs = (): IActionAsync => async (dispatch) => {
    const convert = (dog: getDogResponse): Card => ({ url: dog.message, liked: false, id: getId(dog.message) })
    dispatch({ type: this.GET_DOGS })
    try {
      dispatch({ type: this.GET_DOGS_OK, payload: convert(await api.getDog()) })
    } catch (error) {
      dispatch({ type: this.GET_DOGS_ERROR, payload: error })
    }
  }
}
