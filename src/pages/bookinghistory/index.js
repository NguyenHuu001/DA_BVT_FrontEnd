import './bookinghistory.scss';
import { getHistoryBooking } from '../../services/BVT_service';
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
    return (
        <div className="mt-5 d-flex flex-column align-items-center ">
            <h1 style={{ textTransform: 'uppercase', fontWeight: '600', color: '#fff' }}>Lịch sử đặt vé</h1>
            <div className="container mt-4 bg-white " style={{ borderRadius: '10px', overflowX: 'auto' }}>
                <div className="table-responsive my-5">
                    <table className="table">
                        <thead>
                            <tr>
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
                                    Tổng Tiền
                                </th>
                                <th scope="col" className="no-wrap">
                                    SL Khách
                                </th>
                                <th scope="col" className="no-wrap"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {historyBooking &&
                                historyBooking.map((value, index) => (
                                    <tr key={value.TongTien + index}>
                                        <td className="no-wrap">{value.TenChuyen}</td>
                                        <td className="no-wrap">{moment(value.NgayDi).format('DD/MM/YYYY')}</td>
                                        <td className="no-wrap">{`${formatTwoDigits(
                                            new Date(value.GioDi).getUTCHours(),
                                        )}:${formatTwoDigits(new Date(value.GioDi).getUTCMinutes())}`}</td>
                                        <td className="no-wrap">{moment(value.NgayDatVe).format('DD/MM/YYYY')}</td>
                                        <td className="no-wrap">{value.TongTien}</td>
                                        <td className="no-wrap">{value.SoLuongKhachDiChung}</td>
                                        <td className="no-wrap p-0">
                                            <button className="btn-Huy">Hủy</button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default BookingHistory;
