import Link from 'next/link';
import Image from 'next/image';
import styles from './index.module.css';

const NavBar = () => {
  return (
    <nav
      className="
      bg-[#FFFFFF] z-[1]
  fixed
  w-full h-20
  flex
  shadow-md
  items-center
  justify-between
  text-gray-500
  hover:text-gray-700
  focus:text-gray-700
  navbar navbar-expand-lg navbar-light"
    >
      <div className="absolute container-fluid w-full flex flex-wrap items-center justify-between">
        <button
          className="
      text-gray-500
      border-0
      py-2 ml-3
      flex items-center
      bg-transparent"
          type="button"
        >
          <Image
            className={styles.logo}
            src="/homepage/logo.svg"
            width={40}
            height={40}
            alt="logo"
          />
          <span className={styles['fatcat-title']}>Fatcat</span>
        </button>

        <ul
          className={`${styles['tab-bar']} flex bg-[#ECF0FF] rounded-3xl h-10 px-5 ml-24 text-black font-semibold list-style-none mr-auto`}
        >
          <Link
            href="/"
            className="p-2 nav-link hover:text-gray-700 focus:text-blue-700"
          >
            Dashboard
          </Link>
          <Link
            href="/analytics"
            className="p-2 nav-link hover:text-gray-700 focus:text-blue-700"
          >
            Analytics
          </Link>
          <Link
            href="/info"
            className="p-2 nav-link hover:text-gray-700 focus:text-blue-700"
          >
            Info
          </Link>
        </ul>

        <span className={`${styles['arr-alignment']} flex`}>
          <Image
            className={styles.arrows}
            src="/homepage/leftarrow.svg"
            width={40}
            height={40}
            alt="leftarrow"
          />
          <Image
            className={styles.arrows}
            src="/homepage/rightarrow.svg"
            width={40}
            height={40}
            alt="rightarrow"
          />
        </span>

        <div className="flex items-center relative">
          <form className={styles['input-el-container']}>
            <Image
              src="/homepage/search.svg"
              width={20}
              height={20}
              alt="search"
            />
            <input
              placeholder="Search for students, teachers, etc."
              className={styles['input-el']}
              type="search"
            />
          </form>
          <div>
            <a
              className="
          text-gray-500
          hover:text-gray-700
          focus:text-gray-700
          mr-6
          dropdown-toggle
          hidden-arrow
          flex items-center
        "
              href="#"
              id="dropdownMenuButton1"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className={`${styles.bell} flex flex-col items-center`}>
                <Image
                  src="/homepage/notification.svg"
                  width={20}
                  height={20}
                  alt="notifications"
                />
                <Image
                  src="/homepage/bellbottom.svg"
                  width={8}
                  height={8}
                  alt="notifications"
                />
              </span>
              <span
                className={`${styles.count} text-white bg-orange-700 absolute rounded-full border-2 border-white text-xs -mt-1 ml-3 py-0 px-1`}
              >
                9
              </span>
            </a>
          </div>

          <div className={`${styles.dropdown} inline-block relative`}>
            <Image
              src="/homepage/profile.png"
              className={`${styles.profile} rounded-full mr-3`}
              width={35}
              height={35}
              alt="profile"
            />
            <ul
              className={`${styles['dropdown-menu']} bg-[#ECF0FF] font-semibold absolute hidden text-gray-700 pt-1`}
            >
              <li className="">
                <a
                  className="rounded-t bg-blue-400 text-white py-2 px-4 flex whitespace-no-wrap"
                  href="#"
                >
                  <Image
                    src="/homepage/home.svg"
                    alt="Home"
                    height={20}
                    width={20}
                  />
                  <span className="font-semibold text-lg ml-3">Home</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
