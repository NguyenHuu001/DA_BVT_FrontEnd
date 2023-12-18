import React from 'react';
import './contact.scss';
import certificate from '../../assets/imgs/certificate.png';
import Number from '../../assets/imgs/1-Number.png';
import teacher from '../../assets/imgs/teacher.png';
import ong from '../../assets/imgs/ong.png';
import R from '../../assets/imgs/R.png';
import voi from '../../assets/imgs/voi.png';
import truso from '../../assets/imgs/truso.png';
const Contact = () => {
    return (
        <div className="container-fluid" style={{ fontFamily: 'Roboto' }}>
            <div className="card">
                <div className="card-body">
                    <div className="text-center" style={{ fontSize: '30px', fontWeight: 'bold', color: '#2E74B5' }}>
                        Sự hài lòng của quý khách là niềm vui của chúng tôi
                    </div>
                    <p
                        className="text-center"
                        style={{
                            fontSize: '30px',
                            fontWeight: 'bold',
                            color: '#2E74B5',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        Tự hào là chất lượng phục vụ số <img src={Number} alt="1-Number" height="30px" />
                        Việt Nam
                    </p>
                    <div className="row">
                        <div className="col-sm-12">
                            <fieldset style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <legend className="text-primary">CHỈ ĐẠO SẢN XUẤT</legend>
                                <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                                    <div style={{ flex: '1' }}>
                                        <strong>Tên: </strong>Đào Minh Châu
                                        <br />
                                        <strong>Email:</strong>
                                        <a href="mailto:chaudm@hufi.edu.vn">
                                            chaudm@hufi.edu.vn
                                            <br />
                                        </a>
                                    </div>
                                    <img src={teacher} alt="Teacher" height="100px" style={{ marginLeft: '40px' }} />
                                </div>
                            </fieldset>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <fieldset style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <legend className="text-primary">NHÂN VIÊN THỰC TẬP</legend>
                                <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                                    <div style={{ flex: '1' }}>
                                        <strong>Tên: </strong>Nguyễn Bảo Kha
                                        <br />
                                        <strong>MSSV: </strong>2001206990
                                        <br />
                                        <strong>SĐT:</strong>
                                        <a href="tel:0352621152">
                                            0352621152
                                            <br />
                                        </a>
                                        <strong>Email:</strong>
                                        <a href="mailto:baokha120802@icloud.com">
                                            baokha120802@icloud.com
                                            <br />
                                        </a>
                                    </div>
                                    <img src={ong} alt="ong" height="100px" style={{ marginLeft: '40px' }} />
                                </div>
                            </fieldset>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <fieldset style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <legend className="text-primary">GIÁM ĐỐC ĐIỀU HÀNH</legend>
                                <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                                    <div style={{ flex: '1' }}>
                                        <strong>Tên: </strong>Nguyễn Đức Hữu
                                        <br />
                                        <strong>MSSV: </strong>2001200506
                                        <br />
                                        <strong>Email:</strong>
                                        <a href="mailto:nguyenduchuu2k2@gmail.com">
                                            nguyenduchuu2k2@gmail.com
                                            <br />
                                        </a>
                                    </div>
                                    <img src={R} alt="R" height="100px" style={{ marginLeft: '20px' }} />
                                </div>
                            </fieldset>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <fieldset style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <legend className="text-primary">NHÂN VIÊN THIẾT KẾ</legend>
                                <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                                    <div style={{ flex: '1' }}>
                                        <strong>Tên: </strong>Huỳnh Quốc Cường
                                        <br />
                                        <strong>MSSV: </strong>2001202026
                                        <br />
                                        <strong>Email:</strong>
                                        <a href="mailto:cuongpro0126@gmail.com">
                                            cuongpro0126@gmail.com
                                            <br />
                                        </a>
                                    </div>
                                    <img src={voi} alt="voi" height="100px" style={{ marginLeft: '20px' }} />
                                </div>
                            </fieldset>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <fieldset style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <legend className="text-primary">TRỤ SỞ CHÍNH</legend>
                                <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                                    <div style={{ flex: '1' }}>
                                        <strong>ĐỊA CHỈ: </strong>140 Lê Trọng Tấn, phường Tây Thạnh, quận Tân Phú, Hồ
                                        Chí Minh
                                        <br />
                                        <strong>Hotline:</strong>
                                        <a href="tel:(028) 3816 1673">
                                            02838161673
                                            <br />
                                        </a>
                                    </div>
                                    <img src={truso} alt="truso" height="100px" style={{ marginLeft: '20px' }} />
                                </div>
                            </fieldset>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-5 col-md-6 col-12">
                            <a a href="http://online.gov.vn/HomePage/CustomWebsiteDisplay.aspx?DocId=43461">
                                <img src={certificate} alt="certificate" height="75px" />
                            </a>
                        </div>
                        <div className="row justify-content-between">
                            <div
                                className="col-sm-6 col-md-6 link-footer"
                                style={{ fontSize: '13px', fontFamily: 'Roboto', color: '#245EAB' }}
                            >
                                <ul>
                                    <li>Khách hàng là thượng đế</li>
                                    <li>Chất lượng là cách xây dựng thương hiệu tốt nhất</li>
                                </ul>
                            </div>
                            <div
                                className="col-sm-6 col-md-6 link-footer"
                                style={{ fontSize: '13px', color: '#245EAB' }}
                            >
                                <ul>
                                    <li>Uy tín làm nên thương hiệu</li>
                                    <li>Nơi xứng đáng để bạn trao trọn niềm tin</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
