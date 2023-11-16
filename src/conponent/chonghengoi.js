import React, { useContext, useEffect, useState } from 'react';
import { getALLChuyenTau } from '../services/BVT_service';
import './component.scss';
import { BookTicketContext } from '../contexts/bookticketcontext';
import { notification } from 'antd';
function ChonGheNgoi() {
    const { allGheNgoi, DetailListHK, updateDetailHKList, fecthAllChuyenTau } = useContext(BookTicketContext);
    const [index, setIndex] = useState();
    useEffect(() => {
        fecthAllChuyenTau();
    }, []);
    const handleRadioChange = (value) => {
        setIndex(value);
    };
    const checkChoose = (maGhe) => {
        return DetailListHK.some((value) => value.MaGhe === maGhe);
    };
    const handleGheChange = (maGhe, TenGhe) => {
        index === undefined
            ? notification.open({
                  type: 'error',
                  message: 'Thất bại',
                  description: 'Vui lòng chọn hành khách mà bạn muốn đổi, trước khi chọn ghế! ',
                  duration: 2,
              })
            : updateDetailHKList(index, maGhe, TenGhe);
    };
    return (
        <>
            <div className="ms-3 positon_sticky col-lg-6">
                <div className="mt-4">
                    <p className="tilet_luotdi">Lượt đi</p>
                </div>
                <div className=" pe-3 ">
                    <table className="col-lg-12">
                        <thead className="col-lg-12 ">
                            <tr className="col-lg-12 d-flex justify-content-between header_table">
                                <th className="col-lg-1 d-flex"></th>
                                <th className="col-lg-1 d-flex justify-content-center">STT</th>
                                <th className="col-lg-5 d-flex justify-content-center">Họ tên</th>
                                <th className="col-lg-2 d-flex justify-content-center">Ghế đi</th>
                                <th className="col-lg-3 d-flex justify-content-center">Loại vé</th>
                            </tr>
                        </thead>
                        {DetailListHK &&
                            DetailListHK.map((value, index) => (
                                <tbody key={value + index}>
                                    <tr className="col-lg-12 d-flex justify-content-between align-items-center value_table">
                                        <td className="col-lg-1">
                                            <input
                                                type="radio"
                                                name="checkbtn"
                                                id={`hanhkhach_id${index}`}
                                                onChange={() => handleRadioChange(index)}
                                            />
                                        </td>
                                        <td className="col-lg-1 d-flex justify-content-center">
                                            <label htmlFor={`hanhkhach_id${index}`}>{index + 1}</label>
                                        </td>
                                        <td className="col-lg-5 d-flex justify-content-center">
                                            <label htmlFor={`hanhkhach_id${index}`}>{value.HoTenHK}</label>
                                        </td>
                                        <td className="col-lg-2 d-flex justify-content-center">
                                            <label htmlFor={`hanhkhach_id${index}`}>{value.TenGhe}</label>
                                        </td>
                                        <td className="col-lg-3 d-flex justify-content-center">
                                            <label htmlFor={`hanhkhach_id${index}`}>Người lớn</label>
                                        </td>
                                    </tr>
                                </tbody>
                            ))}
                    </table>
                </div>
            </div>
            <div className="container" style={{ position: 'relative', top: '-180px' }}>
                <div className="d-flex justify-content-end">
                    <div className="col-lg-6">
                        <div className="col-lg-12">
                            <h4>Vị trí chỗ ngồi</h4>
                        </div>

                        <div className="col-lg-12 d-flex flex-wrap">
                            {allGheNgoi &&
                                allGheNgoi.map((value, index) => (
                                    <React.Fragment key={value + index}>
                                        {value.MaGhe <= 6 ? (
                                            <div className="mb-3 col-lg-4">
                                                <button
                                                    className="btn_vitri "
                                                    style={{
                                                        backgroundColor:
                                                            (value.MaKhachDiChung && '#EE4E4E') ||
                                                            (checkChoose(value.MaGhe) ? '#092c7a' : ''),
                                                        color:
                                                            (value.MaKhachDiChung && '#fff') ||
                                                            (checkChoose(value.MaGhe) ? '#fff' : ''),
                                                    }}
                                                    onClick={() => {
                                                        handleGheChange(value.MaGhe, value.TenGhe);
                                                    }}
                                                >
                                                    {value.TenGhe}
                                                </button>
                                            </div>
                                        ) : (
                                            <div className="mb-3 col-lg-3">
                                                <button
                                                    className="btn_vitri "
                                                    style={{
                                                        backgroundColor:
                                                            (value.MaKhachDiChung && '#EE4E4E') ||
                                                            (checkChoose(value.MaGhe) ? '#092c7a' : ''),
                                                        color:
                                                            (value.MaKhachDiChung && '#fff') ||
                                                            (checkChoose(value.MaGhe) ? '#fff' : ''),
                                                    }}
                                                    onClick={() => {
                                                        handleGheChange(value.MaGhe, value.TenGhe);
                                                    }}
                                                >
                                                    {value.TenGhe}
                                                </button>
                                            </div>
                                        )}
                                    </React.Fragment>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ChonGheNgoi;
