import ProductList from '../../Components/ProductList/ProductList';
import { useState } from 'react';
import MegaMenu from '../Menu/MegaMenu';
import Header from '../../Components/Header/Header'
import Breadcrumbs from '../../Components/NavBreadcrums/NavBreadcrums';
import Baner from '../Menu/Baner'
import SubHeader from '../../Components/Header/SubHeader';
import { Footer } from 'antd/es/layout/layout';

export default function Home() {
  const [data, setData] = useState([
    {
        title: 'May tinh thu nhat 1',
        beforeDiscount: '18.000.000d',
        afterDiscount: '16.000.000d',
        percentDiscount: '3%',
        thumbnail: 'https://product.hstatic.net/1000026716/product/111_121e1c7911074629b99973a320b6c1b3_large.png',
    },
    {
        title: 'May tinh thu nhat 2',
        beforeDiscount: '18.000.000d',
        afterDiscount: '16.000.000d',
        percentDiscount: '3%',
        thumbnail: 'https://product.hstatic.net/1000026716/product/111_121e1c7911074629b99973a320b6c1b3_large.png',
    },
    {
        title: 'May tinh thu nhat 1',
        beforeDiscount: '18.000.000d',
        afterDiscount: '16.000.000d',
        percentDiscount: '3%',
        thumbnail: 'https://product.hstatic.net/1000026716/product/111_121e1c7911074629b99973a320b6c1b3_large.png',
    },
    {
        title: 'May tinh thu nhat 1',
        beforeDiscount: '18.000.000d',
        afterDiscount: '16.000.000d',
        percentDiscount: '3%',
        thumbnail: 'https://product.hstatic.net/1000026716/product/111_121e1c7911074629b99973a320b6c1b3_large.png',
    },
    {
        title: 'May tinh thu nhat 2',
        beforeDiscount: '18.000.000d',
        afterDiscount: '16.000.000d',
        percentDiscount: '3%',
        thumbnail: 'https://product.hstatic.net/1000026716/product/111_121e1c7911074629b99973a320b6c1b3_large.png',
    },
    {
        title: 'May tinh thu nhat 1',
        beforeDiscount: '18.000.000d',
        afterDiscount: '16.000.000d',
        percentDiscount: '3%',
        thumbnail: 'https://product.hstatic.net/1000026716/product/111_121e1c7911074629b99973a320b6c1b3_large.png',
    },
    {
        title: 'May tinh thu nhat 1',
        beforeDiscount: '18.000.000d',
        afterDiscount: '16.000.000d',
        percentDiscount: '3%',
        thumbnail: 'https://product.hstatic.net/1000026716/product/111_121e1c7911074629b99973a320b6c1b3_large.png',
    },
    {
        title: 'May tinh thu nhat 2',
        beforeDiscount: '18.000.000d',
        afterDiscount: '16.000.000d',
        percentDiscount: '3%',
        thumbnail: 'https://product.hstatic.net/1000026716/product/111_121e1c7911074629b99973a320b6c1b3_large.png',
    },
    {
        title: 'May tinh thu nhat 1',
        beforeDiscount: '18.000.000d',
        afterDiscount: '16.000.000d',
        percentDiscount: '3%',
        thumbnail: 'https://product.hstatic.net/1000026716/product/111_121e1c7911074629b99973a320b6c1b3_large.png',
    },
]);

return (
    <>
        <Header></Header>
        <Baner></Baner>
        <MegaMenu />
        <ProductList data={data} title="text- 1"></ProductList>
        <ProductList data={data} title="text -2"></ProductList>
        <Footer></Footer>
    </>
);
}