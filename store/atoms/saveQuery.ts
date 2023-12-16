import { atom } from "recoil"

import { QueryInfo } from "@/types/query"

export const savedQueryState = atom<QueryInfo[]>({
  key: "savedQueryState",
  default: [
    {
      id: 1,
      query: `    -- select db to query upon.
      -- type your query
      
      select * from courses;
      -- select * from products;
      
      -- save your query`,
      queryName: "courseQuery",
      note: "courses notes.",
      dbName: "course",
      tableName: "course",
    },
    {
      id: 2,
      query: `    -- select db to query upon.
      -- type your query
      
      -- select * from courses;
       select * from products;
      
      -- save your query`,
      queryName: "productQuery",
      note: "product notes.",
      dbName: "product",
      tableName: "product",
    },
    {
      id: 3,
      query: `    -- select db to query upon.
      -- type your query
      
      -- select * from courses;
       select * from products;
      
      -- save your query`,
      queryName: "ordersQuery",
      note: "orders notes.",
      dbName: "order",
      tableName: "order",
    },
  ],
})
