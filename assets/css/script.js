// год в футере
document.getElementById('y').textContent = new Date().getFullYear();

// плавный скролл к секциям
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href');
    if(id.length>1){
      e.preventDefault();
      document.querySelector(id).scrollIntoView({behavior:'smooth', block:'start'});
      history.pushState(null,'',id);
    }
  });
});
