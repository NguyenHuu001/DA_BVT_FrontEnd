import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form, Input } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { BookTicketContext } from '../contexts/bookticketcontext';
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
        </div>
    );
}

export default NguoiDatVe;
