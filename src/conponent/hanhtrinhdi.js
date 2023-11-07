import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment/moment';
import { useEffect } from 'react';
function HanhTrinhDi(detailTau) {
    return (
        <>
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
            <hr />
            {detailTau.value.length > 0 ? (
                detailTau.value.map((value, index) => (
                    <div className="d-flex" key={index + value.NgayDi}>
                        <div className="value_table col-lg-6">
                            <input className="value_table me-2" type="radio" />
                            {value.TenChuyen}
                        </div>
                        <div className="value_table col-lg-2">{moment(value.NgayDi).format('DD/MM/YYYY')}</div>
                        <div className="value_table col-lg-2">{moment(value.GioDi, 'HH:mm:ss').format('HH:mm')}</div>
                        <div className="value_table col-lg-2">{value.TinhTrang}</div>
                    </div>
                ))
            ) : (
                <div className="container d-flex justify-content-center">
                    <p>Không có dữ liệu</p>
                </div>
            )}
        </>
    );
}

export default HanhTrinhDi;
