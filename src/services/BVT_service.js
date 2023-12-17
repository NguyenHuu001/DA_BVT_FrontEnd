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
//Tìm vé để hủy
const searchCancelTickets = (MaDatVe, config) => {
    return instance.get(`/api/searchCancelTickets/${MaDatVe}`, config);
};
//Lấy tất cả thông tin của bảng hủy vé
const getAllCancelTicket = (config) => {
    return instance.get(`/api/getAllCancelTickets`, config);
};
//Lấy tổng thu nhập tháng hiện tại
const totalMonthlyIncome = (config) => {
    return instance.get(`/api/tongTienThang`, config);
};
//Lấy số lượng vé bán và vé hủy
const getSale_Cancel_Ticket = (config) => {
    return instance.get('api/thongKeVeBan_Huy', config);
};
//Thống kê số lượng vé của từng chuyến bán ra trong tháng
const getSaleTicketTrain = (config) => {
    return instance.get('api/saleTicketTrain', config);
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
//Đặt vé
const createBookTicket = (data, config) => {
    return instance.post('/api/createBookTicket', data, config);
};
//Quên mật khẩu
const forgetPassWord = (Email) => {
    return instance.post('/api/forgotPassWord', Email);
};
//Yêu cầu hủy vé
const cancelTickets = (data) => {
    return instance.post(`/api/cancelTickets`, data);
};
//Xác nhận hủy vé
const confimCancelTicket = (data, config) => {
    return instance.post(`/api/confimCancelTicket`, data, config);
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
    cancelTickets,
    searchCancelTickets,
    getAllCancelTicket,
    confimCancelTicket,
    totalMonthlyIncome,
    getSale_Cancel_Ticket,
    getSaleTicketTrain,
};
