import { selector } from "recoil"

import { currentQueryState } from "../atoms/currentQuery"

export const note = selector({
  key: "note",
  get: ({ get }) => {
    const state = get(currentQueryState)

    return state?.note
  },
})
