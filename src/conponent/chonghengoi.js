import './component.scss';
function ChonGheNgoi() {
    return (
        <>
            <div className="container">
                <div className="mt-4">
                    <p className="tilet_luotdi">Lượt đi</p>
                </div>
                <div className="d-flex">
                    <div className="col-lg-6 pe-3">
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
                            <tbody>
                                <tr className="col-lg-12 d-flex justify-content-between align-items-center value_table">
                                    <td className="col-lg-1">
                                        <input type="radio" name="checkbtn" />
                                    </td>
                                    <td className="col-lg-1 d-flex justify-content-center">1</td>
                                    <td className="col-lg-5 d-flex justify-content-center">Hữu</td>
                                    <td className="col-lg-2 d-flex justify-content-center">1A</td>
                                    <td className="col-lg-3 d-flex justify-content-center">Người lớn</td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                    <div className="col-lg-6">
                        <div className="col-lg-12">
                            <h4>Vị trí chỗ ngồi</h4>
                        </div>
                        <div className="col-lg-12">
                            <button className="btn_vitri">1A</button>
                            <button className="btn_vitri">1A</button>
                            <button className="btn_vitri">1A</button>
                            <button className="btn_vitri">1A</button>
                            <button className="btn_vitri">1A</button>
                            <button className="btn_vitri">1A</button>
                            <button className="btn_vitri">1A</button>
                            <button className="btn_vitri">1A</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ChonGheNgoi;
