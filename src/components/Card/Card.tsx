import { Calendar } from "lucide-react";
import { Chart } from "../Chart/Chart";

export interface CardProps {
    title: string;
    subTitle: string;
    date: string;
    url: string;
    description: string;
    chart: Array<{ x: number; y: number }>;
}

const Card = ({ title, subTitle, date, url, description, chart }: CardProps) => {
    return (
        <div className="bg-card text-card-foreground rounded-lg shadow-md p-4 flex flex-col">
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-bold">{title}</h2>
                <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{date}</span>
                </div>
            </div>
            <h3 className="text-md mb-2">{subTitle}</h3>
            <a href={url} className="text-white hover:underline mb-2" target="_blank" rel="noopener noreferrer">
                {url}
            </a>
            <p className="line-clamp-2 xl:line-clamp-3 mb-4">{description}</p>

            <div className="mt-auto bg-muted rounded p-2 overflow-auto">
                <Chart chartData={chart} />
            </div>
        </div>
    );
};

export default Card; 