import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import flagEng from '../../assets/imgs/flag_english.png';
import flagVietNam from '../../assets/imgs/flag_VietNam.png';
import { faPenToSquare, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/imgs/sv_logo_dashboard.png';
import './header.scss';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <>
            <div className="container-fluid p-0">
                <div className="container-fluid p-0 bg-login">
                    <div
                        className="container d-flex align-items-center justify-content-end "
                        style={{ height: '40px' }}
                    >
                        <div className="d-flex">
                            <div className="ms-5 login-logout">
                                <img src={flagEng} alt="flag English" style={{ height: '18px' }} />
                            </div>
                            <div className="ms-5 login-logout">
                                <img src={flagVietNam} alt="flag VietNam" style={{ height: '18px' }} />
                            </div>
                            <Link to="/register" style={{ textDecoration: 'none' }}>
                                <div className="ms-5 login-logout">
                                    <FontAwesomeIcon icon={faPenToSquare} />
                                    <span>Đăng ký</span>
                                </div>
                            </Link>
                            <Link to="/login" style={{ textDecoration: 'none' }}>
                                <div className="ms-5 login-logout">
                                    <FontAwesomeIcon icon={faRightToBracket} />
                                    <span>Đăng Nhập</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="nav-bg">
                <div className="container d-flex flex-nowrap" style={{ height: '100%' }}>
                    <div className="col-md-6 d-flex align-items-center" style={{ height: '100%' }}>
                        <img src={logo} style={{ height: '70%' }} alt="logo" />
                    </div>
                    <div className="col-md-6 d-flex justify-content-end align-items-end mb-4">
                        <div className="ms-4">
                            <span className="nav_items">Trang chủ</span>
                        </div>
                        <div className="ms-4">
                            <span className="nav_items">Đặt vé</span>
                        </div>
                        <div className="ms-4">
                            <span className="nav_items">Liên hệ</span>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
