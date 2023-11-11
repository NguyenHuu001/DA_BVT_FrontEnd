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
    const [step, setStep] = useState(0);
    const [title, setTitle] = useState(arr_titile[0]);
    // hành trình đi
    const [bookingDetails, setBookingDetails] = useState([]);
    const [chooseDetailTau, setChooseDetaiTau] = useState([]);
    //Người đặt vé
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    //hành khách
    const [hanhKhachList, setHanhKhachList] = useState([]);
    // const [CMNDHK, setCMNDHK] = useState('');
    // const [hoTenHK, setHoTenHK] = useState('');
    // const [EmailHK, setEmaiHK] = useState('');
    // const [NoiSinhHK, setNoiSinhHK] = useState('');
    // const [ngaysinhHK, setNgaySinhHK] = useState('');
    // const [SDTHK, setSDTHK] = useState('');
    // const [quocTichHK, setQuocTichHK] = useState('');

    //
    useEffect(() => {
        getALLTau();
    }, [detailTau]);
    useEffect(() => {
        updateChooseTau(chooseDetailTau);
    }, [chooseDetailTau]);
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
            setChooseDetaiTau([]);
            if (step !== 0) setStep(0);
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
        if (step === 2) setDetailHK();
        if (step === 0 && chooseDetailTau.length === 0) {
            notification.open({
                type: 'error',
                message: 'Thất bại',
                description: 'Vui lòng chọn tuyến đi',
                duration: 1,
            });
        } else if (step === 1 && (!fullName || !phoneNumber || !email)) {
            notification.open({
                type: 'error',
                message: 'Thất bại',
                description: 'Vui lòng nhập đủ thông tin',
                duration: 1,
            });
        } else {
            step === 3 ? setTitle(arr_titile[step]) : setTitle(arr_titile[step + 1]);
            step === 3 ? setStep(step) : setStep(step + 1);
        }
    };
    const handleBack = () => {
        step === 0 ? setTitle(arr_titile[step]) : setTitle(arr_titile[step - 1]);
        step === 0 ? setStep(0) : setStep(step - 1);
        if (step === 1) setChooseDetaiTau([]);
    };
    // hành trình đi
    const updateChooseTau = (dataTau) => {
        setChooseDetaiTau(dataTau);
    };
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
    //hành khách
    useEffect(() => {
        createHanhKhachList(soLuong);
    }, [soLuong]);
    const setDetailHK = () => {
        console.log(hanhKhachList);
    };
    const createHanhKhachList = (soLuong) => {
        const listKH = [];
        for (let i = 0; i < soLuong; i++) {
            const newHanhKhach = {
                CMNDKH: '',
                HoTenHK: '',
                EmailKH: '',
                NoiSinhKH: '',
                NgaySinhKH: null,
                SDTKH: '',
                QuocTichKH: '',
            };
            listKH.push(newHanhKhach);
        }
        setHanhKhachList(listKH);
    };
    const handleInputChange = (index, fieldName, value) => {
        setHanhKhachList((prevList) => {
            const updatedList = [...prevList];
            const updatedHanhKhach = { ...updatedList[index], [fieldName]: value };
            updatedList[index] = updatedHanhKhach;
            return updatedList;
        });
    };

    return (
        <BookTicketContext.Provider
            value={{
                fullName,
                phoneNumber,
                email,
                detailTau,
                step,
                title,
                bookingDetails,
                chuyenTau,
                tenChuyenTau,
                chooseDetailTau,
                soLuong,
                hanhKhachList,
                updateBookingDetails,
                updateNDV,
                handleChuyenChange,
                onChangePeople,
                onChangeDate,
                OnclickSearchTau,
                handleNext,
                handleBack,
                updateChooseTau,
                
                handleInputChange,
            }}
        >
            {children}
        </BookTicketContext.Provider>
    );
};
