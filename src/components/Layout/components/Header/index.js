import { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCircleXmark,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMagnifyingGlass,
    faMailReply,
    faMessage,
    faPaperPlane,
    faPlus,
    faSignOut,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';

import TippyHeadless from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Popper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/Layout/components/AccountItem';
import Menu from '~/components/Popper/Menu';
import {
    MessageIcon,
    InboxIcon,
    SearchIcon,
    PersonalIcon,
    CoinIcon,
    SettingIcon,
    LanguageIcon,
    LogoutIcon,
    QuestionIcon,
    KeyboardIcon,
} from '~/components/Icons';

const cx = classNames.bind(styles);

const OPTIONS_ITEM = [
    {
        icon: <LanguageIcon width={'2rem'} height={'2rem'} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'vi',
                    title: 'Tieng Viet',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'fr',
                    title: 'France',
                },
                {
                    code: 'i',
                    title: 'Italy',
                },
                {
                    code: 'ca',
                    title: 'Cambodia',
                },
            ],
        },
    },
    {
        icon: <QuestionIcon width={'2rem'} height={'2rem'} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <KeyboardIcon width={'2rem'} height={'2rem'} />,
        title: 'Keyboard shortcut',
    },
];

const USER_ITEMS = [
    {
        icon: <PersonalIcon width={'2rem'} height={'2rem'} />,
        title: 'View profile',
        to: '/@userprofile',
    },
    {
        icon: <CoinIcon width={'2rem'} height={'2rem'} />,
        title: 'Get coins',
        to: '/coins',
    },
    {
        icon: <SettingIcon width={'2rem'} height={'2rem'} />,
        title: 'Setting',
    },
    ...OPTIONS_ITEM,
    {
        icon: <LogoutIcon width={'2rem'} height={'2rem'} />,
        title: 'Log Out',
        separate: true,
    },
];

const handleMenuChange = (menuItem) => {
    console.log('handleMenuChange', menuItem);
};

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    const userCurrent = true;

    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                <img src={images.logo} alt="Tik Tak" />
                <TippyHeadless
                    interactive={true}
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <p className={cx('label')}>Account</p>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input type="text" placeholder="Search accounts and videos" />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <SearchIcon width={'2.4rem'} height={'2.4rem'} color={'rgba(22, 24, 35, 0.34)'} />
                        </button>
                    </div>
                </TippyHeadless>

                <div className={cx('actions')}>
                    <Button secondary leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        Upload
                    </Button>
                    {userCurrent ? (
                        <>
                            <Tippy content="Message" delay={[0, 200]} placement="bottom">
                                <button className={cx('login-actions')}>
                                    <MessageIcon width={'2.6rem'} height={'2.6rem'} />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox" delay={[0, 200]} placement="bottom">
                                <button className={cx('login-actions')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu optionsItem={userCurrent ? USER_ITEMS : OPTIONS_ITEM} onChange={handleMenuChange}>
                        {userCurrent ? (
                            <img className={cx('avatar')} src="https://picsum.photos/300/300" alt="" />
                        ) : (
                            <button className={cx('options')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
