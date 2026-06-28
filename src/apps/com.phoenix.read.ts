import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.phoenix.read',
  name: '红果免费短剧',
  groups: [
    {
      key: 1,
      name: '开屏广告自动跳过',
      desc: '读秒结束后[上滑]广告页面跳过广告',
      rules: [
        {
          fastQuery: true,
          matches: '[text*="跳过"][text.length<10]',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-自动[上滑]继续看短剧',
      desc: '广告页读秒结束后自动上滑跳过',
      rules: [
        {
          fastQuery: true,
          swipeArg: {
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
          activityIds:
            'com.dragon.read.component.shortvideo.impl.ShortSeriesActivity',
          anyMatches: ['[vid="ise"][visibleToUser=true]'],
          excludeMatches: [
            '[vid="hrc"][visibleToUser=true]',
            '[vid="title"][visibleToUser=true]',
          ],
        },
      ],
    },
  ],
});

