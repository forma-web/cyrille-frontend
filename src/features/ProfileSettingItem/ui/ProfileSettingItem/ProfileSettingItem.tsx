import { ReactNode } from 'react';
import styles from './ProfileSettingItem.module.scss';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import cn from 'classnames';
import { Link } from 'react-router-dom';

type TProfileSettingItem = {
  title: string;
  renderAction?: () => ReactNode;
  redirectTo?: string;
  className?: string;
};

const ActionStub = () => {
  return <ChevronRightIcon className={styles.setting__defaultActionIcon} />;
};

export const ProfileSettingItem = ({
  title,
  renderAction,
  redirectTo,
  className,
}: TProfileSettingItem) => {
  const actionElement = renderAction?.() ?? <ActionStub />;

  const settingItemContent = (
    <label className={cn(styles.setting, className)}>
      <div className={styles.setting__title}>{title}</div>
      <div className={styles.setting__action}>{actionElement}</div>
    </label>
  );

  if (redirectTo) return <Link to={redirectTo}>{settingItemContent}</Link>;

  return settingItemContent;
};
