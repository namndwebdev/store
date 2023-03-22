import './ProductDetail.css'
import { Divider, Typography, Button, Tabs, Space } from "antd";
import { React, useEffect, useState } from "react";
import NavBreadcrums from "../../Components/NavBreadcrums/NavBreadcrums";
import { useParams } from 'react-router-dom'
import ProductDetail_infor from "./ProductDetail_infor";
import CarouselGlobal from "../../Components/Carousel/CarouselGlobal";
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from "../../redux/cartSlice";
const { Text } = Typography;

export default function ProductDetail() {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  let { slug } = useParams()
  let [product, setProduct] = useState({}) //(null)
  let [imageList, setImageList] = useState([])

  const items = [
    {
      key: "1",
      label: `Mô tả sản phẩm`,
      children: product ? <ProductDetail_infor description={product.description} cpu={product.cpu} ram={product.ram} /> : "",
    },
    {
      key: "2",
      label: `Đặc điểm nổi bật`,
      children: `Táo xịn`,
    },
    {
      key: "3",
      label: `Thông tin bảo hành`,
      children: `Bảo hành trọn đời`,
    },
  ];
  useEffect(() => {
    fetch(`https://backoffice.nodemy.vn/api/products/${slug}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data.data.attributes)
        const listLink = []
        data.data.attributes.image.data.map(x => {
          let imgLink = `${process.env.REACT_APP_LINK_BACK_END}${x.attributes.url}`
          listLink.push(imgLink)
        })
        setImageList(listLink)
      })
  }, [])
  return <>
    {/* BreadCrumbs */}
    {product ? <NavBreadcrums nameProduct={product.name} nameBrand={product.idBrand && product.idBrand.data.attributes.name} /> : null}

    <div className="Container ">
      <div className="page_content"> </div>
      <div className="page_content_left">
        {/* Carousel */}
        <CarouselGlobal hasImage={true} data={imageList} ></CarouselGlobal>
      </div>
      <div className="page_content_right">
        {product ? <Typography.Title level={2}>{product.name}</Typography.Title> : null}
        <p> Hãng sản xuất : APPLE </p>
        <p> Bảo hành : 12 tháng </p>
        <Divider />
        <Divider />
        {product ? <Typography.Title level={3} type="danger" >
          <span className="Discount">
            Ưu đãi đặc biệt khi mua kèm :
          </span>
        </Typography.Title> : null}
        <li>
          Mua kèm màn hình giảm sốc lên đên 49% (
          <a href=""> xem chi tiết</a>).
        </li>
        <li>
          Mua kèm các sản phẩm khác giảm giá lên đến 56% (
          <a href=""> xem chi tiết</a>).
        </li>
        <li>Hỗ trợ trả góp MPOS (Thẻ tín dụng), HDSAISON.</li>
        <p>
          <span>Giá Cũ : </span>
          <span>
            {product ? <Text strong type="secondary" delete> {Number(product.price)?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })} </Text> : null}
          </span>
        </p>
        <p>
          <span>Giá KM : </span>
          <span>
            {product ? <Text strong type="danger"> {Number(product.price)?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })} </Text> : null}
          </span>
        </p>
        <Button type="primary" size="large" danger onClick={() => { dispatch(addToCart(product)) }}>
          Đặt hàng
        </Button>
        <Space />
      </div>
      <div className="product_content_detail">
        <Tabs
          defaultActiveKey="1"
          type="card"
          size="middle"
          items={items}
        ></Tabs>
      </div>
    </div>
  </>
}
