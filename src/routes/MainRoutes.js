import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

const Home = Loadable(lazy(() => import('pages/dashboard/index')));

// // render - navbar

// const Navbar = Loadable(lazy(() => import('pages/navbar')));

// render - sample page
const ClassWise = Loadable(lazy(() => import('pages/classWise')));
const ScholarShip = Loadable(lazy(() => import('pages/scholarship')));
const Competitive = Loadable(lazy(() => import('pages/competitive')));
const QuestionBank = Loadable(lazy(() => import('pages/questionBank')));
const SpeedMath = Loadable(lazy(() => import('pages/speedMath')));
const Topic = Loadable(lazy(() => import('pages/topic')));
const TopicDetail = Loadable(lazy(() => import('pages/topic/detail')));

// render - utilities
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/home',
            element: <Home />
        },
        {
            path: '/topic',
            element: <Topic />
        },
        {
            path: '/topic/:type',
            element: <TopicDetail />
        },
        {
            path: '/classWise',
            element: <ClassWise />
        },
        {
            path: '/ScholarShip',
            element: <ScholarShip />
        },
        {
            path: '/competitive',
            element: <Competitive />
        },
        {
            path: '/question',
            element: <QuestionBank />
        },
        {
            path: '/speed',
            element: <SpeedMath />
        },
        {
            path: '/career',
            element: <ScholarShip />
        },
        {
            path: '/color',
            element: <Color />
        },
        {
            path: '/shadow',
            element: <Shadow />
        },
        {
            path: '/typography',
            element: <Typography />
        },
        {
            path: '/icons/ant',
            element: <AntIcons />
        }
    ]
};

export default MainRoutes;
