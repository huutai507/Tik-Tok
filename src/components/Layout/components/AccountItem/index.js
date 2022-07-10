import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './AccountItem.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img src="https://picsum.photos/300/300" alt="username or name" className={cx('avatar')} />
            <div className={cx('info')}>
                <div className={cx('name')}>
                    <p>NguyenVanA</p>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('icon')} />
                </div>
                <p className={cx('username')}>Nguyen Van A</p>
            </div>
        </div>
    );
}

export default AccountItem;
