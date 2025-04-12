import { Layout, theme } from 'antd';
import './App.css';
import NavBar from './components/NavBar';

import SlideBar from './components/SlideBar';
import { Content, Footer } from 'antd/es/layout/layout';

function App() {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <div className='w-[100%] h-[100vh] '>
            <NavBar />
            <Layout style={{ minHeight: '90vh' }}>
                <SlideBar />
                <Layout>

                    <Content style={{ margin: '20px 16px' }}>

                        <div
                            style={{
                                padding: 24,
                                minHeight: 360,
                                background: colorBgContainer,
                                borderRadius: borderRadiusLG,
                            }}
                        >
                            đây là body
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©{new Date().getFullYear()} Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        </div>
    );
}

export default App;
