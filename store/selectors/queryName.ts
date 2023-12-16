import { selector } from "recoil"

import { currentQueryState } from "../atoms/currentQuery"

export const queryName = selector({
  key: "queryName",
  get: ({ get }) => {
    const state = get(currentQueryState)

    return state?.queryName
  },
})
