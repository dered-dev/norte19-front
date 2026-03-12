import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import classnames from 'classnames'
import { Button } from 'reactstrap';
import { Icon } from '../Icon/Icon';

// ** Styles
import './ScrollUp.css';


/*************  ✨ Codeium Command ⭐  *************/
/**
 * A React component that renders a scroll up button when the user scrolls
 * more than 100 pixels from the top of the page. The button is fixed at the
 * bottom right of the page and scrolls the user to the top of the page when
 * clicked.
 *
 * @returns {React.JSX.Element} A JSX element representing the scroll up button.
 */
/******  9fd56acc-5542-4656-ac6e-fbf7df8c1f73  *******/const ScrollUp = (): React.JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  /**
   * Toggles the visibility of the scroll up button based on the current
   * scroll position of the window. If the scroll position is greater than
   * 100 pixels from the top of the page, the button is shown. Otherwise,
   * it is hidden.
   */
  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  /**
   * Scrolls the window to the top of the page smoothly.
   * @function
   */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.addEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (

    <Button
      className={classnames('square-button', { 'd-none': !isVisible })}
      onClick={scrollToTop}>
      <Icon iconName="ArrowUpShort" />
    </Button>

  );
};

export default ScrollUp;
