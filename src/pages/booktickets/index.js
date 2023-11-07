import { faCalendarDays, faMagnifyingGlass, faTrain, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DatePicker, InputNumber, Select, message, notification } from 'antd';
import './booktickets.scss';
import { getALLChuyenTau, searchChuyenTau } from '../../services/BVT_service';
import { useEffect, useState } from 'react';
import { NguoiDatVe, HanhTrinhDi, HanhKhach } from '../../conponent/index.js';
function BookTickets() {
    const [chuyenTau, setChuyenTau] = useState([]);
    const [tenChuyenTau, setTenChuyenTau] = useState();
    const [maChuyenTau, setMaChuyenTau] = useState();
    const [soLuong, setSoLuong] = useState();
    const [date, setDate] = useState();
    const [detailTau, setDetailTau] = useState([]);
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
    return (
        <div className="container">
            <div className="bg-white">
                <div className="p-4">
                    <h5 style={{ textTransform: 'uppercase', color: '#757575' }}>Tìm tuyến</h5>
                    <hr />
                    <div className="d-flex">
                        <div className="col-lg-3 d-flex align-items-center me-3">
                            <FontAwesomeIcon className="me-2" icon={faTrain} size="xl" />
                            <Select
                                placeholder="Tuyến"
                                value={tenChuyenTau}
                                onChange={handleChuyenChange}
                                style={{ width: '100%' }}
                            >
                                {chuyenTau &&
                                    chuyenTau.map((value, index) => (
                                        <Select.Option key={index} value={value.TenChuyen}></Select.Option>
                                    ))}
                            </Select>
                        </div>
                        <div className="col-lg-2 d-flex align-items-center me-3">
                            <FontAwesomeIcon className="me-2" icon={faUserGroup} size="xl" />
                            <InputNumber
                                min={1}
                                max={10}
                                defaultValue={0}
                                onChange={onChangePeople}
                                style={{ width: '100%' }}
                            />
                        </div>
                        <div className="col-lg-3 d-flex align-items-center">
                            <FontAwesomeIcon className="me-2" icon={faCalendarDays} size="xl" />
                            <DatePicker onChange={onChangeDate} />
                        </div>
                        <div className="col-lg-3 d-flex justify-content-end" onClick={OnclickSearchTau}>
                            <button className="btn_searchTrain">
                                <FontAwesomeIcon
                                    className="me-2"
                                    icon={faMagnifyingGlass}
                                    size="xl"
                                    style={{ color: '#ffffff' }}
                                />
                                Tìm tàu
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5  p-0">
                <div className="bg-white">
                    <div className="title d-flex justify-content-center align-items-center">
                        <h3 className="mb-0">Tuyến</h3>
                    </div>
                    <div className="step_one">
                        {/* <HanhTrinhDi value={detailTau} /> */}
                        <NguoiDatVe />
                        <HanhKhach />
                        <nav className="navbar btn-toolbar sw-toolbar sw-toolbar-bottom d-flex justify-content-end px-4 pt-5 pb-4">
                            <div className="btn-group navbar-btn sw-btn-group pull-right" role="group">
                                <button className="btn btn-default sw-btn-prev disabled" type="button">
                                    Trở lại
                                </button>
                                <button className="btn btn-default sw-btn-next" type="button">
                                    Tiếp tục
                                </button>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookTickets;
