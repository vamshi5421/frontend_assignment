import React, { useEffect, useState } from "react"
import { currentQueryState } from "@/store/atoms/currentQuery"
import { savedQueryState } from "@/store/atoms/saveQuery"
import { note } from "@/store/selectors/notes"
import { query } from "@/store/selectors/query"
import { queryName } from "@/store/selectors/queryName"
import { selectedTable } from "@/store/selectors/selectedTable"
import Editor from "@monaco-editor/react"
import { useTheme } from "next-themes"
import { useRecoilState, useRecoilValue } from "recoil"

import { QueryInfo } from "@/types/query"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { Notes } from "./notes"

const CodeEditor = () => {
  const { setTheme, theme } = useTheme()

  const queryCode = useRecoilValue<string | undefined>(query)
  const [code, setCode] = useState<string | undefined>(queryCode)

  const queryTitle = useRecoilValue<string | undefined>(queryName)
  const [queryNameInput, setQueryNameInput] = useState(queryTitle)

  const queryNote = useRecoilValue(note)
  const queryTbName = useRecoilValue(selectedTable)
  const queryDB = useRecoilValue(selectedTable)

  const [currentQuery, setCurrentQuery] = useRecoilState(currentQueryState)
  const [savedQueries, setSavedQueries] = useRecoilState(savedQueryState)

  useEffect(() => {
    if (currentQuery) {
      setCode(currentQuery.query || "") // Use the saved note value if available
      setQueryNameInput(currentQuery.queryName || "")
    }
  }, [currentQuery?.query, currentQuery?.queryName])

  const handleSave = () => {
    // Save the current query state to the saved queries list

    // if (currentQuery?.id) {
    //   setSavedQueries((prev) => {
    //     return prev.map((el) => {
    //       return el.id === currentQuery.id
    //         ? {
    //             ...el,
    //             query: code,
    //             queryName: queryNameInput,
    //             tableName: currentQuery?.dbName,
    //             dbName: selectedTable,
    //           }
    //         : el
    //     })
    //   })
    // } else {
      const newQuery: QueryInfo = {
        ...currentQuery,
        id: savedQueries.length + 1,
        query: code,
        queryName: queryNameInput,
        tableName: currentQuery?.dbName,
      }
      setCurrentQuery(newQuery)

      // Save the current query to the list of saved queries
      setSavedQueries((prevQueries) => [...prevQueries, newQuery])

      // Clear the queryName after saving
      setQueryNameInput("")

    // }
  }

  const handleRun = () => {
    if (code) {
      const newQuery: QueryInfo = {
        ...currentQuery,
        query: code,
        queryName: queryNameInput,
        tableName: currentQuery?.dbName,
      }

      setCurrentQuery(newQuery)
    }
  }

  return (
    <>
      <div className="pb-2 flex justify-center align-middle ">
        <Input
          placeholder="untitled"
          value={queryNameInput}
          onChange={(e) => setQueryNameInput(e.target.value)}
        />
        <div className="pl-2 flex">
          <Button onClick={handleSave} disabled={queryNameInput ? false : true}>
            save
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-4">
        <div className="col-span-2 row-span-2">
          <Editor
            height="300px"
            language="sql"
            theme={theme === "light" ? "light" : "vs-dark"}
            value={code}
            options={{
              fontSize: 16, // Set the font size without "px"
              formatOnType: true,
              minimap: { scale: 10 },
            }}
            onChange={(e) => {
              setCode(e)
            }}
          />
        </div>
        <div className="row-span-2 col-start-3">
          <Notes />
        </div>
      </div>

      <Button className="m-2" onClick={handleRun}>
        Run Code
      </Button>
    </>
  )
}

export default CodeEditor
