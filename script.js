const man=document.querySelector("#man"),stage=document.querySelector("#stage"),count=document.querySelector("#count"),msg=document.querySelector("#message"),thought=document.querySelector("#thought"),btn=document.querySelector("#forgive"),finale=document.querySelector("#finale"),title=document.querySelector("#finalTitle"),text=document.querySelector("#finalText"),emoji=document.querySelector("#finalEmoji");
let n=0,done=false;
man.classList.add("sorry");
const lines=["Please maan jao... 🥺","Kaan pakad ke sorry bol raha hoon! 😭","Galti ho gayi... sach mein.","Itne squats aur kitne? 🥹","Bas ab toh maaf kar do ❤️"];
const timer=setInterval(()=>{if(done)return;n++;count.textContent=n;thought.textContent=lines[n%lines.length]},900);
btn.addEventListener("click",()=>{
 if(done)return; done=true; clearInterval(timer); man.classList.remove("sorry");
 thought.textContent="Maaf kar diya! ❤️"; msg.textContent="Aur phir... dono ek doosre ke paas aa gaye.";
 stage.classList.add("hugging");
 setTimeout(()=>{finale.classList.add("show");title.textContent="Aakhir maaf kar diya... 🥹";text.textContent="Aao... ek hug toh banta hai ❤️";emoji.textContent="🫂"},1400);
 setTimeout(()=>{title.textContent="Hug ke baad... ek chhota sa kiss 💋";text.textContent="Because some apologies deserve a happy ending.";emoji.textContent="🥹❤️";},3400);
});