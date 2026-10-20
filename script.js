(function(){
var n=document.getElementById('n'),p=document.getElementById('p'),g=document.getElementById('g'),a=document.getElementById('wa');
function u(){
var m='Hi Royal Fitness, my name is '+(n.value.trim()||'(name)')+'. I want to join: '+p.value+'. My goal: '+g.value+'. Please share the next steps.';
a.href='https://wa.me/917047043054?text='+encodeURIComponent(m);
}
[n,p,g].forEach(function(e){e.addEventListener('input',u)});
u();
document.getElementById('y').textContent=new Date().getFullYear();
var c=document.getElementById('cp'),t='Royal Fitness, Neamatpur, New Road, Sparkle';
c.addEventListener('click',function(){try{navigator.clipboard.writeText(t).then(function(){c.textContent='Address copied'},function(){c.textContent=t})}catch(e){c.textContent=t}});
})();