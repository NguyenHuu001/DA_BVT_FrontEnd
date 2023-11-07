import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DatePicker, Form, Input } from 'antd';
import './component.scss';
function HanhKhach() {
    return (
        <>
            <div className="title_HTT d-flex align-items-center">
                <FontAwesomeIcon className="me-1" icon={faUser} size="lg" />
                <h5 className="mb-0">Hành khách 1</h5>
            </div>
            <div className="container d-flex flex-wrap">
                <Form
                    className="col-lg-4 me-0"
                    name="basic"
                    labelCol={{
                        span: 11,
                    }}
                    wrapperCol={{
                        span: 24,
                    }}
                    style={{
                        maxWidth: '100%',
                        display: 'block',
                    }}
                    autoComplete="off"
                >
                    <Form.Item
                        className="col-lg-12 mb-0 "
                        label="CMND/Hộ chiếu"
                        name="CMND"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập CMND/Hộ chiếu!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
                <Form
                    className="col-lg-4 me-0"
                    name="basic"
                    labelCol={{
                        span: 6,
                    }}
                    wrapperCol={{
                        span: 24,
                    }}
                    style={{
                        maxWidth: '100%',
                        display: 'block',
                    }}
                    autoComplete="off"
                >
                    <Form.Item
                        className="col-lg-12 mb-0 "
                        label="Họ tên"
                        name="HoTen"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập Họ tên',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
                <Form
                    className="col-lg-4 me-0"
                    name="basic"
                    labelCol={{
                        span: 5,
                    }}
                    wrapperCol={{
                        span: 24,
                    }}
                    style={{
                        maxWidth: '100%',
                        display: 'block',
                    }}
                    autoComplete="off"
                >
                    <Form.Item
                        className="col-lg-12 mb-0 "
                        label="Email"
                        name="Email"
                        rules={[
                            {
                                required: true,
                                type: 'email',
                                message: 'Vui lòng nhập Email',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
                <Form
                    className="col-lg-4 me-0"
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 24,
                    }}
                    style={{
                        maxWidth: '100%',
                        display: 'block',
                    }}
                    autoComplete="off"
                >
                    <Form.Item
                        className="col-lg-12 mb-0 "
                        label="Ngày sinh"
                        name="NgaySinh"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập Ngày sinh',
                            },
                        ]}
                    >
                        <DatePicker style={{ width: '100%' }} />
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
                        label="Quốc tịch"
                        name="Quoctich"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng số Quốc tịch!',
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

export default HanhKhach;
