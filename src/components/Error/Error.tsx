
interface ErrorProps {
    error: string
}

const Error = ({ error }: ErrorProps) => {
    return <div className="flex justify-center items-center h-full text-destructive">Error: {error}</div>
}

export default Error