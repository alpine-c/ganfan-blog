var posts=["2025/06/21/湖北图书馆-沙湖公园c区-SKP/","2025/07/02/月湖水上乐园-万科未来中心/","2025/06/23/鹿儿在欢乐营地-自助烤肉/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };