import { useRouteError } from "react-router"
const Error = () => {
    const err = useRouteError();
    return (
        <div>
            <h1>OOPS!!!</h1>
            <h4>Something went wrong!!!</h4>
            <h3>{err.status}: {err.statusText}</h3>
        </div>
    )
}
export default Error