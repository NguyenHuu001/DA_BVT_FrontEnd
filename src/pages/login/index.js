import { Button, Input, Form, notification } from 'antd'; // Import Form từ antd
import { Link } from 'react-router-dom';
import { LoginKH } from '../../services/BVT_service';

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

function Login() {
    const onFinish = async (values) => {
        try {
            const data = {
                MatKhau: values.password,
                TenDangNhap: values.username,
            };
            await LoginKH(data).then((res) => {
                notification.open({
                    type: 'success',
                    message: 'Đăng nhập thành công',
                    description: '',
                    duration: 1,
                });
            });
        } catch (error) {
            notification.open({
                type: 'error',
                message: 'Đăng nhập không thành công',
                description: 'Tài khoản hoặc mật khẩu không chính xác',
                duration: 1,
            });
        }
    };
    return (
        <div className="mt-5 d-flex flex-column align-items-center ">
            <h1 style={{ textTransform: 'uppercase', fontWeight: '600', color: '#053878' }}>Đăng nhập</h1>
            <Form
                className="col-md-10 mt-4"
                name="basic"
                labelCol={{
                    span: 5,
                }}
                wrapperCol={{
                    span: 14,
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
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Mật khẩu"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Link className="ms-5" to="/login" style={{ fontSize: '16px' }}>
                    Quên mật khẩu
                </Link>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Đăng nhập
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Login;
