import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './statistic.scss';
import { faChartLine, faTicket } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import { totalMonthlyIncome } from '../../services/BVT_service';

function Statistic() {
    const [totalIncome, setTotalIncome] = useState();
    const [SLHDatVe, setSLHDatVe] = useState();
    const [SLKHHuyVe, setSLKHHuyVe] = useState();
    useEffect(() => {
        tongThuNhapThang();
        // Mock data, bạn cần thay thế bằng dữ liệu thực tế từ server hoặc API
        const data = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
        const datahuy = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];

        // Tạo gradient tương ứng với mã màu bạn đã sử dụng
        const ctx = document.getElementById('myChart').getContext('2d');
        const gradientStrokeViolet = ctx.createLinearGradient(0, 0, 0, 181);
        const gradientStrokeHuy = ctx.createLinearGradient(0, 0, 0, 181);
        gradientStrokeViolet.addColorStop(0, 'rgba(128, 255, 219, 1)');
        gradientStrokeViolet.addColorStop(1, 'rgba(51, 116, 230, 1)');
        gradientStrokeHuy.addColorStop(0, 'rgba(237,91,49,1)');
        gradientStrokeHuy.addColorStop(1, 'rgba(253,211,45,1)');

        // Tạo biểu đồ
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [
                    'Tháng 1',
                    'Tháng 2',
                    'Tháng 3',
                    'Tháng 4',
                    'Tháng 5',
                    'Tháng 6',
                    'Tháng 7',
                    'Tháng 8',
                    'Tháng 9',
                    'Tháng 10',
                    'Tháng 11',
                    'Tháng 12',
                ],
                datasets: [
                    {
                        label: 'Số lượng vé bán ra',
                        borderColor: gradientStrokeViolet,
                        backgroundColor: gradientStrokeViolet,
                        hoverBackgroundColor: gradientStrokeViolet,
                        pointRadius: 0,
                        borderWidth: 1,
                        data: data,
                    },
                    {
                        label: 'Số lượng vé hủy',
                        borderColor: gradientStrokeHuy,
                        backgroundColor: gradientStrokeHuy,
                        hoverBackgroundColor: gradientStrokeHuy,
                        pointRadius: 0,
                        borderWidth: 1,
                        data: datahuy,
                    },
                ],
            },
            options: {
                responsive: true,
                legend: false,
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                display: false,
                                min: 0,
                                stepSize: 20,
                                max: 80,
                            },
                            gridLines: {
                                drawBorder: false,
                                color: '#322f2f',
                                zeroLineColor: '#322f2f',
                            },
                        },
                    ],
                    xAxes: [
                        {
                            gridLines: {
                                display: false,
                                drawBorder: false,
                                color: 'rgba(0,0,0,1)',
                                zeroLineColor: 'rgba(235,237,242,1)',
                            },
                            ticks: {
                                padding: 20,
                                fontColor: '#9c9fa6',
                                autoSkip: true,
                            },
                            categoryPercentage: 0.5,
                            barPercentage: 0.5,
                        },
                    ],
                },
                elements: {
                    point: {
                        radius: 0,
                    },
                },
            },
        });

        // Cleanup khi component unmount
        return () => {
            myChart.destroy();
        };
    }, []);
    const tongThuNhapThang = async () => {
        try {
            const config = {
                withCredentials: true,
            };
            await totalMonthlyIncome(config).then((res) => {
                setSLKHHuyVe(res.SLKHHuyVe);
                setTotalIncome(res.TongThuNhapThang);
                setSLHDatVe(res.SLKHDatVe);
            });
        } catch (error) {
            console.log(error);
        }
    };
    function formatCurrency(amount) {
        if (amount !== undefined && amount !== null) {
            return amount.toLocaleString('vi-VN');
        } else {
            return amount; // or any default value you want to return
        }
    }
    return (
        <div className="mt-5 d-flex flex-column align-items-center ">
            <h1 style={{ textTransform: 'uppercase', fontWeight: '600', color: '#fff' }}>Báo cáo thống kê</h1>
            <div className="container mt-4 bg-white " style={{ borderRadius: '10px' }}>
                <row className="col-lg-12 d-flex justify-content-around mt-3">
                    <div className="col-lg-4 p-2 mb-2 bg-thongke bg-thongke-1">
                        <div className="d-flex align-items-center mb-2">
                            <h6 className="me-1 m-0">Thu nhập tháng này</h6>
                            <FontAwesomeIcon icon={faChartLine} size="lg" />
                        </div>
                        <h5>{formatCurrency(totalIncome)} VNĐ</h5>
                    </div>
                    <div className="col-lg-3 p-2 bg-thongke bg-thongke-2">
                        <div className="d-flex align-items-center mb-2">
                            <h6 className="me-1 m-0">Số lượng vé bán trong tháng</h6>
                            <FontAwesomeIcon className="mt-1" icon={faTicket} size="lg" />
                        </div>
                        <h5>{SLHDatVe}</h5>
                    </div>
                    <div className="col-lg-3 p-2 bg-thongke bg-thongke-3">
                        <div className="d-flex align-items-center mb-2">
                            <h6 className="me-1 m-0">Số lượng vé hủy trong tháng</h6>
                            <FontAwesomeIcon className="mt-1" icon={faTicket} size="lg" />
                        </div>
                        <h5>{SLKHHuyVe}</h5>
                    </div>
                </row>
                <div className="col-md-6 my-5 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <div className="clearfix">
                                <p className="card-title float-left">
                                    Thống kê số lượng khách mua vé tàu trong năm nay
                                </p>
                                <div className="chart-container">
                                    <canvas id="myChart"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Statistic;
