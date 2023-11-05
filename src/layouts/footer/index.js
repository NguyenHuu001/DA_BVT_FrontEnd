import './footer.scss';
function Footer() {
    return (
        <footer className="container-fluid footer-bg">
            <div className="container d-flex flex-wrap" style={{ color: '#fff', lineHeight:'20px' }}>
                <div className="col-lg-4 col-sm-12 p-5">
                    <h5 style={{ textTransform: 'uppercase', fontWeight: '500' }}>Hỗ trợ online</h5>
                    <p>104 Nguyễn Văn Trần, Phường Trần Đại Nghĩa, TP.HCM</p>
                    <div className="d-flex flex-wrap">
                        <p className='mb-0'>Website:</p>
                        <a
                            className="ms-2 mb-3"
                            style={{ textDecoration: 'none', color: '#01bcd4' }}
                            href="https://github.com/NguyenHuu001"
                        >
                            https://github.com/NguyenHuu001
                        </a>
                    </div>
                    <div className="d-flex flex-wrap">
                        <p className='mb-0'>Email:</p>
                        <a
                            className="ms-2 mb-3"
                            style={{ textDecoration: 'none', color: '#01bcd4' }}
                            href="https://github.com/NguyenHuu001"
                        >
                            https://github.com/NguyenHuu001
                        </a>
                    </div>
                    <div className="d-flex flex-wrap">
                        <p className="me-2">Đường dây nóng:</p> <p style={{ fontWeight: '600' }}>0987765876</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 p-5">
                    <h5 style={{ textTransform: 'uppercase', fontWeight: '500' }}>Phòng vé Chi Nhánh</h5>
                    <p>Ấp Bãi Nhà, Xã Lại Sơn, Huyện Kiên Hải, Tỉnh Kiên Giang</p>
                </div>
                <div className="col-lg-4 col-sm-6 p-5">
                    <h5 style={{ textTransform: 'uppercase', fontWeight: '500' }}>Phòng vé Chi Nhánh</h5>
                    <p>Ấp Bãi Nhà, Xã Lại Sơn, Huyện Kiên Hải, Tỉnh Kiên Giang</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
