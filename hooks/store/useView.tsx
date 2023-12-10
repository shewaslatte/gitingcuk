import { ReactNode } from "react"
import { create } from "zustand"

type ViewState = {
  panel: {
    left?: ReactNode
    right?: ReactNode
    bottom?: ReactNode
  }
  modal: {
    setting?: boolean
    repos?: boolean
  }
}

type SetViewFn = (fn: (state: ViewState) => ViewState) => void

const viewStateActions = {
  setModal:
    (name: keyof ViewState["modal"], view: ReactNode) =>
    (state: ViewState) => ({
      modal: {
        ...state.modal,
        [name]: view,
      },
    }),
  setPanel:
    (name: keyof ViewState["panel"], value: ReactNode) =>
    (state: ViewState) => ({
      panel: {
        ...state.panel,
        [name]: value,
      },
    }),
}

export const useView = create((set: SetViewFn) => ({
  panel: {
    left: false,
    right: false,
    bottom: false,
  },
  modal: {
    setting: false,
    repos: false,
  },
  setters: {
    ...Object.keys(viewStateActions).reduce(
      (acc, key) => ({
        ...acc,
        [key]: (payload: any) => set((viewStateActions as any)[key](payload)),
      }),
      {}
    ),
  },
}))
