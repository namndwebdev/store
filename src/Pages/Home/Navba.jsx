import { MailOutlined, SettingOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import { useEffect } from 'react';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
    getItem('Danh Mục Sản Phẩm', 'sub1', <AppstoreOutlined />, [
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),
  {
    type: 'divider',
  },
];
const Navba = () => {
    const[listNavBa,setListNavBa] = useState([])
  useEffect(()=>{
    fetch('https://backoffice.nodemy.vn/api/dropdown-tabs?populate[0]=section&populate[1]=section.image&populate[2]=section.link&populate[3]=bannerFeatures')
            .then((res) => res.json())
            .then((data) => {
                setListNavBa(data.data);
            })
  },[])
  console.log(listNavBa);
  const onClick = (e) => {
    console.log('click ', e);
  };
  return (
    <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};
export default Navba;