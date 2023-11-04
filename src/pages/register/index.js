import { Button, Form, Input, notification } from 'antd';
import { RegisterKH } from '../../services/BVT_service';
import { useNavigate } from 'react-router-dom';
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
function Register() {
    const navigate = useNavigate();
    const onFinish = async (values) => {
        if (values.PassWord === values.PassWord_two) {
            try {
                const dataKH = {
                    TenDangNhap: values.UserName,
                    Email: values.Email,
                    MatKhau: values.PassWord,
                    TenTaiKhoan: values.FullName,
                    SoDienThoai: values.PhoneNumber,
                    DiaChi: values.Address,
                };
                await RegisterKH(dataKH)
                // .then((res) => console.log(res));
                notification.open({
                    type: 'success',
                    message: 'Đăng ký thành công',
                    description: '',
                    duration: 2,
                });
                navigate('/login');
            } catch (error) {
                notification.open({
                    type: 'error',
                    message: 'Đăng ký không thành công',
                    description: 'Tài khoản hoặc Email đã có người sử dụng',
                    duration: 2,
                });
            }
        } else {
            onFinishFailed();
        }
    };
    return (
        <div className="mt-5 d-flex flex-column align-items-center ">
            <h1 style={{ textTransform: 'uppercase', fontWeight: '600', color: '#053878' }}>Đăng ký</h1>
            <Form
                className="col-md-10 mt-4"
                name="basic"
                labelCol={{
                    span: 5,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Tên đăng nhập"
                    name="UserName"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập tên đăng nhập!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
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
                <Form.Item
                    label="Mật khẩu"
                    name="PassWord"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập mật khẩu!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="Nhập lại mật khẩu"
                    name="PassWord_two"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập lại mật khẩu!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
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
                <Form.Item
                    label="Địa chỉ"
                    name="Address"
                    rules={[
                        {
                            // required: true,
                            // message: 'Vui lòng nhập địa!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Điện thoại"
                    name="PhoneNumber"
                    rules={[
                        {
                            // required: true,
                            // message: 'Vui lòng nhập địa!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button className="d-flex justify-content-center" type="primary" htmlType="submit">
                        Đăng ký
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Register;
