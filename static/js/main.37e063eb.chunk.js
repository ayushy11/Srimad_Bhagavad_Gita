(this["webpackJsonpsrimad-bhagavad-gita"]=this["webpackJsonpsrimad-bhagavad-gita"]||[]).push([[0],{38:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){},55:function(e,a,t){"use strict";t.r(a);var c=t(0),i=t(14),n=t.n(i),s=t(15),r=t(5),j=(t(38),t(2));var d=function(){return Object(j.jsxs)("div",{className:"navbar",children:[Object(j.jsx)("h1",{children:"\u015ar\u012bmad Bhagavad Gita"}),Object(j.jsxs)("div",{className:"navbar__link",children:[Object(j.jsx)("div",{className:"navbar__item",children:Object(j.jsx)(s.b,{exact:!0,activeClassName:"menu_active",className:"navbar__link-active","aria-current":"page",to:"/",children:"Chapters"})}),Object(j.jsx)("div",{className:"navbar__item",children:Object(j.jsx)(s.b,{exact:!0,activeClassName:"menu_active",className:"navbar__link-active","aria-current":"page",to:"/verse",children:"Verse"})})]})]})},m=(t(45),t.p+"static/media/image.fb9f0ce4.jpg");var o=function(){return Object(j.jsxs)("div",{className:"title",children:[Object(j.jsx)("img",{src:m,alt:""}),Object(j.jsx)("h2",{children:"\u015ar\u012bmad Bhagavad Gita"})]})};t(46);var h=function(){return Object(j.jsx)("div",{className:"menu",children:Object(j.jsx)("h2",{children:"As they approach me, so I receive them. All paths, Arjuna, lead to me."})})};t(47);var p=function(){return Object(j.jsx)("div",{className:"footer",children:Object(j.jsx)("p",{children:"Made with \u269b\ufe0f"})})},l=t(21),b=(t(48),t(74)),u=t(73),g=t(70),v=t(71),x=t(75),O=t(72),f=(t(49),t.p+"static/media/img1.108fc781.jpg"),_=t.p+"static/media/img2.37447846.jpg",N=t.p+"static/media/img3.3f4091be.jpg",y=t.p+"static/media/img4.d01e8004.jpg",S=t.p+"static/media/img5.d28250a2.jpg",k=t.p+"static/media/img6.f054f0e4.jpg",B=t.p+"static/media/img7.f74e2203.jpg",C=t.p+"static/media/img8.c8343fdc.jpg",G=t.p+"static/media/img9.675c521b.jpg",A=t.p+"static/media/img10.fea6aedb.jpg",I=t.p+"static/media/img11.1f0544fc.jpg",R=t.p+"static/media/img12.8a595353.jpg",w=t.p+"static/media/img13.e49f69fe.jpeg",E=t.p+"static/media/img14.d914b730.jpg",T=t.p+"static/media/img15.22ee323d.jpg",F=t.p+"static/media/img16.dbd35529.jpg",J=t.p+"static/media/img17.2ef6eccd.jpg",L=t.p+"static/media/img18.6e17d301.jpg";var V=function(e){e.key;var a=e.id,t=e.name,c=e.meaning,i=e.summary,n=e.verseId;return Object(j.jsx)(b.a,{className:"chapter__card",children:Object(j.jsxs)(u.a,{children:[Object(j.jsx)(g.a,{className:"chapter__cardmedia",image:1===a?f:2===a?_:3===a?N:4===a?y:5===a?S:6===a?k:7===a?B:8===a?C:9===a?G:10===a?A:11===a?I:12===a?R:13===a?w:14===a?E:15===a?T:16===a?F:17===a?J:L,title:"Contemplative Reptile"}),Object(j.jsxs)(v.a,{className:"chapter__cardcontent",children:[Object(j.jsxs)(x.a,{className:"chapter__cardheading",gutterBottom:!0,variant:"h7",component:"h1",children:["Chapter ",a," - ",t]}),Object(j.jsx)(O.a,{}),Object(j.jsx)(x.a,{className:"chapter__cardheading",variant:"h7",color:"textSecondary",component:"h2",children:c}),Object(j.jsxs)(x.a,{className:"chapter__cardheading",color:"textSecondary",component:"h2",children:["Total verses - ",n]}),Object(j.jsx)(O.a,{}),Object(j.jsx)(x.a,{className:"chapter__cardsummary",variant:"body1",color:"textSecondary",component:"p",children:i})]})]})})};var M=function(){var e=Object(c.useState)([]),a=Object(l.a)(e,2),t=a[0],i=a[1];return Object(c.useEffect)((function(){fetch("https://vedicscripturesapi.herokuapp.com/gita/chapters").then((function(e){return e.json()})).then((function(e){i(e)}))}),[]),console.log(t),Object(j.jsx)("div",{className:"home__chapter",children:t.map((function(e){return Object(j.jsx)(V,{id:e.chapter_number,name:e.transliteration,meaning:e.meaning.en,summary:e.summary.en,verseId:e.verses_count},e.chapter__number)}))})},U=(t(50),t.p+"static/media/imgverse.0cf2618e.jpg");t(51);var q=function(e){var a=e.id,t=e.content,c=e.verse,i=e.meaning;return Object(j.jsx)(b.a,{className:"verse__card",children:Object(j.jsxs)(u.a,{children:[Object(j.jsx)(g.a,{className:"verse__cardmedia",image:U,title:"Contemplative Reptile"}),Object(j.jsxs)(v.a,{children:[Object(j.jsxs)(x.a,{className:"verse__cardheading",gutterBottom:!0,variant:"h7",component:"h1",children:["Verse- ",a]}),Object(j.jsx)(O.a,{}),Object(j.jsx)(x.a,{className:"verse__cardsummary",variant:"h7",color:"textSecondary",component:"h2",children:c}),Object(j.jsx)(O.a,{}),Object(j.jsx)(x.a,{className:"verse__cardsummary",variant:"h7",color:"textSecondary",component:"h3",children:i}),Object(j.jsx)(O.a,{}),Object(j.jsx)(x.a,{variant:"body1",color:"textSecondary",component:"p",children:t})]})]})})};var z=function(){var e=Object(c.useState)([]),a=Object(l.a)(e,2),t=a[0],i=a[1],n=Object(c.useState)([]),s=Object(l.a)(n,2),r=s[0],d=s[1];return Object(c.useEffect)((function(){fetch("https://vedicscripturesapi.herokuapp.com/gita").then((function(e){return e.json()})).then((function(e){i(e),d(e.siva)}))}),[]),Object(j.jsx)("div",{className:"home__verse",children:Object(j.jsx)(q,{id:t.verse,content:r.et,verse:t.slok,meaning:t.transliteration})})},D=(t(52),t.p+"static/media/img3.e12a0032.png");var H=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"about",children:[Object(j.jsxs)("div",{className:"about__content",children:[Object(j.jsx)("h2",{children:"\u015ar\u012bmad Bhagavad Gita"}),Object(j.jsx)("p",{children:'Read, study and recite \u015ar\u012bmad Bhagavad Gita in a simple and beautiful interface. Bhagavad Gita - "The Song of The Lord" is a practical guide to one\'s life that guides you to re-organise your life, achieve inner peace and approach the Supreme Lord (the Ultimate Reality).'})]}),Object(j.jsx)("div",{className:"about__img",children:Object(j.jsx)("img",{src:D,alt:""})})]})})};t(53);var K=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(d,{}),Object(j.jsx)(o,{}),Object(j.jsx)(h,{}),Object(j.jsxs)(r.d,{children:[Object(j.jsx)(r.b,{exact:!0,path:"/",component:M}),Object(j.jsx)(r.b,{exact:!0,path:"/verse",component:z}),Object(j.jsx)(r.a,{to:"/"})]}),Object(j.jsx)(H,{}),Object(j.jsx)(p,{})]})};t(54);n.a.render(Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(s.a,{children:Object(j.jsx)(K,{})})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.37e063eb.chunk.js.map