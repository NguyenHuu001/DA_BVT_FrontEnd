import { createContext, useEffect, useState } from 'react';
import { getDetailKH } from '../services/BVT_service';
import { getALLChuyenTau, searchChuyenTau } from '../services/BVT_service';
import { message, notification } from 'antd';

export const BookTicketContext = createContext({});

export const BookTicketProvider = ({ children }) => {
    //wrapbooktticket
    const arr_titile = ['tuyến', 'người đặt vé', 'hành khách', 'chọn ghế ngồi'];
    const [chuyenTau, setChuyenTau] = useState([]);
    const [soLuong, setSoLuong] = useState();
    const [date, setDate] = useState();
    const [detailTau, setDetailTau] = useState([]);
    const [tenChuyenTau, setTenChuyenTau] = useState();
    const [maChuyenTau, setMaChuyenTau] = useState();
    const [step, setStep] = useState(1);
    const [title, setTitle] = useState(arr_titile[0]);
    useEffect(() => {
        getALLTau();
    }, [detailTau]);
    const onChangeDate = (date, dateString) => {
        setDate(dateString);
    };
    const onChangePeople = (value) => {
        setSoLuong(value);
    };
    const getALLTau = async () => {
        try {
            await getALLChuyenTau().then((res) => {
                setChuyenTau(res);
            });
        } catch (error) {
            console.log('Lỗi khi lấy chuyến tàu');
        }
    };
    const handleChuyenChange = (value, option) => {
        setTenChuyenTau(value);
        setMaChuyenTau(parseInt(option.key) + 1);
    };

    const OnclickSearchTau = async () => {
        try {
            // if (step !== 1) setStep(1);
            if (!maChuyenTau || !soLuong || !date) {
                notification.open({
                    type: 'error',
                    message: 'Thất bại',
                    description: 'Vui lòng nhập đầy đủ thông tin',
                    duration: 1,
                });
                return null;
            }
            await searchChuyenTau(maChuyenTau, soLuong, date).then((res) => {
                if (res.length > 0) {
                    setDetailTau(res);
                } else {
                    setDetailTau(res);
                    setTimeout(() => {
                        message.error('Không có chuyến');
                    }, 50);
                }
            });
        } catch (error) {
            console.log('lỗi ở tìm kiếm tàu');
        }
    };
    const handleNext = () => {
        if (detailTau.length === 0) {
            notification.open({
                type: 'error',
                message: 'Thất bại',
                description: 'Vui lòng tìm tuyến đi',
                duration: 1,
            });
        } else {
            step === 4 ? setTitle(arr_titile[3]) : setTitle(arr_titile[step]);
            step === 4 ? setStep(4) : setStep(step + 1);
        }
    };
    const handleBack = () => {
        step === 1 ? setTitle(arr_titile[0]) : setTitle(arr_titile[step - 2]);
        step === 1 ? setStep(1) : setStep(step - 1);
    };
    // hành trình State
    const [bookingDetails, setBookingDetails] = useState([]);
    //Người đặt vé State
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    // hành trình
    const updateBookingDetails = (newDetails) => {
        setBookingDetails(newDetails);
    };
    //Người đặt vé
    useEffect(() => {
        getTTKH();
    }, []);
    useEffect(() => {}, [fullName, phoneNumber, email]);
    const getTTKH = async () => {
        try {
            const config = {
                withCredentials: true,
            };
            await getDetailKH(config).then((res) => {
                if (res.length > 0) {
                    const value = res[0];
                    setFullName(value.TenKH);
                    setPhoneNumber(value.SoDienThoai);
                    setEmail(value.Email);
                }
            });
        } catch (error) {
            console.log('Lấy thông tin khách hàng lỗi:', error);
        }
    };
    const updateNDV = (Hoten, SDT, Gmail) => {
        setFullName(Hoten);
        setPhoneNumber(SDT);
        setEmail(Gmail);
        if (!fullName && !SDT && !Gmail) setStep(1);
    };
    return (
        <BookTicketContext.Provider
            value={{
                updateBookingDetails,
                fullName,
                phoneNumber,
                email,
                updateNDV,
                tenChuyenTau,
                handleChuyenChange,
                chuyenTau,
                onChangePeople,
                onChangeDate,
                OnclickSearchTau,
                handleNext,
                handleBack,
                detailTau,
                step,
                title,
            }}
        >
            {children}
        </BookTicketContext.Provider>
    );
};
