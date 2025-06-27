var posts=["2025/06/21/开心周末-0622/","2025/06/23/鹿儿在欢乐营地自助烤肉/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };