import {FC} from 'react';
import Banners from './banners/Banners';
import {useActions} from '@/app/hooks/useActions';
import Layout from '../Layout/Layout';
import Bestsellers from "@/app/components/HomePage/bestsellers/Bestsellers";
import NewDevices from "@/app/components/HomePage/NewDevices/NewDevices";
import BigBanner from "@/app/components/HomePage/BigBanner/BigBanner";
import AppleTechnic from "@/app/components/HomePage/AppleTechnic/AppleTechnic";
import Accessories from "@/app/components/HomePage/Accessories/Accessories";

const HomePage: FC = () => {

    const {setCatalogBtnState} = useActions()
    setCatalogBtnState(false)


    return (
        <Layout title='Home page' description='life - мобильный оператор с низкими ценами на гаджеты и телефоны'>
            <Banners/>
            <Bestsellers/>
            <NewDevices/>
            <BigBanner/>
            <AppleTechnic/>
            <Accessories/>
        </Layout>
    );
};

export default HomePage;