import { Breadcrumb, Button, Col, Popconfirm, Table, notification } from 'antd';
import BreadcrumbItem from 'antd/es/breadcrumb/BreadcrumbItem';
import React from 'react';
import useAsync from '../../hook/useAsync';
import { Link } from 'react-router-dom';
import { getAllKhachHang, deleteKhachHang } from '../../services/BVT_service';
import dayjs from 'dayjs';
const KhachHang = () => {
    const { data: khachhang } = useAsync(() => getAllKhachHang());

    let dataSource = [];
    khachhang.map((item, i) => {
        const ngaySinhFormatted = dayjs(item.NgaySinh).format('YYYY/MM/DD');

        dataSource.push({
            key: i + 1,
            MaKH: item.MaKH,
            TenKH: item.TenKH,
            SoDienThoai: item.SoDienThoai,
            NgaySinh: ngaySinhFormatted, // Use the formatted date
            GioiTinh: item.GioiTinh,
            DiaChi: item.DiaChi,
        });
    });

    const columns = [
        {
            title: 'Mã khách hàng',
            dataIndex: 'MaKH',
            key: 'MaKH',
        },
        {
            title: 'Tên khách hàng',
            dataIndex: 'TenKH',
            key: 'TenKH',
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'SoDienThoai',
            key: 'SoDienThoai',
        },
        {
            title: 'Ngày sinh',
            dataIndex: 'NgaySinh',
            key: 'NgaySinh',
        },
        {
            title: 'Giới tính',
            dataIndex: 'GioiTinh',
            key: 'GioiTinh',
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'DiaChi',
            key: 'DiaChi',
        },

        {
            title: 'Công cụ',
            fixed: 'right',
            dataIndex: 'MaKH',
            width: 200,
            render: (id) => (
                <>
                    <Col>
                        <Link to={`/khach-hang/${id}`}>
                            {' '}
                            <Button type="default">Sửa</Button>
                        </Link>

                        <Popconfirm
                            title="Xóa dữ liệu"
                            description="Bạn chắc xóa dữ liệu này?"
                            onConfirm={() => confirm(id)}
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
    const confirm = async (id) => {
        const res = await deleteKhachHang(id);
        if (res.message === 'Xóa khách hàng thành công!') {
            notification.open({
                type: 'success',
                message: 'Xóa khách hàng thành công!',
                description: '',
                duration: 1,
            });
            setTimeout(() => {
                window.location.reload();
            }, 3000);
        } else
            notification.open({
                type: 'error',
                message: 'Xóa khách hàng không thành công!',
                description: '',
                duration: 1,
            });
    };
    return (
        <>
            <div className="flex flex-wrap mt-32">
                <div className="w-full mb-12 px-4">
                    <div className="relative">
                        {/* <Divider orientation="left" className="text-white">
                            <Link to={'/khach-hang/them'}>
                                <Button
                                    type="default"
                                    className="bg-gray"
                                    shape="round"
                                    icon={<i class="fas fa-plus"></i>}
                                >
                                    Thêm khách hàng
                                </Button>
                            </Link>{' '}
                        </Divider> */}
                        <Breadcrumb style={{ color: 'white' }}>
                            <BreadcrumbItem style={{ color: 'white' }}>Chức năng</BreadcrumbItem>
                            <BreadcrumbItem style={{ color: 'white' }}>khách hàng</BreadcrumbItem>
                        </Breadcrumb>
                        <Table dataSource={dataSource} columns={columns} />;
                    </div>
                </div>
            </div>
        </>
    );
};

export default KhachHang;
