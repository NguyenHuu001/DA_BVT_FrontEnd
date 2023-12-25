import { Breadcrumb, Button, Col, Divider, Popconfirm, Table, notification } from 'antd';
import BreadcrumbItem from 'antd/es/breadcrumb/BreadcrumbItem';
import { Link } from 'react-router-dom';

import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { deleteTrain, getDetailTrains } from '../../services/BVT_service';
const ChuyenTau = () => {
    const [detailTrains, setDetailTrains] = useState([]);

    useEffect(() => {
        getAlllTrains();
    }, []);
    const getAlllTrains = async () => {
        try {
            const config = {
                withCredentials: true,
            };
            await getDetailTrains(config).then((res) => {
                setDetailTrains(res);
            });
        } catch (error) {}
    };
    const formatTwoDigits = (number) => {
        return number < 10 ? `0${number}` : `${number}`;
    };
    let dataSource = [];

    detailTrains?.map((item, i) => {
        const ngayDiFormatted = dayjs(item.NgayDi).format('YYYY/MM/DD');
        const gioDiFormatted =
            formatTwoDigits(new Date(item.GioDi).getUTCHours()) +
            ':' +
            formatTwoDigits(new Date(item.GioDi).getUTCMinutes());

        dataSource.push({
            key: i + 1,
            MaChuyenTau: item.MaCTCT,
            TenChuyen: item.TenChuyen,
            NgayDi: ngayDiFormatted,
            GioDi: gioDiFormatted,
            TinhTrang: item.TinhTrang,
        });
    });

    const columns = [
        {
            title: 'Tên chuyến',
            dataIndex: 'TenChuyen',
            key: 'TenChuyen',
        },
        {
            title: 'Ngày đi',
            dataIndex: 'NgayDi',
            key: 'NgayDi',
        },
        {
            title: 'Giờ đi',
            dataIndex: 'GioDi',
            key: 'GioDi',
        },
        {
            title: 'Tình trạng',
            dataIndex: 'TinhTrang',
            key: 'TinhTrang',
            render: (text, record) => (
                <span style={{ color: record.TinhTrang === 'Bình thường' ? 'green' : 'red', fontWeight: 'bold' }}>
                    {text}
                </span>
            ),
        },
        {
            title: 'Công cụ',
            fixed: 'right',
            dataIndex: 'MaChuyenTau',
            width: 200,
            render: (MaChuyenTau) => (
                <>
                    <Col>
                        <Link to={`/chuyen-tau/${MaChuyenTau}`}>
                            {' '}
                            <Button type="default" onClick={() => confirm(MaChuyenTau)}>
                                Sửa
                            </Button>
                        </Link>

                        <Popconfirm
                            title="Xóa dữ liệu"
                            description="Bạn chắc xóa dữ liệu này?"
                            onConfirm={() => confirmDelete(MaChuyenTau)}
                            okText="Đồng ý"
                            cancelText="Hủy"
                        >
                            <Button type="default" style={{ color: 'red' }}>
                                Xóa
                            </Button>
                        </Popconfirm>
                    </Col>
                </>
            ),
        },
    ];

    //Api xóa thì mở cái này ra
    const confirmDelete = async (id) => {
        try {
            const config = {
                withCredentials: true,
            };
            console.log(id);
            await deleteTrain(id, config);
            notification.open({
                type: 'success',
                message: 'Cập nhật thông tin chuyến tàu thành công!',
                description: '',
                duration: 1,
            });
            getAlllTrains();
        } catch (error) {
            notification.open({
                type: 'error',
                message: 'Xóa thất bại',
                description: '',
                duration: 1,
            });
        }
    };
    const confirm = async (id) => {};
    return (
        <>
            <div className="container flex flex-wrap mt-32 ">
                <div className="w-full mb-12 px-4">
                    <h1 style={{ textTransform: 'uppercase', fontWeight: '600', color: '#fff', textAlign: 'center' }}>
                        Tất cả chuyến tàu
                    </h1>
                    <div className="relative">
                        <Divider orientation="left" className="text-white">
                            <Link to={'/chuyen-tau/them'} style={{ textDecoration: 'none' }}>
                                <Button
                                    type="default"
                                    className="bg-gray"
                                    shape="round"
                                    icon={<i className="fas fa-plus"></i>}
                                >
                                    Thêm chuyến tàu
                                </Button>
                            </Link>{' '}
                        </Divider>
                        <Breadcrumb style={{ color: 'white' }}>
                            <BreadcrumbItem style={{ color: 'white' }}>Chức năng</BreadcrumbItem>
                            {/* <BreadcrumbItem style={{ color: 'white' }}>chuyến tàu</BreadcrumbItem> */}
                        </Breadcrumb>
                        <Table dataSource={dataSource} columns={columns} />;
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChuyenTau;
