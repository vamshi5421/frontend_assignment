import { selector } from "recoil"

import { currentQueryState } from "../atoms/currentQuery"

export const selectedDB = selector({
  key: "selectedDB",
  get: ({ get }) => {
    const state = get(currentQueryState)

    return state?.dbName
  },
})
