import Tippy from '@tippyjs/react/headless';
import { Popper as PopperWrapper } from '~/Layout/Popper';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ children, optionsItem = [] }) {
    const renderItems = optionsItem.map((item, index) => {
        return <MenuItem key={index} item={item} />;
    });

    return (
        <Tippy
            interactive={true}
            placement="bottom-end"
            visible
            render={(attrs) => (
                <div className={cx('option-item')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('custom-wrapper')}>{renderItems}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
