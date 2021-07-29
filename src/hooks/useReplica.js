import { useContext, useState } from "react"
import { DataContext } from "../components/Contexts/DataContext"

export const useReplica = () => {

    const {replicaMode} = useContext(DataContext)

    const [invertir, setInvertir] = useState(true)

    const nuevaReplica = () => {
        replicaMode.resetVote16()
        replicaMode.resetVote17()
        setInvertir(!invertir)
    }

    return [invertir, nuevaReplica]
}
