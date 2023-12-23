import { Button, Col, DatePicker, Form, Input, Row, Select, Space, TimePicker, notification } from 'antd';

import dayjs from 'dayjs';
import useAsync from '../../hook/useAsync';
import { useNavigate, useParams } from 'react-router-dom';
//Api
import { addTrains, getALLChuyenTau, selectDetailChuyenTau, updateTrain } from '../../services/BVT_service';
import { useEffect } from 'react';
import { Option } from 'antd/es/mentions';

const ActionChuyenTau = () => {
    const navigate = useNavigate();
    const { data: chuyentau } = useAsync(() => getALLChuyenTau());

    const [form] = Form.useForm();
    const { id } = useParams();
    useEffect(() => {
        if (id !== 'them') {
            EditTrain();
        }
    }, []);
    const formatTwoDigits = (number) => {
        return number < 10 ? `0${number}` : `${number}`;
    };
    const EditTrain = async () => {
        try {
            const config = {
                withCredentials: true,
            };
            await selectDetailChuyenTau(id, config).then((res) => {
                if (res) {
                    const giodi =
                        formatTwoDigits(new Date(res[0].GioDi).getUTCHours()) +
                        ':' +
                        formatTwoDigits(new Date(res[0].GioDi).getUTCMinutes()) +
                        '.0';

                    const formattedDepartureTime = dayjs(giodi || dayjs().format('HH:mm:ss'), 'HH:mm:ss');
                    const formatDepartureDate = dayjs(res[0].NgayDi || dayjs().format('YYYY-MM-DD'), 'YYYY-MM-DD');
                    form.setFieldsValue({
                        MaChuyenTau: res[0].TenChuyen,
                        NgayDi: formatDepartureDate,
                        GioDi: formattedDepartureTime,
                    });
                } else {
                    form.resetFields();
                }
            });
        } catch (error) {
            console.log(error);
        }
    };

    const onFinish = async (values) => {
        try {
            if (id === 'them') {
                const ngayDi = dayjs(values.NgayDi).format('YYYY-MM-DD');
                const gioDi = dayjs(values.GioDi, 'HH:mm:ss').format('HH:mm:ss');

                const data = {
                    MaChuyenTau: values.MaChuyenTau,
                    NgayDi: ngayDi,
                    GioDi: gioDi,
                };
                const config = {
                    withCredentials: true,
                };
                await addTrains(data, config);
                notification.open({
                    type: 'success',
                    message: 'Thêm chuyến tàu thành công!',
                    description: '',
                    duration: 1,
                });
                navigate('/chuyen-tau');
            } else {
                const ngayDi = dayjs(values.NgayDi).format('YYYY-MM-DD');
                const gioDi = dayjs(values.GioDi, 'HH:mm:ss').format('HH:mm:ss');
                const data = {
                    MaCTCT: id,
                    NgayDi: ngayDi,
                    GioDi: gioDi,
                };
                const config = {
                    withCredentials: true,
                };
                await updateTrain(data, config);
                notification.open({
                    type: 'success',
                    message: 'Cập nhật thông tin chuyến tàu thành công!',
                    description: '',
                    duration: 1,
                });
                navigate('/chuyen-tau');
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            {id === 'them' ? (
                <h1 style={{ textTransform: 'uppercase', fontWeight: '600', color: '#fff', textAlign: 'center' }}>
                    Thêm chuyến tàu
                </h1>
            ) : (
                <h1 style={{ textTransform: 'uppercase', fontWeight: '600', color: '#fff', textAlign: 'center' }}>
                    Sửa chuyến tàu
                </h1>
            )}

            <div
                className="container m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl"
                style={{ borderRadius: '8px' }}
            >
                <div className="container">
                    <Form layout="vertical" form={form} onFinish={onFinish} hideRequiredMark>
                        <Row gutter={24}>
                            <Col span={12}>
                                <Form.Item
                                    className="col-lg-8"
                                    name="MaChuyenTau"
                                    label="Chuyến tàu"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Hãy chọn chuyến tàu',
                                        },
                                    ]}
                                >
                                    {id === 'them' ? (
                                        <Select placeholder="Chọn chuyến tàu">
                                            {Array.isArray(chuyentau) &&
                                                chuyentau.map((item, i) => (
                                                    <Select.Option key={i + 1} value={item.MaChuyenTau}>
                                                        {item.TenChuyen}
                                                    </Select.Option>
                                                ))}
                                        </Select>
                                    ) : (
                                        <Input disabled style={{ fontWeight: '900' }} />
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={24}>
                            <Col span={12}>
                                <Form.Item
                                    name="NgayDi"
                                    label="Ngày đi"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Hãy chọn ngày đi',
                                        },
                                    ]}
                                >
                                    <DatePicker
                                        style={{ width: '100%' }}
                                        format="YYYY/MM/DD"
                                        placeholder="Chọn ngày đi"
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name="GioDi"
                                    label="Giờ đi"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Hãy chọn giờ đi',
                                        },
                                    ]}
                                >
                                    <TimePicker style={{ width: '100%' }} format="HH:mm:ss" placeholder="Chọn giờ đi" />
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
            </div>
        </div>
    );
};

export default ActionChuyenTau;
