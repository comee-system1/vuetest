export default {
  menuItem: [
    {
      name: 'HOME',
      url: '/'
    },
    {
      name: 'ABOUT',
      url: '/about'
    },
    {
      name: 'WORK',
      url: '/work'
    },
    {
      name: 'SERVICE',
      url: '/service'
    },
    {
      name: 'BLOG',
      url: '/blog'
    },
    {
      name: 'ACCESS',
      url: '/access'
    },
    {
      name: 'Mypage',
      url: '/mypage'
    }
  ],
  // 画像パスはrequireで囲み,モジュールとして読み込む必要があります。
  workItems: [
    {
      src: require('../assets/work-img1.png'),
      url: '/work#work-1'
    },
    {
      src: require('../assets/work-img2.png'),
      url: '/work#work-2'
    },
    {
      src: require('../assets/work-img3.png'),
      url: '/work#work-3'
    }
  ]
}
