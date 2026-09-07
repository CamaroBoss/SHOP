import { Bookmark, HeartPlus, Megaphone } from 'lucide-react';
import { memo, useCallback, useState } from 'react';
import clsx from 'clsx';
import BookmarksModal from './Bookmarks';
import DisableAdsModal from './DisableAds';

const Footer = memo(() => {
  const [isBookmarksOpen, setIsBookmarksOpen] = useState(false);
  const [isDisableAdsOpen, setIsDisableAdsOpen] = useState(false);

  const handleAboutBlank = useCallback(() => {
    import('/src/utils/utils.js').then(({ openAboutBlankPopup }) => openAboutBlankPopup(true));
  }, []);

  return (
    <div className="w-full fixed bottom-0 flex items-center justify-between p-2 relative">
      {' '}
      <div className="flex gap-2 items-center">
        <div
          className={clsx(
            'flex gap-1 items-center cursor-pointer',
            'hover:-translate-y-0.5 duration-200',
          )}
          onClick={() => setIsDisableAdsOpen(true)}
        >
          {' '}
          <Megaphone className="w-4" /> Disable Ads{' '}
        </div>
      </div>{' '}
      <div className="absolute left-1/2 -translate-x-1/2 flex gap-1 items-center">
        {' '}
        <HeartPlus className="w-4" /> Snap: l_michael09{' '}
      </div>{' '}
      <div className="flex gap-2 items-center">
        {' '}
        <div
          className={clsx(
            'flex gap-1 items-center cursor-pointer',
            'hover:-translate-y-0.5 duration-200',
          )}
          onClick={handleAboutBlank}
        >
          {' '}
          about:blank{' '}
        </div>{' '}
        <span className="text-gray-500">•</span>{' '}
        <div
          className={clsx(
            'flex gap-1 items-center cursor-pointer',
            'hover:-translate-y-0.5 duration-200',
          )}
          onClick={() => setIsBookmarksOpen(true)}
        >
          {' '}
          <Bookmark className="w-4" /> Bookmarks{' '}
        </div>{' '}
      </div>{' '}
      <BookmarksModal isOpen={isBookmarksOpen} onClose={() => setIsBookmarksOpen(false)} />{' '}
      <DisableAdsModal isOpen={isDisableAdsOpen} onClose={() => setIsDisableAdsOpen(false)} />{' '}
    </div>
  );
});
Footer.displayName = 'Footer';
export default Footer;