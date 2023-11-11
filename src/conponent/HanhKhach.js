import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DatePicker, Form, Input } from 'antd';
import './component.scss';
import { useContext, useEffect, useState } from 'react';
import { BookTicketContext } from '../contexts/bookticketcontext';
import moment from 'moment';
function HanhKhach() {
    const { hanhKhachList, handleInputChange } = useContext(BookTicketContext);

    return (
        <div className="step_one">
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
                                initialValues={{ [`CMNDKH${index}`]: item.CMNDKH || '' }}
                            >
                                <Form.Item
                                    className="col-lg-12 mb-0 "
                                    label="CMND/Hộ chiếu"
                                    name={`CMNDKH${index}`}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng nhập CMND/Hộ chiếu!',
                                        },
                                    ]}
                                >
                                    <Input
                                        onChange={(e) =>
                                            handleInputChange(index, 'CMNDKH', e.target.value || item.CMNDKH)
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
                                initialValues={{ [`EmailKH${index}`]: item.EmailKH || '' }}
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
                                    name={`EmailKH${index}`}
                                    rules={[
                                        {
                                            required: true,
                                            type: 'email',
                                            message: 'Vui lòng nhập Email',
                                        },
                                    ]}
                                >
                                    <Input onChange={(e) => handleInputChange(index, 'EmailKH', e.target.value)} />
                                </Form.Item>
                            </Form>
                            <Form
                                initialValues={{ [`NoiSinhKH${index}`]: item.NoiSinhKH || '' }}
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
                                    name={`NoiSinhKH${index}`}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng nhập nơi sinh',
                                        },
                                    ]}
                                >
                                    <Input
                                        style={{ width: '100%' }}
                                        onChange={(e) => handleInputChange(index, 'NoiSinhKH', e.target.value)}
                                    />
                                </Form.Item>
                            </Form>
                            <Form
                                initialValues={
                                    item.NgaySinhKH && {
                                        [`NgaySinhKH${index}`]: moment(item.NgaySinhKH, 'YYYY/MM/DD') || '',
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
                                    name={`NgaySinhKH${index}`}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng nhập Ngày sinh',
                                        },
                                    ]}
                                >
                                    <DatePicker
                                        style={{ width: '100%' }}
                                        onChange={(e, dateString) => handleInputChange(index, 'NgaySinhKH', dateString)}
                                    />
                                </Form.Item>
                            </Form>
                            <Form
                                initialValues={{ [`SDTKH${index}`]: item.SDTKH || '' }}
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
                                    name={`SDTKH${index}`}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng số điện thoại!',
                                        },
                                    ]}
                                >
                                    <Input onChange={(e) => handleInputChange(index, 'SDTKH', e.target.value)} />
                                </Form.Item>
                            </Form>
                            <Form
                                initialValues={{ [`QuocTichKH${index}`]: item.QuocTichKH || '' }}
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
                                    name={`QuocTichKH${index}`}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng số Quốc tịch!',
                                        },
                                    ]}
                                >
                                    <Input onChange={(e) => handleInputChange(index, 'QuocTichKH', e.target.value)} />
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                ))}
        </div>
    );
}

export default HanhKhach;
