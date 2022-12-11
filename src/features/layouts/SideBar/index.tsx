import Image from 'next/image';
import styles from './index.module.css';

const SideBar = () => {
  return (
    <div className={`${styles['side-bar']} shadow-md bg-white pt-5`}>
      <ul className="relative">
        <li className={`${styles['sidebar-item']} relative`}>
          <a
            className="flex items-center text-sm py-4 px-2 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap transition duration-300 ease-in-out"
            href="#"
          >
            <Image src="/homepage/home.svg" alt="Home" height={20} width={20} />
            <span
              className={`${styles['sidebar-text']} font-semibold text-lg ml-3`}
            >
              Home
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
