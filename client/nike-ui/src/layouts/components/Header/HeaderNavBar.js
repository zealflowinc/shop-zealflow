import { SiNike } from 'react-icons/si';
import { CiHeart } from 'react-icons/ci';
import { IoBagHandleOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { Search } from '../Search';
import NavBarItem from './NavBarItem';

const navBar = ['New & Featured', 'Men', 'Women', 'Kids', 'Sale', 'Customise'];

function HeaderNavBar() {
    return (
        <div className="w-full h-[64px] px-primary flex justify-between items-center">
            <SiNike className="text-[60px]" />

            <div className="flex font-medium text-[17px]">
                {navBar.map((item, index) => (
                    <NavBarItem key={index} tittle={item} />
                ))}
            </div>

            <div className="flex justify-between items-center gap-6">
                <Search />
                <Link>
                    <CiHeart className=" text-[28px]" />
                </Link>
                <Link>
                    <IoBagHandleOutline className=" text-[26px]" />
                </Link>
            </div>
        </div>
    );
}

export default HeaderNavBar;
