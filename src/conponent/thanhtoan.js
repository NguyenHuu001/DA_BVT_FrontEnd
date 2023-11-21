import { faCreditCard, faLocationDot, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useEffect, useState } from 'react';
import { BookTicketContext } from '../contexts/bookticketcontext';
import cardnoidia from '../assets/imgs/card_noidia.png';
import cardquocte from '../assets/imgs/card_quocte.jpg';
import './component.scss';
import moment from 'moment';
import { getPriceTicket, createBookTicket } from '../services/BVT_service';
import { message, notification } from 'antd';
import { useNavigate } from 'react-router-dom';
function ThanhToan() {
    const navigate = useNavigate();
    const { soLuong, chooseDetailTau, DetailListHK, updateStep, updateBookingDetails } = useContext(BookTicketContext);
    const [price, setPrice] = useState();
    const [totalPrice, setTotalPrice] = useState(0);
    const [today, setToday] = useState();
    const formatTwoDigits = (number) => {
        return number < 10 ? `0${number}` : `${number}`;
    };
    useEffect(() => {
        Priceticket();
        getCurrentDate();
    }, []);
    function getCurrentDate() {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Thêm '0' phía trước nếu tháng chỉ có một chữ số
        const day = String(currentDate.getDate()).padStart(2, '0'); // Thêm '0' phía trước nếu ngày chỉ có một chữ số

        const formattedDate = `${year}-${month}-${day}`;
        setToday(formattedDate);
    }
    const Priceticket = async () => {
        try {
            await getPriceTicket(chooseDetailTau.MaChuyenTau).then((res) => {
                setPrice(res[0].Gia);
                setTotalPrice(res[0].Gia * soLuong);
            });
        } catch (error) {
            console.log('lỗi khi lấy giá vé');
        }
    };
    const handleCreateBookTicket = async () => {
        try {
            const dataLSDV = {
                MaCTCT: chooseDetailTau.MaCTCT,
                NgayDatVe: today,
                SoLuongVe: soLuong,
                TongTien: totalPrice,
            };
            const data = { DetailListHK, dataLSDV };
            const config = {
                withCredentials: true,
            };
            await createBookTicket(data, config).then((res) => {
                setTimeout(() => {
                    message.success('Đặt vé thành công');
                }, 50);
                navigate('/home');
            });
        } catch (error) {
            notification.open({
                type: 'error',
                message: 'Thất bại',
                description: 'Vui lòng đăng nhập',
                duration: 2,
            });
        }
    };
    return (
        <div>
            <div>
                <div className="title_HTT d-flex align-items-center">
                    <FontAwesomeIcon className="me-1" icon={faUser} size="lg" />
                    <h5 className="mb-0">Người đặt vé</h5>
                </div>
                <div className="container col-lg-12 d-flex">
                    <div className="col-lg-6">
                        <div className="d-flex">
                            <p>Họ Tên:</p>
                            <b className="ms-3">Hữu</b>
                        </div>
                        <div className="d-flex">
                            <p>Email:</p>
                            <b className="ms-3">emai@gmail.com</b>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="d-flex">
                            <p>Điện thoại:</p>
                            <b className="ms-3">0987654321</b>
                        </div>
                        <div className="d-flex">
                            <p>Thời gian giữ chỗ:</p>
                            <b className="ms-3">15 phút</b>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="title_HTT d-flex align-items-center">
                    <FontAwesomeIcon className="me-1" icon={faLocationDot} size="lg" />
                    <h5 className="mb-0">Hành trình {chooseDetailTau.TenChuyen}</h5>
                </div>
                <div className="container table-container">
                    <table className="col-lg-12">
                        <thead>
                            <tr>
                                <th className="col-lg-1 padding">
                                    <div>STT</div>
                                </th>
                                <th className="col-lg-2 padding">
                                    <div>Hành khách</div>
                                </th>
                                <th className="col-lg-2 padding">
                                    <div>CMND/Hộ chiếu</div>
                                </th>
                                <th className="col-lg-2 padding">
                                    <div>Tàu</div>
                                </th>
                                <th className="col-lg-2 padding">
                                    <div>Ngày</div>
                                </th>
                                <th className="col-lg-1 padding">
                                    <div>Giờ đi</div>
                                </th>
                                <th className="col-lg-2 padding">
                                    <div>Giá (VNĐ)</div>
                                </th>
                            </tr>
                        </thead>
                        {DetailListHK &&
                            DetailListHK.map((value, index) => (
                                <tbody key={index + value.CMNDHK}>
                                    <tr>
                                        <td className="col-lg-1 padding">
                                            <div>{index + 1}</div>
                                        </td>
                                        <td className="col-lg-2 padding">
                                            <div>{value.HoTenHK}</div>
                                        </td>
                                        <td className="col-lg-2 padding">
                                            <div>{value.CMNDHK}</div>
                                        </td>
                                        <td className="col-lg-2 padding">
                                            <div>{chooseDetailTau.TenChuyen}</div>
                                        </td>
                                        <td className="col-lg-2 padding">
                                            <div>{moment(chooseDetailTau.NgayDi).format('DD/MM/YYYY')}</div>
                                        </td>
                                        <td className="col-lg-1 padding">
                                            <div>{`${formatTwoDigits(
                                                new Date(chooseDetailTau.GioDi).getUTCHours(),
                                            )}:${formatTwoDigits(
                                                new Date(chooseDetailTau.GioDi).getUTCMinutes(),
                                            )}`}</div>
                                        </td>
                                        <td className="col-lg-2 padding">
                                            <div>{price}</div>
                                        </td>
                                    </tr>
                                </tbody>
                            ))}
                    </table>
                    <div className="d-flex justify-content-end align-items-center mt-3 me-5">
                        <h5 className="mb-0">
                            Tổng cộng: <b>{totalPrice}</b>
                        </h5>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="title_HTT d-flex align-items-center">
                    <FontAwesomeIcon className="me-1" icon={faCreditCard} size="lg" />
                    <h5 className="mb-0">Phương thức thanh toán</h5>
                </div>
                <div className="col-xs-12 col-sm-4 col-md- col-lg-12 d-flex">
                    <div className="col-xs-12 radio d-flex flex-column align-items-center">
                        <label style={{ fontWeight: '800', textAlign: 'center' }}>
                            <input type="radio" className="me-2" name="thanhtoan" />
                            Nội địa
                        </label>
                        <img src={cardnoidia} alt="a" />
                    </div>
                    <div className="ms-5 col-lg-3 col-md-5 col-xs-12">
                        <label style={{ fontWeight: '800', textAlign: 'center' }}>
                            <input type="radio" className="me-2" name="thanhtoan" />
                            Quốc tế
                        </label>
                        <img src={cardquocte} alt="a" />
                    </div>
                </div>
            </div>
            <div className="me-5 mt-5 d-flex justify-content-end" onClick={handleCreateBookTicket}>
                <button className="btn_thanhtoan ms-5" type="button">
                    Thanh toán
                </button>
            </div>
        </div>
    );
}

export default ThanhToan;
