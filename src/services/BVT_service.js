import { instance } from './axios';

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
//Lấy tất cả chỗ ngồi với điều kiện mã chi tiết chuyến tàu
const getAllChoNgoi = (MaCTCT, config) => {
    return instance.get(`/api/getAllChoNgoi/${MaCTCT}`, config);
};
//Lấy giá vé
const getPriceTicket = (MaChuyenTau, config) => {
    return instance.get(`/api/searchPriceTicket/?MaChuyenTau=${MaChuyenTau}`, config);
};
//Lấy Lịch sử đặt vé
const getHistoryBooking = (config) => {
    return instance.get('/api/getLSDatVe', config);
};
//Đăng ký
const RegisterKH = (data) => {
    return instance.post('/api/createAccountKH', data);
};
//Đăng nhập khách hàng
const LoginKH = (data) => {
    return instance.post('/api/loginAccountKH', data);
};
//Đăng nhập nhân viên
const LoginNV = (data) => {
    return instance.post('/api/loginAccountNV', data);
};
const createBookTicket = (data, config) => {
    return instance.post('/api/createBookTicket', data, config);
};
//Quên mật khẩu
const forgetPassWord = (Email) => {
    return instance.post('/api/forgotPassWord', Email);
};
//Update thông tài khoản
const updateDetailTK = (data, config) => {
    return instance.put('/api/updateKhachHang', data, config);
};

export {
    RegisterKH,
    LoginKH,
    LoginNV,
    getALLChuyenTau,
    searchChuyenTau,
    getDetailKH,
    getAllChoNgoi,
    getPriceTicket,
    createBookTicket,
    updateDetailTK,
    forgetPassWord,
    getHistoryBooking,
};
