import { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

export const useChangePassword = () => {
    const [loading, setLoading] = useState(false);
    const [errorChange, setErrorChange] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const [profileType, setProfileType] = useState('');
    const [userId, setUserId] = useState('')
    const [workId, setWorkId] = useState('')
    const [email, setEmail] = useState('')

    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const token = queryParams.get('token')

    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            try {
                const decoded = jwtDecode(token);
                setProfileType(decoded.profileType);
                setUserId(decoded.userId || "");
                setWorkId(decoded.workId || "");
                setEmail(decoded.sub || "");
            } catch (err) {
                console.error('Error', err);
            }
        } else {
            navigate('/Access_Panel/login');
        }
    }, [token]);

    const changePassword = async (password, confirmarPassword) => {
        setLoading(true);
        setErrorChange(null);
        setSuccessMessage(null);
        let result = false;

        if (profileType === 'U') {
            try {
                const response = await axios.post('https://localhost:7038/Users/NuevaContraseña', null, {
                    params: { userId, password, confirmarPassword },
                });
                if (response.status === 200) {
                    setSuccessMessage(response.data);
                    result = true;
                }
            } catch (err) {
                setErrorChange(err.response ? err.response.data : 'Error de conexión');
            } finally {
                setLoading(false);
            }
        }

        if (profileType === 'W') {
            try {
                const response = await axios.post('https://localhost:7038/WorkProfile/NuevaContraseña', null, {
                    params: { workId, password, confirmarPassword },
                });
                if (response.status === 200) {
                    setSuccessMessage(response.data);
                    result = true;
                }
            } catch (err) {
                setErrorChange(err.response ? err.response.data : 'Error de conexión');
            } finally {
                setLoading(false);
            }
        }

        return email;
    };

    return { changePassword, loading, errorChange, successMessage };
};