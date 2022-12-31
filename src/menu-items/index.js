// project import
// import pages from './pages';
// import dashboard from './dashboard';
// import utilities from './utilities';
// import support from './support';

// assets
import {
    AppstoreAddOutlined,
    AntDesignOutlined,
    BarcodeOutlined,
    BgColorsOutlined,
    FontSizeOutlined,
    LoadingOutlined,
    HomeFilled
} from '@ant-design/icons';

import { AiFillHome } from 'react-icons/ai';
import { IoIosSchool, IoIosPaper } from 'react-icons/io';
import { RiQuestionAnswerFill, RiFlagFill } from 'react-icons/ri';
import { FaSchool } from 'react-icons/fa';
import { TbMath } from 'react-icons/tb';
import { SiBookstack } from 'react-icons/si';

// icons
const icons = {
    FontSizeOutlined,
    BgColorsOutlined,
    BarcodeOutlined,
    AntDesignOutlined,
    LoadingOutlined,
    AppstoreAddOutlined,
    HomeFilled
};

// ==============================|| MENU ITEMS ||============================== //

const sideBar = {
    id: 'main',
    title: '',
    type: 'group',
    children: [
        {
            id: 'home',
            title: 'Home',
            type: 'item',
            url: '/home',
            icon: AiFillHome
        },
        {
            id: 'topic',
            title: 'Topic',
            type: 'item',
            url: '/topic',
            icon: SiBookstack
        },
        {
            id: 'class wise-package',
            title: 'Class Wise Package',
            type: 'item',
            url: '/classwise',
            icon: FaSchool
        },
        {
            id: 'scholarship-package',
            title: 'Scholarship Package',
            type: 'item',
            url: '/scholarship',
            icon: IoIosSchool
        },
        {
            id: 'competitive-exams',
            title: 'Competitive Exams',
            type: 'item',
            url: '/competitive',
            icon: IoIosPaper
        },
        {
            id: 'qustion-bank',
            title: 'Question Bank',
            type: 'item',
            url: '/question',
            icon: RiQuestionAnswerFill
        },
        {
            id: 'speed-maths',
            title: 'Speed Maths',
            type: 'item',
            url: '/speed',
            icon: TbMath
        },
        {
            id: 'career-success',
            title: 'Career Success',
            type: 'item',
            url: '/career',
            icon: RiFlagFill
            // breadcrumbs: false
        }
    ]
};

const menuItems = {
    // items: [sideBar, dashboard, pages, utilities, support]
    items: [sideBar]
};

export default menuItems;
