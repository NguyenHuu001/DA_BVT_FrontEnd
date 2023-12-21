import { Button, Col, DatePicker, Form, Row, Select, Space, TimePicker, notification } from 'antd';

import dayjs from 'dayjs';
import useAsync from '../../hook/useAsync';

import { useParams } from 'react-router-dom';
//Api
import { addTrains, getALLChuyenTau } from '../../services/BVT_service';
const { Option } = Select;

const ActionChuyenTau = () => {
    const { data: chuyentau } = useAsync(() => getALLChuyenTau());

    const [form] = Form.useForm();
    const { id } = useParams();

    //Chỗ đây là truyền id để sửa hoặc thêm

    // useEffect(() => {
    //     if (id != 'them') {
    //         (async () => {
    //             //nhận vào id khi url khác thêm
    //             //const res = await getKhachHangById(id);

    //             if (res) {
    //                 const ngayDi = dayjs(res[0].NgayDi, 'YYYY-MM-DD');
    //                 const gioDi = dayjs(res[0].GioDi, 'HH:mm:ss');

    //                 form.setFieldsValue({
    //                     MaChuyenTau: res[0].MaChuyenTau,
    //                     TenChuyen: res[0].TenChuyen,
    //                     MaCTCT: res[0].MaCTCT,
    //                     NgayDi: ngayDi,
    //                     GioDi: gioDi,
    //                 });
    //             }
    //         })();
    //     } else {
    //         form.resetFields();
    //     }
    // }, [id]);
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
                    message: 'Cập nhật thông tin chuyến tàu thành công!',
                    description: '',
                    duration: 1,
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
                <Form layout="vertical" form={form} onFinish={onFinish} hideRequiredMark>
                    <Row gutter={12}>
                        <Col span={12}>
                            <Form.Item
                                name="MaChuyenTau"
                                label="Chuyến tàu"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Hãy chọn chuyến tàu',
                                    },
                                ]}
                            >
                                <Select placeholder="Chọn chuyến tàu">
                                    {Array.isArray(chuyentau) &&
                                        chuyentau.map((item, i) => (
                                            <Option key={i + 1} value={item.MaChuyenTau}>
                                                {item.TenChuyen}
                                            </Option>
                                        ))}
                                </Select>
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
                                <DatePicker style={{ width: '100%' }} format="YYYY/MM/DD" placeholder="Chọn ngày đi" />
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
        </>
    );
};

export default ActionChuyenTau;
