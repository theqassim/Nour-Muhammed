(function(){
var $=function(s,c){return [].slice.call((c||document).querySelectorAll(s))};
var mob=matchMedia('(max-width:820px)').matches,rm=matchMedia('(prefers-reduced-motion:reduce)').matches,fine=matchMedia('(hover:hover)').matches;
if('scrollRestoration' in history)history.scrollRestoration='manual';
$('.sp').forEach(function(s,k){var N=150,g='';for(var i=0;i<N;i++){var r=50*Math.sqrt((i+.5)/N),a=i*2.39996323,rr=.35+3*Math.pow(r/50,1.35);g+='<circle cx="'+(r*Math.cos(a)).toFixed(2)+'" cy="'+(r*Math.sin(a)).toFixed(2)+'" r="'+rr.toFixed(2)+'"/>'}s.innerHTML='<g fill="rgba(110,10,12,.34)" style="animation-delay:-'+(k*13)+'s">'+g+'</g>'});
$('.ln>span').forEach(function(s){var t=s.textContent,h='',i=0;t.split(' ').forEach(function(w,n){h+=(n?' ':'')+'<span class="wd">';for(var c of w){h+='<i class="ch" style="--i:'+(i++)+'">'+(c==='&'?'&amp;':c)+'</i>'}h+='</span>';i++});s.setAttribute('aria-label',t);s.innerHTML='<span aria-hidden="true">'+h+'</span>'});
var slides=$('.slide');
if(mob)['s5','s7'].forEach(function(id){var sl=document.getElementById(id),frs=$(':scope>.fr',sl),pns=$(':scope>.pn',sl),car=document.createElement('div'),dots=document.createElement('div');car.className='car';dots.className='dots';
 frs.forEach(function(f,i){var c=document.createElement('div');c.className='cd';c.style.setProperty('--k',i);c.appendChild(f);c.appendChild(pns[i]);car.appendChild(c);dots.appendChild(document.createElement('i'))});
 sl.appendChild(car);sl.appendChild(dots);var d=$('i',dots);d[0].className='act';
 car.addEventListener('scroll',function(){var w=car.firstChild.offsetWidth+14,k=Math.round(car.scrollLeft/w);d.forEach(function(x,i){x.className=i===k?'act':''})},{passive:true})});
var prices=$('#s7 .pn .t:first-child');if(!rm)prices.forEach(function(el){el.dataset.n=el.textContent.replace(/\D/g,'');el.textContent='$0'});
function countUp(){prices.forEach(function(el,i){var n=+el.dataset.n;if(!n)return;setTimeout(function(){var t0;requestAnimationFrame(function f(t){t0=t0||t;var k=Math.min(1,(t-t0)/1000);el.textContent='$'+Math.round(n*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(f)})},800+i*140)})}
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('on');if(e.target.id==='s7'&&!rm)countUp();io.unobserve(e.target)}})},{threshold:mob?.12:.3});
slides.forEach(function(s,i){if(i)io.observe(s)});
var went=0,go=function(){if(went)return;went=1;document.body.style.overflow='';slides[0].classList.add('on')};
var ld=document.getElementById('ld'),pc=document.getElementById('pc'),lb=document.getElementById('lb');
function intro(){if(!ld||rm){ld&&ld.remove();go();return}
 document.body.style.overflow='hidden';scrollTo(0,0);var t0;
 requestAnimationFrame(function f(t){t0=t0||t;var k=Math.min(1,(t-t0)/1300),e=1-Math.pow(1-k,3);pc.textContent=Math.round(e*100);lb.style.width=e*100+'%';
  if(k<1)requestAnimationFrame(f);else{ld.classList.add('out');setTimeout(go,420);setTimeout(function(){ld.remove()},1200)}})}
(document.fonts&&document.fonts.ready?document.fonts.ready:Promise.resolve()).then(function(){setTimeout(intro,80)});setTimeout(function(){if(!went&&!ld)go()},3000);
var map={s1:'home',s3:'about',s5:'project',s9:'contact'},btns=$('nav button'),pill=document.getElementById('pill'),bar=document.getElementById('bar'),tk=0,vis=new Set();
btns.forEach(function(b){b.addEventListener('click',function(){document.getElementById(b.dataset.t).scrollIntoView({behavior:'smooth'})})});
var cache=slides.map(function(s){return{s:s,t:$('.D',s),i:$('.fr:not(.man) img',s),p:$('.sp',s)}});
new IntersectionObserver(function(es){es.forEach(function(e){e.isIntersecting?vis.add(e.target):vis.delete(e.target)})},{threshold:0}).observe&&slides.forEach(function(s){});
var vio=new IntersectionObserver(function(es){es.forEach(function(e){e.isIntersecting?vis.add(e.target):vis.delete(e.target)})});slides.forEach(function(s){vio.observe(s)});
function upd(){tk=0;var y=scrollY,h=document.documentElement.scrollHeight-innerHeight,cur=slides[0];
 slides.forEach(function(s){if(s.getBoundingClientRect().top<=innerHeight*.45)cur=s});
 if(pill.dataset.v!==cur.dataset.pg){pill.dataset.v=cur.dataset.pg;pill.textContent='PAGE '+cur.dataset.pg;if(pill.animate&&!rm)pill.animate([{transform:'translateY(70%)',opacity:0},{transform:'none',opacity:1}],{duration:380,easing:'cubic-bezier(.2,.7,.1,1)'})}
 btns.forEach(function(b){b.classList.toggle('on',map[b.dataset.t]===cur.dataset.nav)});
 bar.style.width=(h>0?y/h*100:0)+'%';
 if(!rm){var k=mob?.5:1;cache.forEach(function(o){if(!vis.has(o.s))return;var r=o.s.getBoundingClientRect(),p=(innerHeight-r.top)/(innerHeight+r.height);
  o.t.forEach(function(t,i){t.style.translate=((p-.5)*(i%2?-1:1)*90*k).toFixed(1)+'px 0'});
  o.i.forEach(function(m){m.style.setProperty('--py',((p-.5)*-26*k).toFixed(1)+'px')});
  o.p.forEach(function(s){s.style.rotate=(p*100).toFixed(1)+'deg'})})}}
addEventListener('scroll',function(){if(!tk){tk=1;requestAnimationFrame(upd)}},{passive:true});addEventListener('resize',upd);upd();
if(fine&&!rm){
 var mx=0,my=0,cx=0,cy=0,px=-100,py=-100,qx=-100,qy=-100,sps=$('.sp'),cu=document.createElement('div');cu.className='cur';document.body.appendChild(cu);
 addEventListener('pointermove',function(e){mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5;px=e.clientX;py=e.clientY});
 document.addEventListener('pointerover',function(e){cu.classList.toggle('big',!!e.target.closest('a,button,.fr:not(.man),.row'))});
 (function loop(){cx+=(mx-cx)*.06;cy+=(my-cy)*.06;qx+=(px-qx)*.2;qy+=(py-qy)*.2;cu.style.transform='translate('+qx.toFixed(1)+'px,'+qy.toFixed(1)+'px)';
  sps.forEach(function(s){var f=+s.dataset.par||1;s.style.transform='translate('+(cx*-40*f).toFixed(1)+'px,'+(cy*-40*f).toFixed(1)+'px)'});requestAnimationFrame(loop)})()}
})();
