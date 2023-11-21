import { Button, Form, Input } from 'antd';
import { forgetPassWord } from '../../services/BVT_service';
const layout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 18,
    },
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
function ForgotPassWord() {
    const onFinish = async (values) => {
        try {
            const data = {
                Email: values.user.email,
            };
            await forgetPassWord(data).then((res) => {
                alert(res.message);
            });
        } catch (error) {       
            alert('Email chưa đăng ký');
        }
    };
    return (
        <div className="d-flex flex-column align-items-center">
            <h1 style={{ textTransform: 'uppercase', fontWeight: '600', color: '#fff' }}>Quên mật khẩu</h1>
            <Form
                className="col-lg-4"
                {...layout}
                name="nest-messages"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                style={{
                    maxWidth: 600,
                }}
            >
                <Form.Item
                    name={['user', 'email']}
                    label="Email"
                    rules={[
                        {
                            required: true,
                            type: 'email',
                            message: 'Vui lòng nhập email',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        ...layout.wrapperCol,
                        offset: 8,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default ForgotPassWord;
