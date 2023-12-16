import { useState } from "react"
import { currentQueryState } from "@/store/atoms/currentQuery"
import { savedQueryState } from "@/store/atoms/saveQuery"
import { id } from "@/store/selectors/id"
import { note } from "@/store/selectors/notes"
import { query } from "@/store/selectors/query"
import { queryName } from "@/store/selectors/queryName"
import { Editor } from "@monaco-editor/react"
import { Edit } from "lucide-react"
import { useTheme } from "next-themes"
import { useRecoilState, useRecoilValue } from "recoil"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function DialogModel() {
  const { setTheme, theme } = useTheme()

  const queryValue = useRecoilValue(query)
  const [inputQueryValue, setInputQueryValue] = useState(queryValue)

  const queryNameValue = useRecoilValue(queryName)
  const [inputQueryNameValue, setInputQueryNameValue] = useState(queryNameValue)

  const noteValue = useRecoilValue(note)
  const [inputNoteValue, setInputNoteValue] = useState(noteValue)

  const idValue = useRecoilValue(id)

  const [currentQuery, setCurrentQuery] = useRecoilState(currentQueryState)
  const [savedQueries, setSavedQueries] = useRecoilState(savedQueryState)

  const handleUpdate = () => {
    const oldQueryValues = savedQueries.find((el) => el.id === idValue)

    const updatedQueryValues = {
      ...oldQueryValues,
      query: inputQueryValue,
      queryName: inputQueryNameValue,
      note: inputNoteValue,
    }

    setSavedQueries((oldState) => {
      return oldState.map((query) => {
        if (query.id === idValue) {
          return updatedQueryValues
        }
        return query
      })
    })
    setCurrentQuery(updatedQueryValues)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Edit size={16} />
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-fit overflow-auto">
        <DialogHeader>
          <DialogTitle>Edit Query</DialogTitle>
          <DialogDescription>
            Make changes to your query. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={inputQueryNameValue}
              onChange={(e) => setInputQueryNameValue(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4  gap-4">
            <Label htmlFor="username" className="text-right">
              Query
            </Label>

            <Editor
              height="200px"
              width="550px"
              language="sql"
              theme={theme === "light" ? "light" : "vs-dark"}
              value={inputQueryValue}
              options={{
                fontSize: 16, // Set the font size without "px"
                formatOnType: true,
                minimap: { scale: 10 },
              }}
              onChange={(e) => {
                setInputQueryValue(e)
              }}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="note" className="text-right">
              Notes
            </Label>
            <Input
              id="note"
              value={inputNoteValue}
              onChange={(e) => setInputNoteValue(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>

        <DialogFooter>
          <Button type="submit" onClick={handleUpdate}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
