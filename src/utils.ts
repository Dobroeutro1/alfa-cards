import { Action, Middleware } from 'redux'

export const actionFn: Middleware =
  ({ dispatch, getState }) =>
  (next) =>
  (action: Action): Action => {
    if (action instanceof Function) {
      return action(dispatch, getState)
    }

    return next(action)
  }

export function getId(message: string): number {
  return parseInt(message.split('.jpg')[0].split('_')[1], 10)
}
