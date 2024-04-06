const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  autoplay: false,
  lrcType: 0,
  audio: [
      {
      "name": "Beautiful In White (Demo)",
      "artist": "Westlife",
      "url": "https://music.163.com/song/media/outer/url?id=29539085.mp3",
      "cover": "https://p1.music.126.net/jp5ggn-2y5b1cCsOoFpaHQ==/6635552674545050.jpg?param=130y130"
    },{
      "name": "My Love",
      "artist": "Westlife",
      "url": "https://music.163.com/song/media/outer/url?id=572412968.mp3",
      "cover": "https://p1.music.126.net/NvTrCHEfrlkJRZlUu8HBQw==/109951163909473682.jpg?param=130y130"
    },{
      "name": "Five hundred miles",
      "artist": "The Journeymen ",
      "url": "https://music.163.com/song/media/outer/url?id=1350232549.mp3",
      "cover": "https://p2.music.126.net/2cD7BzJYcVmbGYjaGoZijQ==/109951163906691778.jpg?param=130y130"
    },{
      "name": "Wait For You",
      "artist": "Elliott Yamin",
      "url": "https://music.163.com/song/media/outer/url?id=1304257.mp3",
      "cover": "https://p1.music.126.net/NpR4nUoJXsQmWunZWCz4OQ==/898300999944140.jpg?param=130y130"
    },{
      "name": "Here With You",
      "artist": "Asher Monroe",
      "url": "https://music.163.com/song/media/outer/url?id=27583305.mp3",
      "cover": "https://p1.music.126.net/qqj_ClyLVRbZ-EBlmkHZrQ==/2788361488086447.jpg?param=130y130"
    },{
      "name": "Refrain",
      "artist": "Anan Ryoko",
      "url": "https://music.163.com/song/media/outer/url?id=468176711.mp3",
      "cover": "https://p1.music.126.net/HpNhvHFZXTLwrVXMT7WP8g==/109951163028848374.jpg?param=130y130"
    },{
      "name": "下完这场雨 ",
      "artist": "后弦",
      "url": "https://music.163.com/song/media/outer/url?id=434550534.mp3",
      "cover": "http://p1.music.126.net/BanEqZaHg_xWU68mlgb-Fw==/109951163877302764.jpg?param=130y130"
    },{
      "name": "宠爱",
      "artist": "王俊凯",
      "url": "https://music.163.com/song/media/outer/url?id=490595323.mp3",
      "cover": "https://p2.music.126.net/Ou7tn3d31-uB3yD__ywb9w==/109951164219793180.jpg?param=130y130"
    },{
      "name": "城南花已开",
      "artist": "三亩地",
      "url": "https://music.163.com/song/media/outer/url?id=468176711.mp3",
      "cover": "https://p1.music.126.net/i-7ktILRPImJ0NwiH8DABg==/109951162885959979.jpg?param=130y130"
    },{
      "name": "词不达意 (Live)",
      "artist": "林忆莲",
      "url": "https://music.163.com/song/media/outer/url?id=255644.mp3",
      "cover": "https://p2.music.126.net/BA7E7hW81goaihFdv30z9w==/109951163062452313.jpg?param=130y130"
    },{
      "name": "我在诛仙逍遥涧",
      "artist": "王俊凯",
      "url": "https://music.163.com/song/media/outer/url?id=547971425.mp3",
      "cover": "https://p2.music.126.net/HfPVoHtgyfPLTTgbAeuBfA==/109951163211975444.jpg?param=130y130"
    },{
      "name": "李白",
      "artist": "李荣浩",
      "url": "https://music.163.com/song/media/outer/url?id=27678655.mp3",
      "cover": "https://p1.music.126.net/0uZ_bKtm4E188Uk9LFN1qg==/109951163187393370.jpg?param=130y130"
    },{
      "name": "Perfect",
      "artist": "Boyce Avenue",
      "url": "https://music.163.com/song/media/outer/url?id=1401710442.mp3",
      "cover": "https://p1.music.126.net/-G3U6cU_HN3XnlXNHaSMGQ==/109951164473803295.jpg?param=130y130"
    },{
      "name": "遇见",
      "artist": "孙燕姿",
      "url": "https://music.163.com/song/media/outer/url?id=454828887.mp3",
      "cover": "https://p2.music.126.net/KZ0VfIoFYsxpjz9sTQuLVQ==/17687843556430013.jpg?param=130y130"
    },{
      "name": "Lucky",
      "artist": "Lenka",
      "url": "https://music.163.com/song/media/outer/url?id=497463179.mp3",
      "cover": "https://p1.music.126.net/C1NxAy5W1BNem4M8f7hqLQ==/18892908300363464.jpg?param=130y130"
    },{
      "name": "明天你好",
      "artist": "牛奶咖啡",
      "url": "https://music.163.com/song/media/outer/url?id=33756016.mp3",
      "cover": "https://p1.music.126.net/1Al0vrBmm5-HtNXyJH953w==/7952767605403009.jpg?param=130y130"
    },{
      "name": "我的梦 (Live)",
      "artist": "张靓颖/马臻",
      "url": "https://music.163.com/song/media/outer/url?id=431853688.mp3",
      "cover": "https://p1.music.126.net/jwlysHDFr7u8Et4XBvBDlw==/109951163064510445.jpg?param=130y130"
    },{
      "name": "勇气",
      "artist": "梁静茹",
      "url": "https://music.163.com/song/media/outer/url?id=254485.mp3",
      "cover": "https://p2.music.126.net/PavIMxZq16K7-0fSF5n-yg==/109951163240604120.jpg?param=130y130"
    },{
      "name": "曾经的你",
      "artist": "许巍",
      "url": "https://music.163.com/song/media/outer/url?id=167975.mp3",
      "cover": "https://p1.music.126.net/GoiTB6oG3vQWntnCjKRw0g==/109951163092691594.jpg?param=130y130"
    },{
      "name": "她说",
      "artist": "林俊杰",
      "url": "https://music.163.com/song/media/outer/url?id=108242.mp3",
      "cover": "https://p2.music.126.net/peLODpaxX1Hl4RWYKR-34Q==/109951163071284933.jpg?param=130y130"
    },{
      "name": "世间美好与你环环相扣",
      "artist": "柏松",
      "url": "https://music.163.com/song/media/outer/url?id=1363948882.mp3",
      "cover": "https://p1.music.126.net/DK1_4sP_339o5rowMdPXdw==/109951164071024476.jpg?param=130y130"
    },{
      "name": "All Falls Down",
      "artist": "Alan Walker",
      "url": "https://music.163.com/song/media/outer/url?id=515453363.mp3",
      "cover": "https://p1.music.126.net/rTb28CZeLWxIRuSlJWkPLQ==/18850027346628137.jpg?param=130y130"
    },{
      "name": "Faded",
      "artist": "Alan Walker ",
      "url": "https://music.163.com/song/media/outer/url?id=36990266.mp3",
      "cover": "https://p2.music.126.net/8dzD62VK8jLDbhEqkmpIAg==/18277181788626198.jpg?param=130y130"
    }
  ]
});
