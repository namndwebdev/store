import { Layout, Space } from 'antd';
import MegaMenu from './MegaMenu';
import ContentMenu from './ContentMenu';
import FooterMenu from './FooterMenu';
const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
    textAlign: 'center',
    color: 'black',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: 'gray',
  };
  const contentStyle = {
    backgroundColor: 'white',
  };
  const siderStyle = {
    zIndex:"10",
    backgroundColor: "white",
  };
  const footerStyle = {
    backgroundColor: 'white',
    paddingInline:'5px'
  };



export default function Baner (){
    return <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
    size={[0, 48]}
           >
  <Layout>
    <Header style={headerStyle}>Header</Header>
    <Layout>
      <Sider style={siderStyle}><MegaMenu></MegaMenu></Sider>
      <Content style={contentStyle}><ContentMenu></ContentMenu></Content>
    </Layout>
    <Footer style={footerStyle}><FooterMenu></FooterMenu></Footer>
  </Layout>
  </Space>


}