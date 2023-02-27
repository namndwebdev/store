import ProductList from '../../Components/ProductList/ProductList';
import { useState } from 'react';
import MegaMenu from '../Menu/MegaMenu';

export default function Home() {
    const [page, setPage] = useState(1);
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

console.log("check -rerender")

return (

    
    
    <>
        <MegaMenu />
        <ProductList setPage={setPage} currentPage={page} data={data} title="PC GEARVN - MIỄN PHÍ GIAO HÀNG TOÀN QUỐC"></ProductList>
        <ProductList setPage={setPage} currentPage={page} data={data} title="PC GEARVN - MIỄN PHÍ GIAO HÀNG TOÀN QUỐC"></ProductList>
    </>
);
}