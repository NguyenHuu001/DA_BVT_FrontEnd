import { faCalendarDays, faMagnifyingGlass, faTrain, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DatePicker, InputNumber, Select } from 'antd';
import '../pages/booktickets/booktickets.scss';
import { ChonGheNgoi, HanhKhach, HanhTrinhDi, NguoiDatVe } from '../conponent/index.js';
import { BookTicketContext } from '../contexts/bookticketcontext.js';
import { useContext } from 'react';
import ThanhToan from './thanhtoan.js';

function WrapBookTicket(hideNavbar) {
    const {
        tenChuyenTau,
        handleChuyenChange,
        chuyenTau,
        onChangePeople,
        onChangeDate,
        OnclickSearchTau,
        step,
        title,
        handleNext,
        handleBack,
        detailTau,
    } = useContext(BookTicketContext);
    return (
        <div className={`container mt-5 p-0 ${hideNavbar ? 'hide-navbar' : ''}`}>
            <div className="bg-white">
                <div className="p-4">
                    <h5 style={{ textTransform: 'uppercase', color: '#757575' }}>Tìm tuyến</h5>
                    <hr />
                    <div className="d-flex flex-wrap">
                        <div className="col-lg-3 col-xs-12 mb-2  d-flex align-items-center me-3 ">
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
                        <div className="col-lg-2 col-xs-12 mb-2  d-flex align-items-center me-3">
                            <FontAwesomeIcon className="me-2" icon={faUserGroup} size="xl" />
                            <InputNumber
                                min={1}
                                max={200}
                                defaultValue={0}
                                onChange={onChangePeople}
                                style={{ width: '100%' }}
                            />
                        </div>
                        <div className="col-lg-3 col-xs-12 mb-2  d-flex align-items-center">
                            <FontAwesomeIcon className="me-2" icon={faCalendarDays} size="xl" />
                            <DatePicker onChange={onChangeDate} />
                        </div>
                        <div className="col-lg-3 col-xs-12 mb-2  d-flex justify-content-end" onClick={OnclickSearchTau}>
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
                    {!hideNavbar && (
                        <div className="title d-flex justify-content-center align-items-center">
                            <h3 className="mb-0">{title}</h3>
                        </div>
                    )}

                    {step === 0 && <HanhTrinhDi value={detailTau} />}
                    {step === 1 && <NguoiDatVe />}
                    {step === 2 && <HanhKhach />}
                    {step === 3 && <ChonGheNgoi />}
                    {step === 4 && <ThanhToan />}

                    <nav className="navbar btn-toolbar sw-toolbar sw-toolbar-bottom d-flex justify-content-end px-4 pt-5 pb-4">
                        <div className="btn-group navbar-btn sw-btn-group pull-right " role="group">
                            <button className="btn btn-default sw-btn-prev default" type="button" onClick={handleBack}>
                                Trở lại
                            </button>
                            <button className="btn btn-default sw-btn-next" type="button" onClick={handleNext}>
                                Tiếp tục
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default WrapBookTicket;
