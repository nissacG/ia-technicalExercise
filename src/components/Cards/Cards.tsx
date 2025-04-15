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
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:grid-rows-2 lg:grid-rows-3 xl:grid-rows-4 gap-4 lg:gap-8 h-full w-full p-8">
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