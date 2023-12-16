"use client"

import CodeEditor from "@/components/codeEditor"
import { Dashboard } from "@/components/dashboard"
import { DialogModel } from "@/components/dialogModel"
import OrdersTable from "@/components/ordersTable"
import { SavedQueries } from "@/components/savedQueries"
import { TableMenu } from "@/components/tableMenu"

export default function IndexPage() {
  return (
    // <div className=" container grid grid-cols-5 grid-rows-7 pb-8 pt-6 md:py-10">
    //   <div className="row-span-7">
    //     <Dashboard />
    //     <div className="mt-10">
    //       <SavedQueries />
    //     </div>
    //   </div>
    //   <div className="col-span-3 row-span-3 p-3">
    //     <CodeEditor />
    //   </div>
    //   <div className="col-span-4 row-span-4 col-start-2 row-start-4 pt-2">
    //     <TableMenu />
    //     <OrdersTable/>
    //   </div>
    //   <div className="row-span-3 col-start-5 row-start-1">
    //     <Notes />
    //   </div>
    // </div>

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
