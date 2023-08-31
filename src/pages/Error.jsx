import { useRouteError } from "react-router-dom"

export default function Error() {
    const error = useRouteError()
    
    return (
        <>
        <h3>Error: {error.message}</h3>
        <pre>{error.status} - {error.statusText}</pre>
        </>
    )
}