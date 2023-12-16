import { selector } from "recoil"

import { currentQueryState } from "../atoms/currentQuery"

export const id = selector({
  key: "id",
  get: ({ get }) => {
    const state = get(currentQueryState)

    return state?.id
  },
})
