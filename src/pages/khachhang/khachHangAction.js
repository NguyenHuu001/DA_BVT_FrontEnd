import React from 'react';
import { Button, Col, DatePicker, Form, Input, Row, Select, Space, notification } from 'antd';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { updateKhachHangByAdmin, getKhachHangById } from '../../services/BVT_service';

const { Option } = Select;

const ActionKhachHang = () => {
    const [form] = Form.useForm();
    const { id } = useParams();

    useEffect(() => {
        if (id !== 'them') {
            (async () => {
                const config = {
                    withCredentials: true,
                };
                const res = await getKhachHangById(id, config);

                if (res) {
                    const ngaysinhfm = dayjs(res[0].NgaySinh || dayjs().format('YYYY-MM-DD'), 'YYYY-MM-DD');
                    form.setFieldsValue({
                        MaKH: res[0].MaKH,
                        TenKH: res[0].TenKH,
                        SoDienThoai: res[0].SoDienThoai,
                        NgaySinh: ngaysinhfm,
                        GioiTinh: res[0].GioiTinh,
                        DiaChi: res[0].DiaChi,
                    });
                }
            })();
        } else {
            form.resetFields();
        }
    }, [id]);
    const onFinish = async (values) => {
        if (id !== 'them') {
            const ngaysinh = dayjs(values.NgaySinh).format('YYYY-MM-DD');

            const body = {
                MaKH: values.MaKH,
                TenKH: values.TenKH,
                SoDienThoai: values.SoDienThoai,
                NgaySinh: ngaysinh,
                GioiTinh: values.GioiTinh,
                DiaChi: values.DiaChi,
                MaTKKH: values.MaTKKH,
            };
            const config = {
                withCredentials: true,
            };
            const res = await updateKhachHangByAdmin(body, config);

            if (res.message) {
                notification.open({
                    type: 'success',
                    message: 'Cập nhật thông tin khách hàng thành công!',
                    description: '',
                    duration: 1,
                });
            }
        }
        // } else {
        //     const body = {
        //         reqMaKH: values.makh,
        //         reqTenKH: values.tenkh,
        //         reqMaCH: values.macuahang,
        //         reqDiaChi: values.diachi,
        //         reqSdt: values.sdt,
        //     };

        //     const res = await ServiceCustomer.createCustomer(body);

        //     if (res.message == 'Đã tồn tại') {
        //         toast.warning('Mã khách hàng đã tồn tại!');
        //     } else if (res.message == 'Đồng bộ thêm thành công') {
        //         toast.success('Thêm dữ liệu thành công và đồng bộ dữ liệu thành công!');
        //     }
        // }
    };
    return (
        <>
            <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
                <Form layout="vertical" form={form} onFinish={onFinish} hideRequiredMark>
                    <Row gutter={24}>
                        <Col span={12}>
                            <Form.Item
                                name="MaKH"
                                label="Mã khách hàng"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Hãy nhập mã khách hàng',
                                    },
                                ]}
                            >
                                <Input disabled={id !== 'them' ? true : false} placeholder="Nhập mã khách hàng" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="TenKH"
                                label="Tên khách hàng"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Hãy nhập tên khách hàng',
                                    },
                                ]}
                            >
                                <Input placeholder="Nhập tên khách hàng" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        {/* <Col span={12}>
                            <Form.Item
                                name="macuahang"
                                label="Cửa hàng"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Hãy chọn cửa hàng',
                                    },
                                ]}
                            >
                                <Select placeholder="Chọn của hàng">
                                    {Array.isArray(cuahang) &&
                                        cuahang.map((item, i) => (
                                            <Option key={i + 1} value={item.MaCuaHang}>
                                                {item.TenCuaHang}
                                            </Option>
                                        ))}
                                </Select>
                            </Form.Item>
                        </Col> */}
                        <Col span={12}>
                            <Form.Item
                                name="SoDienThoai"
                                label="Số điện thoại"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Hãy nhập số điện thoại',
                                    },
                                ]}
                            >
                                <Input placeholder="Nhập số điện thoại" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="NgaySinh"
                                label="Ngày sinh"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Hãy chọn ngày sinh',
                                    },
                                ]}
                            >
                                <DatePicker
                                    style={{ width: '100%' }}
                                    format="YYYY/MM/DD"
                                    placeholder="Chọn ngày sinh"
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col span={12}>
                            <Form.Item
                                name="GioiTinh"
                                label="Giới tính"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Hãy chọn giới tính',
                                    },
                                ]}
                            >
                                <Select placeholder="Chọn giới tính">
                                    <Option value="Nam">Nam</Option>
                                    <Option value="Nu">Nữ</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="DiaChi"
                                label="Địa chỉ"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Hãy nhập địa chỉ',
                                    },
                                ]}
                            >
                                <Input.TextArea placeholder="Nhập địa chỉ" />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Form.Item>
                        <Space align="end">
                            <Button type="primary" htmlType="submit">
                                {id !== 'them' ? 'Sửa' : ' Thêm'}
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </div>
        </>
    );
};

export default ActionKhachHang;
