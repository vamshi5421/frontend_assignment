import { selector } from "recoil"

import { currentQueryState } from "../atoms/currentQuery"

export const selectedTable = selector({
  key: "selectedTable",
  get: ({ get }) => {
    const state = get(currentQueryState)

    return state?.tableName
  },
})
