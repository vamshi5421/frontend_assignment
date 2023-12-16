import { atom } from "recoil"

import { QueryInfo } from "@/types/query"

export const savedQueryState = atom<QueryInfo[]>({
  key: "savedQueryState",
  default: [],
})
