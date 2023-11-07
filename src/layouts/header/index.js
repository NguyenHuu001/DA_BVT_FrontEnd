import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import flagEng from '../../assets/imgs/flag_english.png';
import flagVietNam from '../../assets/imgs/flag_VietNam.png';
import { faPenToSquare, faRightFromBracket, faRightToBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/imgs/sv_logo_dashboard.png';
import './header.scss';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { notification } from 'antd';
function Header() {
    const navigate = useNavigate();
    const fullName = localStorage.getItem('userName');
    const [token, setToken] = useState();
    useEffect(() => {}, [token]);

    const logOut = () => {
        localStorage.clear('userName');
        Cookies.remove('Token');
        notification.open({
            type: 'success',
            message: 'Đăng xuất thành công',
            description: '',
            duration: 1,
        });
        navigate('/login');
    };
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
                            {fullName ? (
                                <>
                                    <Link to="#" style={{ textDecoration: 'none' }}>
                                        <div className="ms-5 login-logout">
                                            <FontAwesomeIcon className="me-2" icon={faUser} />
                                            <span>{fullName}</span>
                                        </div>
                                    </Link>
                                    <div className="ms-5 login-logout" onClick={logOut}>
                                        <FontAwesomeIcon className="me-2" icon={faRightFromBracket} />
                                        <span>Đăng Xuất</span>
                                    </div>
                                </>
                            ) : (
                                <>
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
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <nav className="nav-bg">
                <div className="container d-flex flex-nowrap" style={{ height: '100%' }}>
                    <div className="col-md-6 d-flex align-items-center" style={{ height: '100%' }}>
                        <img src={logo} style={{ height: '70%', objectFit: 'contain' }} alt="logo" />
                    </div>
                    <div className="col-md-6 d-flex justify-content-end align-items-end mb-4">
                        <Link to="/home" style={{ textDecoration: 'none' }}>
                            <div className="ms-4">
                                <span className="nav_items">Trang chủ</span>
                            </div>
                        </Link>
                        <Link to="/booktickets" style={{ textDecoration: 'none' }}>
                            <div className="ms-4">
                                <span className="nav_items">Đặt vé</span>
                            </div>
                        </Link>
                        <Link to="#" style={{ textDecoration: 'none' }}>
                            <div className="ms-4">
                                <span className="nav_items">Liên hệ</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
