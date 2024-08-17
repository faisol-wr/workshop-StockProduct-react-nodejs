import { Navigate } from 'react-router-dom'

// Get Token from Local Storage
const token = localStorage.getItem("token")

const ProtectedRoute = ({
    redirectPath = "/",
    children
}: any) => {
    if (!token) {
        return <Navigate to={redirectPath} />
    }
    return children
}

export default ProtectedRoute