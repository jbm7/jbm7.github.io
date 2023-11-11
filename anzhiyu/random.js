var posts=["2023/11/11/hello-world/","2023/11/11/page/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };