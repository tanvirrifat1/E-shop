import { Navigate, useLocation } from 'react-router-dom';

import { Circles } from 'react-loader-spinner'
import useAdmin from '../../Hooks/useAdmin';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    const { isAdmin } = useAdmin(user?.email)

    const location = useLocation()

    if (loading) {
        return <div className='flex justify-center mt-32'>
            <Circles
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    }

    if (user && isAdmin) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default AdminRoute;