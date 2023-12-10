import './bookinghistory.scss';
import { cancelTickets, getHistoryBooking } from '../../services/BVT_service';
import { useEffect, useState } from 'react';
import moment from 'moment';
function BookingHistory() {
    const [historyBooking, setHistoryBooking] = useState([]);
    useEffect(() => {
        fetchHistory();
    }, []);
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
    const HuyVe = async (MaDatVe) => {
        try {
            await cancelTickets(MaDatVe).then((res) => {
                fetchHistory();
            });
        } catch (error) {
            console.log(error);
        }
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
                                                    cursor: value.TrangThai !== 'Đã đặt' && 'no-drop',
                                                    backgroundColor: value.TrangThai !== 'Đã đặt' ? '#757472' : '',
                                                    color: value.TrangThai !== 'Đã đặt' ? '#fff' : '',
                                                }}
                                                onClick={() => {
                                                    value.TrangThai === 'Đã đặt' && HuyVe(value.MaDatVe);
                                                }}
                                            >
                                                {value.TrangThai === 'Đã đặt' ? 'Hủy' : 'Đang yêu cầu hủy'}
                                            </button>
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
