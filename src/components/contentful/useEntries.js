import { useEffect, useState } from "react"
import { getEntries } from "./contentful"

const promise = getEntries()

export default function useEntries() {
    const [entries, setEntries] = useState([])
    const [isLoading, setLoading] = useState(true)
  
    useEffect(() => {
      promise.then((entries:any[]) => {
        setEntries(entries)
        setLoading(false)
      })
    }, [])
  
    return [entries, isLoading]
  }