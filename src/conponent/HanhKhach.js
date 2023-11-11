import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DatePicker, Form, Input } from 'antd';
import './component.scss';
import { useContext, useEffect } from 'react';
import { BookTicketContext } from '../contexts/bookticketcontext';
import moment from 'moment';
function HanhKhach() {
    const { hanhKhachList, handleInputChange } = useContext(BookTicketContext);
    useEffect(() => {}, [hanhKhachList]);

    return (
        <div className="step_one" key={hanhKhachList}>
            {hanhKhachList.length > 0 &&
                hanhKhachList.map((item, index) => (
                    <div key={index + item}>
                        <div className="title_HTT d-flex align-items-center">
                            <FontAwesomeIcon className="me-1" icon={faUser} size="lg" />
                            <h5 className="mb-0">Hành khách {index + 1}</h5>
                        </div>

                        <div className="container d-flex flex-wrap">
                            <Form
                                className="col-lg-4 me-0"
                                name={`cmnd${index}`}
                                labelCol={{
                                    span: 8,
                                }}
                                wrapperCol={{
                                    span: 20,
                                }}
                                style={{
                                    maxWidth: '100%',
                                    display: 'block',
                                }}
                                autoComplete="off"
                                initialValues={{ [`CMNDHK${index}`]: item.CMNDHK || '' }}
                            >
                                <Form.Item
                                    className="col-lg-12 mb-0 "
                                    label="CMND/Hộ chiếu"
                                    name={`CMNDHK${index}`}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng nhập CMND/Hộ chiếu!',
                                        },
                                    ]}
                                >
                                    <Input
                                        onChange={(e) =>
                                            handleInputChange(index, 'CMNDHK', e.target.value || item.CMNDHK)
                                        }
                                    />
                                </Form.Item>
                            </Form>
                            <Form
                                initialValues={{ [`HoTenHK${index}`]: item.HoTenHK || '' }}
                                className="col-lg-4 me-0"
                                name={`hotenkhach${index}`}
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
                                    name={`HoTenHK${index}`}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng nhập Họ tên',
                                        },
                                    ]}
                                >
                                    <Input onChange={(e) => handleInputChange(index, 'HoTenHK', e.target.value)} />
                                </Form.Item>
                            </Form>
                            <Form
                                initialValues={{ [`EmailHK${index}`]: item.EmailHK || '' }}
                                className="col-lg-4 me-0"
                                name={`emailkhach${index}`}
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
                                    name={`EmailHK${index}`}
                                    rules={[
                                        {
                                            // required: true,
                                            type: 'email',
                                            message: 'Vui lòng nhập Email',
                                        },
                                    ]}
                                >
                                    <Input onChange={(e) => handleInputChange(index, 'EmailHK', e.target.value)} />
                                </Form.Item>
                            </Form>
                            <Form
                                initialValues={{ [`NoiSinhHK${index}`]: item.NoiSinhHK || '' }}
                                className="col-lg-4 me-0"
                                name={`noisinh${index}`}
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
                                    label="Nơi sinh"
                                    name={`NoiSinhHK${index}`}
                                    rules={[
                                        {
                                            // required: true,
                                            // message: 'Vui lòng nhập nơi sinh',
                                        },
                                    ]}
                                >
                                    <Input
                                        style={{ width: '100%' }}
                                        onChange={(e) => handleInputChange(index, 'NoiSinhHK', e.target.value)}
                                    />
                                </Form.Item>
                            </Form>
                            <Form
                                initialValues={
                                    item.NgaySinhHK && {
                                        [`NgaySinhHK${index}`]: moment(item.NgaySinhHK, 'YYYY/MM/DD') || '',
                                    }
                                }
                                className="col-lg-4 me-0"
                                name={`ngaysinh${index}`}
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
                                    label="Ngày sinh"
                                    name={`NgaySinhHK${index}`}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng nhập Ngày sinh',
                                        },
                                    ]}
                                >
                                    <DatePicker
                                        style={{ width: '100%' }}
                                        onChange={(e, dateString) => handleInputChange(index, 'NgaySinhHK', dateString)}
                                    />
                                </Form.Item>
                            </Form>
                            <Form
                                initialValues={{ [`SDTHK${index}`]: item.SDTHK || '' }}
                                className="col-lg-4 d-flex me-0"
                                name={`dienthoaikhach${index}`}
                                labelCol={{
                                    span: 6,
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
                                    name={`SDTHK${index}`}
                                    rules={[
                                        {
                                            // required: true,
                                            // message: 'Vui lòng số điện thoại!',
                                        },
                                    ]}
                                >
                                    <Input onChange={(e) => handleInputChange(index, 'SDTHK', e.target.value)} />
                                </Form.Item>
                            </Form>
                            <Form
                                initialValues={{ [`QuocTichHK${index}`]: item.QuocTichHK || '' }}
                                className="col-lg-4 d-flex me-0"
                                name={`quoctich${index}`}
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
                                    name={`QuocTichHK${index}`}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng số Quốc tịch!',
                                        },
                                    ]}
                                >
                                    <Input onChange={(e) => handleInputChange(index, 'QuocTichHK', e.target.value)} />
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                ))}
        </div>
    );
}

export default HanhKhach;
