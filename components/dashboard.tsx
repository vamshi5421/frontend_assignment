import React, { useEffect } from "react"
import { currentQueryState } from "@/store/atoms/currentQuery"
import { useRecoilState } from "recoil"

import { QueryInfo } from "@/types/query"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function Dashboard() {
  const [currentQuery, setCurrentQuery] = useRecoilState(currentQueryState)

  return (
    <Card className="min-h-0">
      <CardHeader>
        <CardTitle>Databases</CardTitle>
        <CardDescription>Select the Database</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Select
                value={currentQuery?.dbName || ""}
                onValueChange={(e) => {
                  const newQuery: QueryInfo = {
                    ...currentQuery,
                    dbName: e,
                  }
                  setCurrentQuery(newQuery)
                }}
              >
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem key="course" value="course">
                    Course
                  </SelectItem>
                  <SelectItem key="order" value="order">
                    Order
                  </SelectItem>
                  <SelectItem key="product" value="product">
                    Product
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between"></CardFooter>
    </Card>
  )
}
