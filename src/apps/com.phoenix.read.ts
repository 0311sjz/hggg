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
      desc: '读秒结束后[上滑]广告页面跳过广告',
      rules: [
        {
          fastQuery: true,
          swipeArg: {
            start: { x: 'screenWidth/2', y: 'screenHeight * 0.7' },
            end: { x: 'screenWidth/2', y: 'screenHeight * 0.3' },
            duration: 200,
          },
          activityIds:
            'com.dragon.read.component.shortvideo.impl.ShortSeriesActivity',
          matches: '[text="上滑继续观看短剧"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/29092674',
          excludeSnapshotUrls: 'https://i.gkd.li/i/29092652',
          exampleUrls: 'https://e.gkd.li/36e57d51-d134-4507-9aca-ada9e71b9b14',
        },
      ],
    },
    {
      key: 3,
      name: '功能类-自动[上滑]继续看短剧(播放页)',
      desc: '播放页底部[上滑继续看短剧]提示时自动上滑',
      rules: [
        {
          fastQuery: true,
          swipeArg: {
            start: { x: 'screenWidth/2', y: 'screenHeight * 0.9' },
            end: { x: 'screenWidth/2', y: 'screenHeight * 0.5' },
            duration: 200,
          },
          activityIds:
            'com.dragon.read.component.shortvideo.impl.ShortSeriesActivity',
          matches: '[text="上滑继续看短剧"][visibleToUser=true]',
        },
      ],
    },
  ],
});
