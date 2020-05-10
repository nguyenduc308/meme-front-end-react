import { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PATHS } from '../constants';

export default function useNotAuth() {
    const location = useLocation();
    const history = useHistory();
    const token = useSelector(({auth}) => auth.token);
    useEffect(()=> {
        if(token) {
            return history.push(PATHS.HOMEPAGE)
        }
    }, [location, history, token])
}  