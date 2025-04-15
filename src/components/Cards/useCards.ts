import { useEffect, useState } from "react"
import { CardProps } from "../Card/Card"

const useCards = () => {
    const [cardData, setCardData] = useState<CardProps[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
    useEffect(() => {
        fetch('/TechnicalExercise.json')
            .then((response) => response.json())
            .then((cardData) => setCardData(cardData.data))
            .catch((error) => setError(error))
            .finally(() => setLoading(false))
    }, [])

    return { cardData, loading, error }
}

export default useCards