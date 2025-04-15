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
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <h3 className="text-md mb-2">{subTitle}</h3>
            <p className="text-sm text-muted-foreground mb-2">Date: {date}</p>
            <a href={url} className="text-primary hover:underline mb-2" target="_blank" rel="noopener noreferrer">
                {url}
            </a>
            <p className="text-sm mb-4">{description}</p>
            <div className="mt-auto">
                <h4 className="text-sm font-semibold mb-2">Chart Data:</h4>
                <div className="h-32 bg-muted rounded p-2 overflow-auto">
                    {chart.map((point, index) => (
                        <div key={index} className="text-xs">
                            x: {point.x}, y: {point.y}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Card; 