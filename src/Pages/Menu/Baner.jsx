import { Layout, Space } from 'antd';
import MegaMenu from './MegaMenu';
import ContentMenu from './ContentMenu';
import FooterMenu from './FooterMenu';
const { Header, Footer, Sider, Content } = Layout;

const contentStyle = {
  backgroundColor: '#f8f8f8',
};
const siderStyle = {
  zIndex: "10",
  backgroundColor: "#f8f8f8",
};
const footerStyle = {
  backgroundColor: 'white',
  paddingInline: '5px'
};

export default function Baner() {
  return <Space
    direction="vertical"
    style={{
      width: '100%',
      backgroundColor: "#f8f8f8",
    }}
    size={[0, 48]}
  >
    <div className='store-container'>
      <MegaMenu></MegaMenu>
      <FooterMenu></FooterMenu>
    </div>
  </Space>


}