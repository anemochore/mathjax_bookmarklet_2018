(() => {
  let p = document.body;
  let g = document.createElement('script');
  let s = document.getElementsByTagName('script')[0];
  g.type = 'text/x-mathjax-config';
  g.text = 'MathJax.Hub.Config({tex2jax: {inlineMath: [["$","$"]],processEscapes: true}})';

  if(s === undefined) {
    p.appendChild(g);
    s = document.getElementsByTagName('script')[0];
  }
  else {
    p.insertBefore(g, s);
  }

  g = document.createElement('script');
  g.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-MML-AM_CHTML';
  p.appendChild(g);
})();
