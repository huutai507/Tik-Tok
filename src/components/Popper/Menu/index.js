import React, { useState } from 'react';

import Tippy from '@tippyjs/react/headless';
import { Popper as PopperWrapper } from '~/components/Popper';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, optionsItem = [], onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: optionsItem }]);
    const current = history[history.length - 1];
    const renderItems = current.data.map((item, index) => {
        return (
            <MenuItem
                key={index}
                item={item}
                onClick={() => {
                    const isParent = !!item.children;
                    if (isParent) {
                        setHistory((prev) => [...prev, item.children]);
                    } else {
                        onChange(item);
                    }
                }}
            />
        );
    });

    const handleOnBack = () => {
        setHistory(history.slice(0, history.length - 1));
    };

    return (
        <Tippy
            interactive={true}
            placement="bottom-end"
            offset={[10, 10]}
            render={(attrs) => (
                <div className={cx('option-item')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('custom-wrapper')}>
                        {history.length > 1 && <Header title="Language" onBack={handleOnBack} />}
                        {renderItems}
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
