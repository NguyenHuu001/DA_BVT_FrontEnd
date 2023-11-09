import { Button, Input, Form, notification } from 'antd'; // Import Form từ antd
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { LoginKH } from '../../services/BVT_service';
import './login.scss';
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

function Login() {
    const navigate = useNavigate();
    const onFinish = async (values) => {
        try {
            const data = {
                MatKhau: values.password,
                TenDangNhap: values.username,
            };
            await LoginKH(data).then((res) => {
                console.log();
                localStorage.setItem('userName', res.DataKH[0].TenKH);
                Cookies.set('token', res.token, { expires: 5 });
                notification.open({
                    type: 'success',
                    message: 'Đăng nhập thành công',
                    description: '',
                    duration: 1,
                });
                navigate('/home');
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
            <h1 style={{ textTransform: 'uppercase', fontWeight: '600', color: '#fff' }}>Đăng nhập</h1>
            <Form
                className="col-md-10 mt-4"
                name="basic"
                labelCol={{
                    span: 7,
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
                            message: 'Vui lòng nhập tên tài khoản',
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
                            message: 'Vui lòng nhập mật khẩu',
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
