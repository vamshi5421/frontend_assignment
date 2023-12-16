import { selector } from "recoil"

import { currentQueryState } from "../atoms/currentQuery"

export const query = selector({
  key: "query",
  get: ({ get }) => {
    const state = get(currentQueryState)

    return state?.query
  },
})
