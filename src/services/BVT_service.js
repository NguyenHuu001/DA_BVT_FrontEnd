import { instance } from './axios';
const RegisterKH = (data) => {
    return instance.post('/api/createAccountKH', data);
};
const LoginKH = (data) => {
    return instance.post('/api/loginAccountKH', data);
};
export { RegisterKH, LoginKH };
