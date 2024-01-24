'use client'

import React, {
  createContext,
  useContext,
  ReactNode,
  useReducer,
} from 'react'

interface AppState {
  showSideBar: boolean
}

type Action =
  | { type: 'TOGGLE_ON' }
  | { type: 'TOGGLE_OFF' }

const initialState: AppState = {
  showSideBar: false
}

const AppStateContext = createContext<{
  state: AppState
  dispatch: React.Dispatch<Action>
} | undefined>(undefined)

const appStateReducer = (
  state: AppState,
  action: Action
): AppState => {
  switch (action.type) {
    case 'TOGGLE_ON':
      return { ...state, showSideBar: true }
    case 'TOGGLE_OFF':
      return { ...state, showSideBar: false }
    default:
      return state
  }
}

export const AppStateProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(appStateReducer, initialState)

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      { children }
    </AppStateContext.Provider>
  )
}

export const useAppState = () => {
  const context = useContext(AppStateContext)
  if (!context) {
    throw new Error('useAppState must be used within an AppStateProvider')
  }
  return context
}