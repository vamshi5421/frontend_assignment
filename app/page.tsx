"use client"

import CodeEditor from "@/components/codeEditor"
import { Dashboard } from "@/components/dashboard"
import OrdersTable from "@/components/ordersTable"
import { SavedQueries } from "@/components/savedQueries"
import { TableMenu } from "@/components/tableMenu"

export default function IndexPage() {
  return (
    <div className="container  grid grid-cols-5 grid-rows-7 gap-4  pb-8 pt-6 md:py-10">
      <div className="row-span-7">
        <Dashboard />
        <div className="mt-10 ">
          <SavedQueries />
        </div>
      </div>
      <div className="col-span-4 row-span-3">
        <CodeEditor />
      </div>
      <div className="col-span-4 row-span-4 col-start-2 row-start-4 mt-[-450px]">
        <TableMenu />
        <OrdersTable />
      </div>
    </div>
  )
}
