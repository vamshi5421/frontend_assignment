import { atom } from "recoil"

import { QueryInfo } from "@/types/query"

export const currentQueryState = atom<QueryInfo | null>({
  key: "currentQueryState",
  default: {
    query: `    -- select db to query upon.
    -- type your query
    
    select * from courses;
    -- select * from products;
    
    -- save your query`,
    queryName: "",
    dbName: "",
    tableName: "",
    note: "",
  },
})
