import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

// ./MyScene��ʾ���ǵ�ǰĿ¼�µ�MyScene.js�ļ���Ҳ�������Ǹոմ������ļ�
// ע�⼴�㵱ǰ�ļ���MyScene.js��ͬһ��Ŀ¼�У�"./"��������Ҳ�ǲ���ʡ�Եģ�
// ����.js��׺�ǿ���ʡ�Ե�

import MyScene from './MyScene';

class YoDawgApp extends Component {
  render() {
    return (
      <MyScene />
    )
  }
}

AppRegistry.registerComponent('AwesomeProject', () => YoDawgApp);