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
    <Layout className='store-container' style={{margin:'0 auto'}}>
      <Layout>
        <Sider style={siderStyle}><MegaMenu></MegaMenu></Sider>
        <Content style={contentStyle}><ContentMenu></ContentMenu></Content>
      </Layout>
      <Footer style={footerStyle}><FooterMenu></FooterMenu></Footer>
    </Layout>
  </Space>


}