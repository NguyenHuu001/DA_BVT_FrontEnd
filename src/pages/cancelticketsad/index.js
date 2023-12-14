import { useEffect, useState } from 'react';
import './canceltickets.scss';
import Search from 'antd/es/input/Search';
import { confimCancelTicket, getAllCancelTicket, searchCancelTickets } from '../../services/BVT_service';
import { message } from 'antd';
function CancelTicketsAd() {
    const [historyBooking, setHistoryBooking] = useState([]);
    useEffect(() => {
        fetchHistory();
    }, []);
    const formatTwoDigits = (number) => {
        return number < 10 ? `0${number}` : `${number}`;
    };
    const fetchHistory = async () => {
        try {
            const config = {
                withCredentials: true,
            };
            await getAllCancelTicket(config).then((res) => {
                setHistoryBooking(res);
            });
        } catch (error) {}
    };
    function formatCurrency(amount) {
        return amount.toLocaleString('vi-VN');
    }
    const onSearch = async (value) => {
        try {
            const config = {
                withCredentials: true,
            };
            await searchCancelTickets(value, config).then((res) => {
                setHistoryBooking(res);
                if (res.length === 0)
                    setTimeout(() => {
                        message.error('Không có mã vé hoặc mã vé chưa yêu cầu hủy');
                    }, 50);
            });
        } catch (error) {
            console.log(error);
        }
    };
    const XacNhanHuyVe = async (MaHuyVe, MaCTCT, MaDatVe, MaKhachDiChung) => {
        try {
            const data = {
                MaHuyVe: MaHuyVe,
                MaCTCT: MaCTCT,
                MaKhachDiChung: MaKhachDiChung,
                MaDatVe: MaDatVe,
            };
            const config = {
                withCredentials: true,
            };
            await confimCancelTicket(data, config).then((res) => {
                fetchHistory();
            });
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="mt-5 d-flex flex-column align-items-center ">
            <h1 style={{ textTransform: 'uppercase', fontWeight: '600', color: '#fff' }}>Hủy vé</h1>
            <div className="container mt-4 bg-white " style={{ borderRadius: '10px', overflowX: 'auto' }}>
                <Search
                    className="mt-4"
                    placeholder="Nhập mã vé"
                    onSearch={onSearch}
                    style={{
                        width: 200,
                    }}
                />

                <div className="table-responsive my-4">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" className="no-wrap">
                                    Mã vé tàu
                                </th>
                                <th scope="col" className="no-wrap">
                                    Tên Chuyến
                                </th>
                                {/* <th scope="col" className="no-wrap">
                                    Ngày Đi
                                </th>
                                <th scope="col" className="no-wrap">
                                    Giờ Đi
                                </th>
                                <th scope="col" className="no-wrap">
                                    Ngày Đặt Vé
                                </th> */}

                                <th scope="col" className="no-wrap">
                                    Tên Tài Khoản
                                </th>
                                <th scope="col" className="no-wrap">
                                    Số Tài Khoản
                                </th>
                                <th scope="col" className="no-wrap">
                                    Tên Ngân Hàng
                                </th>
                                {/* <th scope="col" className="no-wrap">
                                    Trạng thái
                                </th>
                                <th scope="col" className="no-wrap">
                                    Số Ghế
                                </th> */}
                                <th scope="col" className="no-wrap">
                                    Giá vé sau khi trừ phí
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
                                        <td className="no-wrap">{value.TenTaiKhoan}</td>
                                        <td className="no-wrap">{value.SoTaiKhoan}</td>
                                        <td className="no-wrap">{value.TenNganHang}</td>
                                        <td className="no-wrap">{formatCurrency(value.GiaVe * 0.8)} VNĐ</td>
                                        <td className="no-wrap p-0">
                                            <button
                                                className="btn-Huy"
                                                onClick={() => {
                                                    XacNhanHuyVe(
                                                        value.MaHuyVe,
                                                        value.MaCTCT,
                                                        value.MaDatVe,
                                                        value.MaKhachDiChung,
                                                    );
                                                }}
                                            >
                                                Xác nhận hủy vé
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>``
            </div>
        </div>
    );
}

export default CancelTicketsAd;
