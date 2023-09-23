import Image from 'next/image';
import Link from 'next/link';

// Assets
import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';

import './InfoBar.css';

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <Image className="onlineIcon" src={onlineIcon} alt="online icon" />
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <Link href="/"><Image src={closeIcon} alt="close icon" /></Link>
    </div>
  </div>
);

export default InfoBar;