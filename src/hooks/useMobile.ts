import { verifyDevice } from '@/utils/tools';
import { useEffect, useState } from 'react';

export default () => {
  const [ifMobile, setIfMobile] = useState(false);

  const reCheck = () => {
    if (verifyDevice() === 'mobile') {
      setIfMobile(true);
      return;
    }
    setIfMobile(false);
  };
  useEffect(() => {
    reCheck();
    window.addEventListener('resize', reCheck);
    return window.removeEventListener('resize', reCheck);
  }, []);
  return ifMobile;
};
