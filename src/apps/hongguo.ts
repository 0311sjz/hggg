import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.phoenix.read',
  name: '红果免费短剧',
  groups: [
    {
      key: 1,
      name: '开屏广告自动跳过',
      desc: '自动点击开屏广告的跳过按钮',
      rules: [
        {
          matches: '[text*="跳过"][text.length<10]',
          fastQuery: true,
        },
      ],
    },
    {
      key: 2,
      name: '自动上滑继续看短剧',
      desc: '出现上滑提示时自动上滑跳过广告',
      rules: [
        {
          matches: '[text="上滑继续观看短剧"][visibleToUser=true]',
          fastQuery: true,
          swipeArgs: {
            start: {
              x: 'screenWidth/2',
              y: 'screenHeight * 0.7',
            },
            end: {
              x: 'screenWidth/2',
              y: 'screenHeight * 0.3',
            },
            duration: 200,
          },
        },
      ],
    },
  ],
});
