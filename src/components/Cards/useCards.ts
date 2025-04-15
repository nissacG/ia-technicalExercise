import { useEffect, useState } from "react"

const useCards = () => {
    const [cardData, setCardData] = useState<any>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
    useEffect(() => {
        fetch('/TechnicalExercise.json')
            .then((response) => response.json())
            .then((cardData) => setCardData(cardData))
            .catch((error) => setError(error))
            .finally(() => setLoading(false))
    }, [])

    return { cardData, loading, error }
}

export default useCards