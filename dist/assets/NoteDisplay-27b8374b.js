import{d,i as m,a as p,f as s,E as i,g as a,t as c,o as l,_ as u}from"./index-3f700663.js";const v=["innerHTML"],f=["textContent"],y=["textContent"],k=d({__name:"NoteDisplay",props:{class:{type:String,required:!1},noteHtml:{type:String,required:!1},note:{type:String,required:!1},placeholder:{type:String,required:!1}},emits:["click"],setup(t){const n=t;return m(p),(o,e)=>t.noteHtml?(l(),s("div",{key:0,class:i(["prose overflow-auto outline-none",n.class]),onClick:e[0]||(e[0]=r=>o.$emit("click")),innerHTML:t.noteHtml},null,10,v)):t.note?(l(),s("div",{key:1,class:i(["prose overflow-auto outline-none",n.class]),onClick:e[1]||(e[1]=r=>o.$emit("click"))},[a("p",{textContent:c(t.note)},null,8,f)],2)):(l(),s("div",{key:2,class:i(["prose overflow-auto outline-none opacity-50 italic",n.class]),onClick:e[2]||(e[2]=r=>o.$emit("click"))},[a("p",{textContent:c(n.placeholder||"No notes.")},null,8,y)],2))}}),g=u(k,[["__file","D:/crush/atom-css/node_modules/.pnpm/registry.npmmirror.com+@slidev+client@0.40.3_vite@4.1.4/node_modules/@slidev/client/internals/NoteDisplay.vue"]]);export{g as N};
