import React from 'react';
import './App.css';

// md 样式导入
import './../node_modules/github-markdown-css';
import './../node_modules/highlight.js/styles/default.css';
import './../node_modules/highlight.js/styles/atom-one-light.css';

// 手机模拟器
import Mobile from './components/mobile/index.jsx'; 

import { Layout, Menu, } from 'antd';

import { configData, componentList } from './config/config.json';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class App extends React.Component {
  constructor(props){
    super( props );
    this.state = {
      setContent: 'Dialog', //默认展示第一个tab
    }
  } 

  render(){
    return (
      <div className="App">
        <Layout>
          <Header className="header">
            <div className="logo">ERC-DESIGN</div>
          </Header>
          <Layout>
            <Sider>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['base_component']}
                
              >
                <SubMenu
                  key="base_component"
                  title={<span> Base Components</span>}
                
                >{
                  componentList.map(item => {
                    return (
                    <Menu.Item 
                      key={item}  
                      onClick={item => this.setState({setContent: item.key})}                      
                    >{item}
                    </Menu.Item>)
                  })
                }
                </SubMenu>
              </Menu>
            </Sider>
          <Layout>
            <Content className='markdown-body' dangerouslySetInnerHTML={{ __html: configData[`${this.state.setContent}`].mdContent }}>
            </Content>
            <Mobile index={this.state.setContent} />
          </Layout>
        </Layout>
      </Layout>
    </div>
    );
  }
}

export default App;

