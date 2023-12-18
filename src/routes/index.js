import Home from '../pages/home';
import BookTickets from '../pages/booktickets';
import Register from '../pages/register';
import Login from '../pages/login';
import ForgotPassWord from '../pages/forgotpassword';
import BookingHistory from '../pages/bookinghistory';
import CancelTicketsAd from '../pages/cancelticketsad';
import Statistic from '../pages/statistic';
import Contact from '../pages/contact';
import KhachHang from '../pages/khachhang/khachHang';
import ActionKhachHang from '../pages/khachhang/khachHangAction';
const publicRoutes = [
    { path: '/home', component: Home },
    { path: '/booktickets', component: BookTickets },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/forgotpassword', component: ForgotPassWord },
    { path: '/bookinghistory', component: BookingHistory },
    { path: '/cancelticketsad', component: CancelTicketsAd },
    { path: '/statistic', component: Statistic },
    { path: '/contact', component: Contact },
    { path: '/khach-hang', component: KhachHang },
    { path: '/khach-hang/:id', component: ActionKhachHang },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
