import React, { useContext } from 'react';
import styles from './header.module.css'
import {RangeContext} from '../../context/RangeProvider';

const Header = () => {
    const {headingTitle, rangeVal} = useContext(RangeContext)
    return ( 
        <header>
            <div className={styles.logoDiv}>
                {headingTitle}
            </div>
            <div className={styles.sliderValue}>
                Slider Value : {rangeVal.inputVal}
            </div>
        </header>
     );
}
 
export default Header;