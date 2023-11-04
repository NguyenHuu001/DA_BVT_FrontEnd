import { instance } from './axios';
const RegisterKH = (data) => {
    return instance.post('/api/createAccountKH', data);
};
export { RegisterKH };
