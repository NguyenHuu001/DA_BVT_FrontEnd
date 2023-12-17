import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment/moment';
import { useContext, useEffect, useState } from 'react';
import { BookTicketContext } from '../contexts/bookticketcontext';
import './component.scss';
function HanhTrinhDi(detailTau) {
    const { updateBookingDetails, updateChooseTau } = useContext(BookTicketContext);
    useEffect(() => {
        updateBookingDetails(detailTau.value);
    }, [detailTau.value]);
    const formatTwoDigits = (number) => {
        return number < 10 ? `0${number}` : `${number}`;
    };
    const handleRadioChange = (value) => {
        updateChooseTau(value);
    };
    return (
        <div className="step_one" style={{ overflowX: 'auto' }}>
            <div className="title_HTT d-flex align-items-center">
                <FontAwesomeIcon className="me-1" icon={faLocationDot} size="lg" />
                <h5 className="mb-0">Hành trình đi</h5>
            </div>
            <div className="d-flex">
                <div className="title_table col-lg-6">Tàu</div>
                <div className="title_table col-lg-2">Ngày</div>
                <div className="title_table col-lg-2">Giờ khởi hành</div>
                <div className="title_table col-lg-2">Tình trạng</div>
            </div>
            <hr className="mt-1" />
            {detailTau.value.length > 0 ? (
                detailTau.value.map((value, index) => (
                    <div className="d-flex mt-3" key={index + value.NgayDi} style={{ backgroundColor: '#f5f5f5' }}>
                        <label className="value_tablecd col-lg-6 cusor_check" htmlFor={`chuyendi_id${index}`}>
                            <input
                                className="value_tablecd me-2 cusor_check"
                                id={`chuyendi_id${index}`}
                                name="chuyendi_name"
                                type="radio"
                                onChange={() => handleRadioChange(value)}
                            />
                            {value.TenChuyen}
                        </label>
                        <label className="value_tablecd col-lg-2 cusor_check" htmlFor={`chuyendi_id${index}`}>
                            {moment(value.NgayDi).format('DD/MM/YYYY')}
                        </label>
                        <label className="value_tablecd col-lg-2 cusor_check" htmlFor={`chuyendi_id${index}`}>
                            {`${formatTwoDigits(new Date(value.GioDi).getUTCHours())}:${formatTwoDigits(
                                new Date(value.GioDi).getUTCMinutes(),
                            )}`}
                        </label>
                        <label className="value_tablecd col-lg-2 cusor_check" htmlFor={`chuyendi_id${index}`}>
                            {value.TinhTrang}
                        </label>
                    </div>
                ))
            ) : (
                <div className="container d-flex justify-content-center">
                    <p>Không có dữ liệu</p>
                </div>
            )}
        </div>
    );
}

export default HanhTrinhDi;
