import { useEffect, useState } from "react"
import { currentQueryState } from "@/store/atoms/currentQuery"
import { useRecoilState } from "recoil"

import { QueryInfo } from "@/types/query"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { Textarea } from "./ui/textarea"

export const Notes = () => {
  const [note, setNote] = useState("")
  const [currentQuery, setCurrentQuery] = useRecoilState(currentQueryState)

  useEffect(() => {
    if (currentQuery) {
      setNote(currentQuery.note || "") // Use the saved note value if available
    }
  }, [currentQuery?.note])

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Notes</CardTitle>
      </CardHeader>
      <CardContent className="h-full">
        <Textarea
          placeholder="Type your Notes here."
          className="h-3/5"
          value={note}
          onChange={(e) => {
            setNote(e.target.value)
            setCurrentQuery((prevQuery) => ({
              ...prevQuery,
              note: e.target.value,
            }))
          }}
        />
      </CardContent>
    </Card>
  )
}
