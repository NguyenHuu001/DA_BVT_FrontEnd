import { instance } from './axios';
//Đăng ký
const RegisterKH = (data) => {
    return instance.post('/api/createAccountKH', data);
};
//Đăng nhập
const LoginKH = (data) => {
    return instance.post('/api/loginAccountKH', data);
};
//Lấy tất cả dữ liệu ở bảng ChuyenTau
const getALLChuyenTau = () => {
    return instance.get('/api/getAllChuyenTau');
};
//Tìm kiếm chuyến tàu
const searchChuyenTau = (MaChuyenTau, SoLuong, NgayDi) => {
    return instance.get(`/api/searchChuyenTau/?MaChuyenTau=${MaChuyenTau}&SoLuong=${SoLuong}&NgayDi=${NgayDi}`);
};
//Lấy thông tin khách hàng với mã TKKH
const getDetailKH = (config) => {
    return instance.get('/api/getDetailKH', config);
};
export { RegisterKH, LoginKH, getALLChuyenTau, searchChuyenTau, getDetailKH };
