import './bookinghistory.scss';
import { cancelTickets, getHistoryBooking } from '../../services/BVT_service';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { Input, Modal, Select, notification } from 'antd';
import axios from 'axios';
function BookingHistory() {
    const [historyBooking, setHistoryBooking] = useState([]);
    const [tenTaiKhoan, setTenTaiKhoan] = useState('');
    const [soTaiKhoan, setSoTaiKhoan] = useState('');
    const [tenNganHang, setTenNganHang] = useState('');
    const [nameBank, setNameBank] = useState([]);
    const [maDatVe, setMaDatVe] = useState([]);
    useEffect(() => {
        fetchHistory();
    }, []);

    useEffect(() => {
        axios
            .get('https://api.vietqr.io/v2/banks')
            .then((response) => {
                setNameBank(response.data.data);
            })
            .catch((error) => {
                console.error('Lỗi khi lấy danh sách tỉnh/thành phố', error);
            });
    }, []);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = (MaDatVe) => {
        setMaDatVe(MaDatVe);
        setIsModalOpen(true);
    };
    const handleOk = () => {
        if (tenTaiKhoan && soTaiKhoan && tenNganHang) {
            try {
                HuyVe(maDatVe);
            } catch (error) {
                console.log(error);
            }
            setIsModalOpen(false);
        } else {
            notification.open({
                type: 'error',
                message: 'Vui lòng nhập đầy đủ thông tin',
                description: '',
                duration: 1,
            });
        }
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    ///
    const formatTwoDigits = (number) => {
        return number < 10 ? `0${number}` : `${number}`;
    };
    function formatCurrency(amount) {
        return amount.toLocaleString('vi-VN');
    }   
    const fetchHistory = async () => {
        try {
            const config = {
                withCredentials: true,
            };
            await getHistoryBooking(config).then((res) => {
                setHistoryBooking(res);
            });
        } catch (error) {
            console.log(error);
        }
    };
    const HuyVe = async () => {
        try {
            const data = {
                MaDatVe: maDatVe,
                TenTaiKhoan: tenTaiKhoan,
                SoTaiKhoan: soTaiKhoan,
                TenNganHang: tenNganHang,
            };
            await cancelTickets(data).then((res) => {
                notification.open({
                    type: 'success',
                    message: 'Hủy vé thành công',
                    description: '',
                    duration: 1,
                });
                fetchHistory();
            });
        } catch (error) {
            console.log(error);
        }
    };
    const checkEventTime = (NgayDi) => {
        // Chuyển định dạng NgayDi thành đối tượng moment
        const ngayDiMoment = moment(NgayDi);

        // Lấy ngày hiện tại
        const todayMoment = moment();

        // So sánh xem NgayDi có lớn hơn todayMoment 1 ngày hay không
        const isOneDayDifference = ngayDiMoment.diff(todayMoment, 'days') >= 1;
        // Trả về kết quả
        return isOneDayDifference;
    };
    const handleNameBankChange = (value, name) => {
        setTenNganHang(value);
    };
    return (
        <div className="mt-5 d-flex flex-column align-items-center ">
            <h1 style={{ textTransform: 'uppercase', fontWeight: '600', color: '#fff' }}>Lịch sử đặt vé</h1>
            <div className="container mt-4 bg-white " style={{ borderRadius: '10px' }}>
                <div className="table-responsive my-5" style={{ overflowX: 'auto' }}>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" className="no-wrap">
                                    Mã vé tàu
                                </th>
                                <th scope="col" className="no-wrap">
                                    Tên Chuyến
                                </th>
                                <th scope="col" className="no-wrap">
                                    Ngày Đi
                                </th>
                                <th scope="col" className="no-wrap">
                                    Giờ Đi
                                </th>
                                <th scope="col" className="no-wrap">
                                    Ngày Đặt Vé
                                </th>

                                <th scope="col" className="no-wrap">
                                    Họ Tên Khách
                                </th>
                                <th scope="col" className="no-wrap">
                                    Trạng thái
                                </th>
                                <th scope="col" className="no-wrap">
                                    Số Ghế
                                </th>
                                <th scope="col" className="no-wrap">
                                    Giá vé
                                </th>
                                <th scope="col" className="no-wrap"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {historyBooking &&
                                historyBooking.map((value, index) => (
                                    <tr key={value.HoTenKhachDiChung + index}>
                                        <td className="no-wrap">{value.MaDatVe}</td>
                                        <td className="no-wrap">{value.TenChuyen}</td>
                                        <td className="no-wrap">{moment(value.NgayDi).format('DD/MM/YYYY')}</td>
                                        <td className="no-wrap">{`${formatTwoDigits(
                                            new Date(value.GioDi).getUTCHours(),
                                        )}:${formatTwoDigits(new Date(value.GioDi).getUTCMinutes())}`}</td>
                                        <td className="no-wrap">{moment(value.NgayDatVe).format('DD/MM/YYYY')}</td>
                                        <td className="no-wrap">{value.HoTenKhachDiChung}</td>
                                        <td className="no-wrap">{value.TrangThai}</td>
                                        <td className="no-wrap">{value.TenGhe}</td>
                                        <td className="no-wrap">{formatCurrency(value.GiaVe)} VNĐ</td>
                                        <td className="no-wrap p-0">
                                            <button
                                                className="btn-Huy"
                                                style={{
                                                    cursor:
                                                        !checkEventTime(value.NgayDi) || value.TrangThai !== 'Đã đặt'
                                                            ? 'no-drop'
                                                            : '',
                                                    backgroundColor:
                                                        !checkEventTime(value.NgayDi) || value.TrangThai !== 'Đã đặt'
                                                            ? '#757472'
                                                            : '',
                                                    color:
                                                        !checkEventTime(value.NgayDi) || value.TrangThai !== 'Đã đặt'
                                                            ? '#fff'
                                                            : '',
                                                }}
                                                onClick={() =>
                                                    value.TrangThai === 'Đã đặt' &&
                                                    checkEventTime(value.NgayDi) &&
                                                    showModal(value.MaDatVe)
                                                }
                                            >
                                                {value.TrangThai === 'Đã đặt' ? 'Hủy' : 'Đang yêu cầu hủy'}
                                            </button>
                                            <Modal
                                                title="Basic Modal"
                                                open={isModalOpen}
                                                onOk={() => handleOk()}
                                                onCancel={handleCancel}
                                            >
                                                <label>Tên tài khoản:</label>
                                                <Input
                                                    value={tenTaiKhoan}
                                                    onChange={(e) => setTenTaiKhoan(e.target.value)}
                                                />

                                                <label>Số tài khoản:</label>
                                                <Input
                                                    value={soTaiKhoan}
                                                    onChange={(e) => setSoTaiKhoan(e.target.value)}
                                                />

                                                <label>Tên ngân hàng:</label>
                                                <Select
                                                    placeholder="Chọn Ngân Hàng"
                                                    value={tenNganHang}
                                                    onChange={handleNameBankChange}
                                                    style={{ width: '100%' }}
                                                >
                                                    {nameBank.map((value) => (
                                                        <Select.Option key={value.code} value={value.code}>
                                                            {value.name}
                                                        </Select.Option>
                                                    ))}
                                                </Select>
                                            </Modal>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
                <div className="d-flex justify-content-end me-4 mt-2 mb-5">
                    <span style={{ color: 'red' }}>
                        (*) Khi yêu cầu hủy vé bạn cần liên hệ nơi bán vé và cung cấp "Mã vé tàu" cho nhân viên để xác
                        nhận hủy{' '}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default BookingHistory;
