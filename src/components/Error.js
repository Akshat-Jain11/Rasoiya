import { useRouteError } from "react-router-dom"

const Error = () => {

    const err = useRouteError()

    return (
        <div className="px-4 py-2">
            <h1 className="text-4xl font-bold">OOPS!!</h1>
            <h2 className="text-xl">Page Not Found</h2>
            <h3>{err.status} : {err.statusText}</h3>
        </div>
    )
}

export default Error