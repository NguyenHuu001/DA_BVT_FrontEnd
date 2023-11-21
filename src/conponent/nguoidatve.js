import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form, Input, message } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { BookTicketContext } from '../contexts/bookticketcontext';
import { updateDetailTK } from '../services/BVT_service';
function NguoiDatVe() {
    const { fullName, phoneNumber, email, updateNDV } = useContext(BookTicketContext);
    const [hoTen, setHoTen] = useState(fullName);
    const [sdt, setSDT] = useState(phoneNumber);
    const [gmail, setGmail] = useState(email);
    const [form] = Form.useForm();
    useEffect(() => {
        updateNDV(hoTen, sdt, gmail);
    }, [hoTen, sdt, gmail]);
    useEffect(() => {
        form.setFieldsValue({ FullName: hoTen, PhoneNumber: sdt, Email: gmail });
    }, [hoTen, sdt, gmail]);
    const capNhatTTTK = async () => {
        try {
            const config = {
                withCredentials: true,
            };
            const data = {
                TenKH: hoTen,
                SoDienThoai: sdt,
                Email: email,
            };
            await updateDetailTK(data, config).then((res) => {
                setTimeout(() => {
                    message.success('Cập nhật thành công');
                }, 50);
            });
        } catch (error) {
            console.log('lỗi ở lúc cập nhật thông tin tài khoản');
        }
    };
    return (
        <div className="step_one">
            <div className="title_HTT d-flex align-items-center">
                <FontAwesomeIcon className="me-1" icon={faUser} size="lg" />
                <h5 className="mb-0">Người đặt vé</h5>
            </div>
            <div className="container d-flex justify-content-between">
                <Form
                    form={form}
                    labelCol={{
                        span: 7,
                    }}
                    wrapperCol={{
                        span: 20,
                    }}
                    style={{
                        maxWidth: '100%',
                    }}
                    autoComplete="off"
                    name="myForm"
                    initialValues={{ FullName: hoTen }}
                >
                    <Form.Item
                        name="FullName"
                        label="Họ tên"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập họ tên!',
                            },
                        ]}
                    >
                        <Input onBlur={(e) => setHoTen(e.target.value)} />
                    </Form.Item>
                </Form>
                <Form
                    form={form}
                    className="col-lg-4 d-flex me-0 "
                    name="dienthoai"
                    labelCol={{
                        span: 6,
                    }}
                    wrapperCol={{
                        span: 22,
                    }}
                    style={{
                        Width: '100%',
                    }}
                    autoComplete="off"
                >
                    <Form.Item
                        className="col-lg-12 mb-0"
                        label="Điện thoại"
                        name="PhoneNumber"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng số điện thoại!',
                            },
                        ]}
                    >
                        <Input onBlur={(e) => setSDT(e.target.value)} />
                    </Form.Item>
                </Form>
                <Form
                    form={form}
                    className="col-lg-4 d-flex me-0"
                    name="email"
                    labelCol={{
                        span: 4,
                    }}
                    wrapperCol={{
                        span: 20,
                    }}
                    style={{
                        maxWidth: '100%',
                    }}
                    autoComplete="off"
                >
                    <Form.Item
                        className="col-lg-12 mb-0"
                        name={['Email']}
                        label="Email"
                        rules={[
                            {
                                required: true,
                                type: 'email',
                                message: 'Vui lòng nhập Email!',
                            },
                        ]}
                    >
                        <Input onBlur={(e) => setGmail(e.target.value)} />
                    </Form.Item>
                </Form>
            </div>
            <div className="d-flex justify-content-end me-4 ">
                <button className="col-lg-2 btn_update_TK" onClick={capNhatTTTK}>
                    Cập nhật
                </button>
            </div>
            <div className="d-flex justify-content-end me-4 mt-2">
                <span style={{ color: 'red' }}>
                    (*) Vui lòng kiểm tra lại thông tin tài khoản, nếu chưa chính xác xin vui lòng cập nhật lại
                </span>
            </div>
        </div>
    );
}

export default NguoiDatVe;
