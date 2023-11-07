import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form, Input } from 'antd';

function NguoiDatVe() {
    return (
        <>
            <div className="title_HTT d-flex align-items-center">
                <FontAwesomeIcon className="me-1" icon={faUser} size="lg" />
                <h5 className="mb-0">Người đặt vé</h5>
            </div>
            <div className="container mt-4 d-flex">
                <Form
                    className="col-lg-4 d-flex me-0"
                    name="basic"
                    labelCol={{
                        span: 6,
                    }}
                    wrapperCol={{
                        span: 24,
                    }}
                    style={{
                        maxWidth: '100%',
                    }}
                    autoComplete="off"
                >
                    <Form.Item
                        className="col-lg-12 mb-0"
                        label="Họ tên"
                        name="FullName"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập họ tên!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
                <Form
                    className="col-lg-4 d-flex me-0"
                    name="basic"
                    labelCol={{
                        span: 8,
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
                        label="Điện thoại"
                        name="PhoneNumber"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng số điện thoại!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
                <Form
                    className="col-lg-4 d-flex me-0"
                    name="basic"
                    labelCol={{
                        span: 5,
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
                        <Input />
                    </Form.Item>
                </Form>
            </div>
        </>
    );
}

export default NguoiDatVe;
