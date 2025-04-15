import Card, { CardProps } from "../Card/Card";
import Loader from "../Loader/Loader";
import useCards from "./useCards"
import Error from "../Error/Error"

const Cards = () => {
    const { cardData, loading, error } = useCards()

    if (loading) {
        return <Loader />
    }

    if (error) {
        return <Error error={error} />
    }

    const cards = cardData?.data || []

    return (
        <div className="flex flex-col md:grid md:max-xl:grid-cols-2 xl:grid-cols-3 md:max-xl:grid-rows-2 xl:grid-rows-3 gap-4 xl:gap-8 h-full w-full p-8">
            {/* shouldn't use index */}
            {cards.map(({ title, subTitle, date, url, description, chart }: CardProps, index: number) => (
                <Card
                    key={index}
                    title={title}
                    subTitle={subTitle}
                    date={date}
                    url={url}
                    description={description}
                    chart={chart}
                />
            ))}
        </div>
    )
}

export default Cards