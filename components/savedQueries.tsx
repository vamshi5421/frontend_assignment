import * as React from "react"
import { currentQueryState } from "@/store/atoms/currentQuery"
import { savedQueryState } from "@/store/atoms/saveQuery"
import { useRecoilState, useRecoilValue } from "recoil"

import { QueryInfo } from "@/types/query"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { DialogModel } from "./dialogModel"
import { Button } from "./ui/button"

export function SavedQueries() {
  const [currentQuery, setCurrentQuery] = useRecoilState(currentQueryState)
  const savedQueries = useRecoilValue(savedQueryState)

  return (
    <Card className="h-[600px]">
      <CardHeader>
        <CardTitle>Saved Queries</CardTitle>
      </CardHeader>
      <CardContent>
        {savedQueries.map((query) => (
          <Card key={query.id} className="flex mb-2">
            <Button
              variant="ghost"
              className="w-full flex justify-start align-middle"
              onClick={() => {
                const curr: QueryInfo =
                  savedQueries?.find((q) => q.queryName === query.queryName) ??
                  {}
                console.log(curr)
                setCurrentQuery(curr)
              }}
            >
              {query.queryName}
            </Button>
            <DialogModel key={query.queryName} />
          </Card>
        ))}
      </CardContent>
      <CardFooter className="flex justify-between"></CardFooter>
    </Card>
  )
}
