"use strict";(self.webpackChunkkotlinfoundation_github_io=self.webpackChunkkotlinfoundation_github_io||[]).push([[190],{42106:function(e,a,n){n.r(a),n.d(a,{default:function(){return f}});var t=n(67294),i=n(11151);function s(e){const a=Object.assign({p:"p",a:"a",span:"span",h2:"h2",pre:"pre",code:"code",strong:"strong",ol:"ol",li:"li"},(0,i.ah)(),e.components);return t.createElement(t.Fragment,null,t.createElement(a.p,null,"The Kotlin Foundation sponsored four projects for Google Summer of Code 2023, and we are excited to announce the completion of the Parallel Stacks for Kotlin Coroutines in the Debugger project, for which Google, a Kotlin Foundation member, provided mentoring support. Today we'd like to share the details of the project with you."),"\n",t.createElement(a.p,null,"The primary contributor to this project was ",t.createElement(a.a,{href:"https://www.linkedin.com/in/raehat-singh-nanda-b29085201/"},"Raehat Singh Nanda"),", a computer science undergraduate, mentored by Nikita Nazarov, Kotlin Compiler Engineer on the Android team at Google. The project aimed to provide a visual way to debug applications using multiple coroutines."),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 650px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 61.963190184049076%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsTAAALEwEAmpwYAAAC+ElEQVR42j2SXW/jRBSG80Pgh8DPYNuCkLeLaJv9YFVWKwQ3XCMhcckl4mJvQFs1aQTdOMuKa1TYdmnaxvncNHES2/HX2DMe2+OZF9lZMdKjc2Y0es975kxtX9M+rD+ovzp4cNje23/Y3tt/pN/d3dPv7n6u7x881Ov3v/if++/il0++0p8+/VqvPz7Uv//uW/2bx0/a9UeHf3527+CD2vnF5aeWtYTrLBEGLsLAR0giJIxWcMbe5QyUxkgShkLkFbIQgCqgZA7GGC4uLj+pjSbTLRa5COxJLlJfFFkkeCZESHOxciMxmizF27kjpnNLzJa2MC1P2C4R1pqItU8rHJ/mJE4xGIw+qg2Go52IJZjczqTtekoUBRwvxtmNjX96Nv7uLnF2VWLi3Fhs8usF/uoucHa9wmvDUa/7a2lMPfR6xlatPxjthDTGzFpJ016pkMXIRYFyFYVETDnKgnFMQQgB9SlISEBIhIAQxJwrlE3nOXpGfyNIGQdPhUySTCU8Q0wZIkpBSyGaYO36iGIKlqRgSbaBbyJlXFGWyrKw0R9sBMuLWZbJLMtUmuZYWVPc3t7A903EMYFpjmHbU0SxhyyXyPMCWVaAp3mJ4mkuSyM9Y7BVG4+nO/baQ7dvyPF8ptZBgDTLETOO/sTEaGZj4YSV2/LcctaYLZaw1m7lPuFVV7I0VQl2r262HS/AxLTkzAqUGySKslyROFX9t0s1mjvK8piKaaaSRChz5anxbKUsjyg/DJXRP1fG4FzazhyD4eRO7d/Lq22WcEiFIs8LmWZCVu/Jc7lyfLmwQukGiaQsl5RlknMhs0xWhBGXxmQuh7eLwgkIhsPxndrFm+7HrhchJAyknGTEQCJaDaGM5T6KE5CIw3IIzKUHe00QhKz6ASVJwrFwKJqvrrdrP/387P3j5m+7R8ctrdE80RrN37Vfnx9rJ42WdnTU0BrNlqbrL7XT0472ov1S0zt/aJ1OR9P1jtbWO9rpi7bWPGlpvzxv7f7w47P3/gMP8DoZLqAPKgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="debugging multiple coroutines"\n        title=""\n        src="/static/fc43cfeef9bf29a50376a94e12347269/a6d36/image6.png"\n        srcset="/static/fc43cfeef9bf29a50376a94e12347269/222b7/image6.png 163w,\n/static/fc43cfeef9bf29a50376a94e12347269/ff46a/image6.png 325w,\n/static/fc43cfeef9bf29a50376a94e12347269/a6d36/image6.png 650w,\n/static/fc43cfeef9bf29a50376a94e12347269/e548f/image6.png 975w,\n/static/fc43cfeef9bf29a50376a94e12347269/3c492/image6.png 1300w,\n/static/fc43cfeef9bf29a50376a94e12347269/1df5b/image6.png 1999w"\n        sizes="(max-width: 650px) 100vw, 650px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",t.createElement(a.h2,{id:"project-goals"},"Project Goals"),"\n",t.createElement(a.p,null,"While coroutines streamline asynchronous coding, debugging multiple coroutines can pose challenges, especially in large-scale applications. IntelliJ IDEA's Coroutines tab provides the ability to visualize coroutines, but it doesn't provide functionality to understand the connections between different but related coroutines."),"\n",t.createElement(a.p,null,"The new Coroutine Stacks IntelliJ IDEA plugin provides a graphical depiction of numerous coroutines in specific application states. This innovation draws inspiration from the Parallel Stacks feature found in established IDEs such as JetBrains Rider, JetBrains CLion, and Microsoft Visual Studio."),"\n",t.createElement(a.p,null,"Upon initiating the IntelliJ IDEA debugger and encountering a breakpoint, an application enters a suspended state. Then, the Coroutine Stacks panel displays a parallel stack view that facilitates in-depth analysis for debugging purposes."),"\n",t.createElement(a.h2,{id:"coroutine-stacks"},"Coroutine Stacks"),"\n",t.createElement(a.p,null,"Consider the following code sample with multiple coroutines:"),"\n",t.createElement(a.pre,{className:"language-kotlin"},t.createElement(a.code,{className:"language-kotlin"},t.createElement(a.span,{className:"token keyword"},"import")," kotlinx",t.createElement(a.span,{className:"token punctuation"},"."),"coroutines",t.createElement(a.span,{className:"token punctuation"},"."),t.createElement(a.span,{className:"token operator"},"*"),"\n\n",t.createElement(a.span,{className:"token keyword"},"fun")," ",t.createElement(a.span,{className:"token function"},"main"),t.createElement(a.span,{className:"token punctuation"},"("),t.createElement(a.span,{className:"token punctuation"},")")," ",t.createElement(a.span,{className:"token operator"},"=")," runBlocking",t.createElement(a.span,{className:"token operator"},"<"),"Unit",t.createElement(a.span,{className:"token operator"},">")," ",t.createElement(a.span,{className:"token punctuation"},"{"),"\n    launch ",t.createElement(a.span,{className:"token punctuation"},"{"),"\n        ",t.createElement(a.span,{className:"token function"},"withContext"),t.createElement(a.span,{className:"token punctuation"},"("),"Dispatchers",t.createElement(a.span,{className:"token punctuation"},"."),"Default",t.createElement(a.span,{className:"token punctuation"},")")," ",t.createElement(a.span,{className:"token punctuation"},"{"),"\n            ",t.createElement(a.span,{className:"token function"},"println"),t.createElement(a.span,{className:"token punctuation"},"("),t.createElement(a.span,{className:"token punctuation"},")"),"\n            ",t.createElement(a.span,{className:"token function"},"delay"),t.createElement(a.span,{className:"token punctuation"},"("),t.createElement(a.span,{className:"token number"},"1000"),t.createElement(a.span,{className:"token punctuation"},")"),"\n        ",t.createElement(a.span,{className:"token punctuation"},"}"),"\n    ",t.createElement(a.span,{className:"token punctuation"},"}"),"\n    \n    \n    launch ",t.createElement(a.span,{className:"token punctuation"},"{"),"\n        ",t.createElement(a.span,{className:"token function"},"withContext"),t.createElement(a.span,{className:"token punctuation"},"("),"Dispatchers",t.createElement(a.span,{className:"token punctuation"},"."),"Default",t.createElement(a.span,{className:"token punctuation"},")")," ",t.createElement(a.span,{className:"token punctuation"},"{"),"\n            ",t.createElement(a.span,{className:"token function"},"println"),t.createElement(a.span,{className:"token punctuation"},"("),t.createElement(a.span,{className:"token punctuation"},")"),"\n            ",t.createElement(a.span,{className:"token function"},"delay"),t.createElement(a.span,{className:"token punctuation"},"("),t.createElement(a.span,{className:"token number"},"1000"),t.createElement(a.span,{className:"token punctuation"},")"),"\n        ",t.createElement(a.span,{className:"token punctuation"},"}"),"\n    ",t.createElement(a.span,{className:"token punctuation"},"}"),"\n",t.createElement(a.span,{className:"token punctuation"},"}"),"\n")),"\n",t.createElement(a.p,null,"Let’s add a breakpoint on the following line:"),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 650px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 71.77914110429448%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsTAAALEwEAmpwYAAACbUlEQVR42qWQy08TURjFJ2GnGEPigsXMYjrDFAGrRHDpP+NG94aHtBVDwNdO48YYSIvEvwDEhX3p1oXrTqTttDw6fc3MvfPo3Hs/c9siQjBivMkvX3LmzrnnfMLMtfFLd25OzE3NTC/HYrMJORJNHhNRxk/BNS06lbwRu51UxyeSqjbB9cTk5K3lqdjsw+vTd4eFB/fui7s7H2Fn9xPk8wXI5fKQzfbJZHKQyeb6M5ODz5lsTy8UvkImd/ItX/gC29u7ND6/FBGWV1ZFQsEBABZSCAGAMAACF4f/A0GXtDY20rKwsrIm2g7CQRiCaSF2aDbY/lGdHRwdMWQjZtsOQxixIOgyQsh5UMYYtDuW9fbduiysPX0mIuzikPCHGKs3m1Ct1aDRbAO2A+j6XfADHzzPA0opDwPc4DcY1xByrfTmliysrvUNuU4oZSGhfAJlAL2bfznH1xyErVRqUxaev3jZT9gNwfN9ZjYaYNbr0GqaEDgueByMwEUIaBgCI+QsDCgFx8FWiieMP34itloWDlwPiOeyllmHw1oVOmYT3I4DBCMIBxAXA/XcszDme+BYtpXa+iALC4txsd2xMa/JK1O+F4ALV4Zfld1+5bn5JbFjOXiw7NMep5f/J052mH4vC4uPEjyhMzAkjPGQ/wQZGLZ7hvMLccmyEYX/PA7C/vpGOiLMLSZGi/re93LZ2KsYtWK5YuiVSlUvlap6pVTWDaOmHxwc6vvnUK3t6+WKUSyVjb2i/uPbq9dvROHy8JUhRdVGFUWVFFUTFVWTVFWTFEWTVEWV1DFN0rSoNHYeY70pyhFV0qLR0ZGRq0M/AYqRgy+MqwdWAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="breakpoint"\n        title=""\n        src="/static/baa5ef9710361c752529550ab4dfb215/a6d36/image7.png"\n        srcset="/static/baa5ef9710361c752529550ab4dfb215/222b7/image7.png 163w,\n/static/baa5ef9710361c752529550ab4dfb215/ff46a/image7.png 325w,\n/static/baa5ef9710361c752529550ab4dfb215/a6d36/image7.png 650w,\n/static/baa5ef9710361c752529550ab4dfb215/e548f/image7.png 975w,\n/static/baa5ef9710361c752529550ab4dfb215/3c492/image7.png 1300w,\n/static/baa5ef9710361c752529550ab4dfb215/1df5b/image7.png 1999w"\n        sizes="(max-width: 650px) 100vw, 650px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",t.createElement(a.p,null,"To open the ",t.createElement(a.strong,null,"Coroutine Stacks")," panel, click in the bottom right-hand corner of your main IDE panel:"),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 650px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 71.77914110429448%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsTAAALEwEAmpwYAAACjElEQVR42qWRz08TQRTHN+GGcNOEw/aw7XbLbzCiR/8ZDyaeDT9CqQSxghcvJiZqJC0ST16MgDGxLeDVgydDaFL6k5a2lN2d2Z8z75lpaRRCgsZJPpnJd9578+b7pKnrg713Joamx6YmFycmbi8owUisSzA0eA6haZHR2Nj4rZg6OBxTtWGhL4yMTC6Ojt9+OHTzbp/04N59eXtrGz9tfcFMZg8zmR1MpzukUhlMpTOdPZXBr6l0W9/d/YapzO+7nd093Nz8zKMz80FpaXlZ9hiaHBEchj4iMkBk+PeIHHQ9drK2llSkpcdx2TAJ9XwPGzqBar0BldoxHNVqQAwChmECoQRc1wPG2GVwAMDWqa6/evNWkeJPV2RCLer74jGA42YTS+UyNpotpIaLnuOh4zpo2zZyzkUzKAr8AQiNEEtPrm8oUjzeKcgBkHEOPuNiRw6I7cgrVjfMJFRPJNYVKb7yTCbEosz30XYcqDcaWK8d40mzjo5hoW1aaFOCFiHIfR+BsYsAco6mSfWE6PBJuyClvm0htym06nWslkt4Wm+irZvIKEH/DG5T5O24cwA4Npq6oSc23ivS6uqqTKhNbcdF13XAY4A+A3R9RJ+fjbwLvxQQ9himpSeT7xRpPvpI1g2TCms573gszl3TOb+Sjofiy6Lg7FxUbp0a5tn0GADwf4JzhpwhoVarPeWZ2WhANwjH/1nVEurVqvP6w8egND23MHCQzf3I54u5QrF8kC8Us4VCKXuYK2ZL5Ur26KiarVxAaOVypR0ncg4P87n9n/vfn794KUvX+vp7Qqo2EAqpgZCqySFVC6iqFgiFwgE1rAU0LRIIX6CthSPt+7AalhVVCwxNTA7c6O/t+QVSAYL6EKfLGAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Open Coroutine Stacks"\n        title=""\n        src="/static/664f6c2becad3e1be805a8aa2f3cd27c/a6d36/image5.png"\n        srcset="/static/664f6c2becad3e1be805a8aa2f3cd27c/222b7/image5.png 163w,\n/static/664f6c2becad3e1be805a8aa2f3cd27c/ff46a/image5.png 325w,\n/static/664f6c2becad3e1be805a8aa2f3cd27c/a6d36/image5.png 650w,\n/static/664f6c2becad3e1be805a8aa2f3cd27c/e548f/image5.png 975w,\n/static/664f6c2becad3e1be805a8aa2f3cd27c/3c492/image5.png 1300w,\n/static/664f6c2becad3e1be805a8aa2f3cd27c/1df5b/image5.png 1999w"\n        sizes="(max-width: 650px) 100vw, 650px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",t.createElement(a.p,null,"After the debugger stops at the breakpoint and opens the panel, you will see something like this:"),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 650px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 66.25766871165644%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAADCUlEQVR42lXRTW8bRRgH8D3CV6j4BpVPCEODk0htXCk0AS5wQAJxobbXRULiwgHxFXA598C14sCRqKA6tmMnTao2Sqw49jqOd727fpt9m13vq3f+aDdtlB5+mtl5Zv+aZ4bbyq1/8Pl2/vfN7S8f5/MPKqtr9ypr6xuV3Nq9d6y+kVu9W7m7sVnZuL9V+fr7ryo/f/tNJbeer2xufvFHPr99i3v69K/c0dFrnJycQhB6EHpd9IUeBhd9DC6EK30BFze8XROlAdThIN3bbrfx5Mmfn3CN1uEdtlxG0syLdl6IYeP4Mto56EfVIzVqHI+j2rEatdrz6PDciA46+htaav/sSutMC4WRiZcvmh9xe839FWfhgpgepInNhorOBorJRNVm8tRhQ9VggxFhl7LGRhOLjaaUjaZWOpcmZjqKY5PNNIpmcy/LtVoHK7bjwTDGIOSSaZoIw5Cg6yIoleG6FJZlg1KKIAgRhtE13w+SNRYEAVssPOzWGlmu2UpO6GMoHqPbrbLz810khsN9qOohHEdDGAFBuIQXRCnXC+H6ITw/TOYsQe0FajcDJekUnc4u6/Wa6PdbUJTXGI9fwXY0zAkFISYM00nZTgBqB1i4QRKaBtqOexWYtOwsPBBCoKgyU1UZsqKCUhfJ3TpuCFnRIYpJ3cJkaoLaPkzLvxEYMIs6qNX3slyt3lhJPoIwTrCkPWpTXAw6UFQR6ljCbK7CMCegtgY/WKYte/61NFDTTdQbzSz3vFq7Y5iUJYWF68WeH8VEU+JO579YEOpxt1uNhV4tFsVmTEg3rbte8I6F68eGYeJgv5nlqrv1T5MTRkuGIHm9iIHaBmT5FIpyBlE6wUhuYzQ6ga5LaT3ZlzzSW2G0xHhO8fc/rY+5Z/8+z47ksTWdaXQyJdZkSuhkQuhsSuicGFTTrRtMSjTj2mye/kPn87n16kx1f3u88yH32YOt9/nyj7cLxVKmWOIzxSKfKRRKmWKhkCnxfKZcLmd4vpzhy1fK5UfXSiU+9cPDUubXX366zX93/73/AVxsTulaf9Z0AAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Coroutine Stacks"\n        title=""\n        src="/static/7a5ef2258a91acb9466829a77d5db25c/a6d36/image3.png"\n        srcset="/static/7a5ef2258a91acb9466829a77d5db25c/222b7/image3.png 163w,\n/static/7a5ef2258a91acb9466829a77d5db25c/ff46a/image3.png 325w,\n/static/7a5ef2258a91acb9466829a77d5db25c/a6d36/image3.png 650w,\n/static/7a5ef2258a91acb9466829a77d5db25c/e548f/image3.png 975w,\n/static/7a5ef2258a91acb9466829a77d5db25c/3c492/image3.png 1300w,\n/static/7a5ef2258a91acb9466829a77d5db25c/1df5b/image3.png 1999w"\n        sizes="(max-width: 650px) 100vw, 650px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",t.createElement(a.p,null,"The ",t.createElement(a.strong,null,"Coroutine Stacks")," panel shows a graphical representation of different stack traces from different coroutines."),"\n",t.createElement(a.p,null,"From the image above, it is clear that there are two coroutines in the application. Their stack traces share a number of frames up until resumeWith. After that, the control flow of these coroutines diverges. The stack trace with the blue border refers to the coroutine that contains the current breakpoint. The frames highlighted in yellow come from libraries. You can hide library frames by clicking the filter button:"),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 650px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 66.25766871165644%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAACfUlEQVR42oWRS08TURiGu9S/YPwHZFZGlFogAaop1stGFyZGF8b0igvjwsT/4OiahVuiS2OCJlx6A8FEgg0oQ1vo0Gk7l7YzbeecOac9n5lDwZZqXDz5Ju8758k3ZzxB3+TF27f8rwPBu2/8/llxfGJanJicEX0T0wOM9/CNT4lTMwFx5npQvP/4nvj84QPRN+kXA4E7b/3+Wxc8CwvvfZub32F7+wdIkgTS3i/Yl/Ygn9uHfE46Zl+CXB8n2WExD8pBnr+bzWZhfv7dVU8yszHGOh1a1DBdzORIauuALq7n6MpmmSa3KnR1S6GZrEY3ftbp+m6th8FZ2zkms2MQSW7At6/py55kIuVtYweMQhGKuzlWKOksJxusUGowuWqyA6XG8rLOCkcGkysmk6sWz93nYqXB52G5waqGBZl0atSTzqx5WzYGB2NwHMIchwCl9BSEEFiWxXE7QugpGDu9Mw6zEYbllYQrXPe22ggQpmAjt3CgH4QJIIdyznY2IvwMwoS1bQwrg0IyJOxlMJwN5IPCzNq/hWc2AYT/1p0RriaSXtNqAXY/CxPWvwl2yKnEnScb82v4sz0Xuv+B3+HS8upYvdFkLRuxZsvuIkw4bRt3zWa727adLsK0ayPnP2BIp7gwcc1stkHVDZDlEqiaDppeA9NCkC+UQVFqUFJq0DAxENoFh3SGoJ0u1JsEPnxMXvF8/rI0Kh+VzapqWOWqbipl1VIU1apWVEvVDEvTa3zqRn0IN69UdUvTNHN7T7VfiZ8ueWZvBs9HovGRUCgihCNRIRqNCeFITAiHwkIkEhXi8TkhPvdMiMbivOsnHI5wnjwNCS9fxEdij26c+w3U3FqX15eRzQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Filter"\n        title=""\n        src="/static/f67809c19c0a16820f87f7ba0b077c3f/a6d36/image8.png"\n        srcset="/static/f67809c19c0a16820f87f7ba0b077c3f/222b7/image8.png 163w,\n/static/f67809c19c0a16820f87f7ba0b077c3f/ff46a/image8.png 325w,\n/static/f67809c19c0a16820f87f7ba0b077c3f/a6d36/image8.png 650w,\n/static/f67809c19c0a16820f87f7ba0b077c3f/e548f/image8.png 975w,\n/static/f67809c19c0a16820f87f7ba0b077c3f/3c492/image8.png 1300w,\n/static/f67809c19c0a16820f87f7ba0b077c3f/1df5b/image8.png 1999w"\n        sizes="(max-width: 650px) 100vw, 650px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",t.createElement(a.p,null,"Now you can see that the stack traces of the two running coroutines only have library frames in common."),"\n",t.createElement(a.p,null,"In the example, all coroutines are running on the same dispatcher, but you can switch the dispatcher by using the dropdown menu at the top of the panel:"),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 650px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 66.25766871165644%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC4ElEQVR42mXR204TQRgH8L3UVzC+AdkrI0ol4XwIINEbE+MFF2osLaCGgNH4Dq4+gMZLopfGC0noiRYqSLctUGBBKNRCd7ele5rZ7uzsZ6aUk178MvNNdv4z8y031Np2ffhuz7uB4fvv+/uHhM6uXqGzq0/o6Ow919EjtDe0tXcLPb0DQl//sPDw8QNheuSR0N7RJwwO3vvQ3T10jZuZ+dK6tLQCqVQaxHQWFpLLsLS8AqlfGUiLWUiJachkVmF9fQPWGtZzG/V6U9qC31sSrOc2QRQz8Onj59tcNJFs8VxKCrJJZpeLTjInk438MYlnVRJKlUhYLJGIKJNIWvlPWJRJOC2TkCg7G/tVWPkZv8lFYwkfxjY4DgFsO55Lqee61HOI69WcBkIbc3K+9g/NsCAcjjZzsfmED+EaUEoZFgZMowbXA3ARBres1uen6xd4DEIYQiwwsbDoM0wECDuMZ1o2WMipw7YDShXBfv4I9neLcGywb2pnDBODhWzPtDADkUismYsnFn2sKFfKICslzzB1wBgBxhZYCNU3Wox9EsYOOdUI9lirLGSfPDmeWPCxYm8vDblcyJOkOOzuJkFVM4CwCtgmYLMAttlmgQ34LPhyYDga87GGFgpZkKSIJ0kxyOcXQdNWwbYVMEwbWEtYMNNoTT304g1NZJ/0cC4UaTmuGl6xmPd2dlapJGXpn+IuRahCEbLoQaFCt3cOaaFQoQcFlZYriGp6jWK7RhG+yIb4fLSZC4WjdzTdBOIC1BwPHAIgKxU4PJJB0wyoajpUqxrohnXy/BqBmuNeQlxa/2Ffv8VucT9m55oPCodaSVb1o5KqleSyLklrem4tqW9upvTt7Yye31/TFbWolyuarpaPLzmSy7qiKFpmS0Zvhe83uIHBoauB4HjTM/8o7/cHeDYGg5P8+NgUPz4xzU88f8W/ePmGn5iY5AOBIB8Mjl0yGgjwT576+ddT401jI31X/gL/vVcFXCo+xgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="image2"\n        title=""\n        src="/static/cb92e6957c8bd92c9b72f3539141792f/a6d36/image2.png"\n        srcset="/static/cb92e6957c8bd92c9b72f3539141792f/222b7/image2.png 163w,\n/static/cb92e6957c8bd92c9b72f3539141792f/ff46a/image2.png 325w,\n/static/cb92e6957c8bd92c9b72f3539141792f/a6d36/image2.png 650w,\n/static/cb92e6957c8bd92c9b72f3539141792f/e548f/image2.png 975w,\n/static/cb92e6957c8bd92c9b72f3539141792f/3c492/image2.png 1300w,\n/static/cb92e6957c8bd92c9b72f3539141792f/1df5b/image2.png 1999w"\n        sizes="(max-width: 650px) 100vw, 650px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",t.createElement(a.p,null,"Use the minus button to zoom out. You can return to normal size by clicking the plus or the 1:1 button:"),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 650px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 66.25766871165644%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAACnElEQVR42o3QTU8TQRgH8D3qVzB+A7InYxUskADVVEC96MGY6MEopaAJxIOJB/0Erp49eCV6NMaXBEpLW140EmgAu90t7S5d2t1tu7PtzO5OO49py1sTNB5+eSaTmf/zzHBj/sHzN8YDr4Pjt94EAqNC/8CwMDA4IvgHhrv0H/D3DwlDI0Fh5OqYcOfBbWH23l3BPxgQgsGbbwOB8XPc3NwH/9raL9jY2ARRTIOY/g0ZMQ2ylAFZEjsyIkgnHO7l8jIUduX22VQqBe/evb/MxRKrvazRoPkSoV9Wcl5sfZd+XZZoZE2jsfV9urheoImUTld3KnR5u3zAbNfkZokmt8s0sWV6olKFHyvxi9xSPNlXq2MwKnXIFaosq+pMUkyW3asypWix3UKZyYrBsqrJlH2LKUXUqSWb5SWVqVsiyxURKxoIEvElH5dILvfZNQIYE3AcwhzHBUrpEUIIIITaXNcDz6NHWmddy2Ku6zFMHFiIRH1cPNGakICmiZDP/2TligKYeICJ20YcD4hL2w73jnmAXcqI47E6diDSHbgN2WycmaYExDnt8nGD9to5atod2Hpyre6Apu20Aw1DAsel4LheZzqnM0mnnqo7MBKN9VmoDoVWoJxkhimDXXOhXMGA7O6wToNjJwNr+OAP5xcWeytVmyEbMcMsN6tWvWmYuFnS7SaynSYm7n9yIL4U9XELkegVC9WgyQAwwaCqm6BpKcAYAW0AuB4F12v8E200oWJ78PFT7BL37fu8T1E1q1gyUUHbt2R5C2UyKbSnKkg3Ksgw/66km2i/aCBd162NdAm/ED5f4K6Pjp2dDE/3PJ4I8ZPhJ/zM7Et+ZvYVHw4/5UOhEB+emubD4alThUKTbQ8fTfDPn033TN2/duYPVmZXreNmG1oAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Zoom Out"\n        title=""\n        src="/static/f6cba5f170b16be0e9f520c5e28a5cea/a6d36/image10.png"\n        srcset="/static/f6cba5f170b16be0e9f520c5e28a5cea/222b7/image10.png 163w,\n/static/f6cba5f170b16be0e9f520c5e28a5cea/ff46a/image10.png 325w,\n/static/f6cba5f170b16be0e9f520c5e28a5cea/a6d36/image10.png 650w,\n/static/f6cba5f170b16be0e9f520c5e28a5cea/e548f/image10.png 975w,\n/static/f6cba5f170b16be0e9f520c5e28a5cea/3c492/image10.png 1300w,\n/static/f6cba5f170b16be0e9f520c5e28a5cea/1df5b/image10.png 1999w"\n        sizes="(max-width: 650px) 100vw, 650px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",t.createElement(a.p,null,"You can also add coroutine creation frames by clicking this button:"),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 650px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 66.25766871165644%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAACuElEQVR42n3Sy04TURgH8FnqKxjfgHRlrIIk3C8pSHRjYlywUCMUGnChiYnv4OgDaFwaXRoXktALUMQinSnQFqoUaKGdmU7nPnPOnJnzmSlXSWTxS77vTM7//BfDjHZ2XR+7O/AmMnb/7fDwKNvbN8j29g2xPb2DZ3oG2O5jXd397MBghB0aHmMfPn7Avhx/xHb3DLGRkXvv+vtHrzGfPn3uzGTWIJvlgePXYXklA5nVNcj+ygHPrUOW4yGX24B8vgibx/KFYmvfKm3DznYJ8oUt4LgcfHj/8TaTSq+0U88nVdEkc6uH7kpRIsWKRpY2GiTBCS1JXiRJXiKp3JHWzEskyYmtb3FOdAt7Cqxl0jeZ1GK6w7YRYOyCjVzquYQSVaHYJRRhQrHrnQr2f7hns25YEE8kw8xS+keHaTmAXQ+wRynWDcBCHRDxjx5xEJim1YKwCxiTYy4ghIMzipBLLRtBPJEKM+njwIYsgdwUqGE2wbQtcJDbYpg2NBUNmk0Vgku2g08F9ywbBWE0mBPJhaDhcodpIage5GF/P0MNYxsMUwRNx6DpDhhm0JIAwuT0kQuoc7FhsBwcFqFc/kkFIQe6LkGlUoJyeRXqtQ1Q1UYr9Hy7c04DE0FgIrXQoRkm7FT2gC9u0sJOCSRFhd97FeCLedj8U4J6QwWEzgJP2p0PNE8azseT7Ypq0KZmUVE2fUF2fFlx/IO64R8Ili9rxNdN13cc7NuXQrC0mAoz8UTqjqab4PkUPM+HclWAQvkQdgUVNAuBR7yjP+ASxPNBMVz48nXhFvN9bj5cqda0utjQa0JD292v6eWKoO9V68Guy7KqN2Tlv+qirEuSpOW2Rfs1++0GExkZvRqdirU9m5gMTUxGQ89nZkKzsVhodjoaik1Ph6amLjcZjYaePJ0IvXoRa5seH7ryF2VPVyLILhGaAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Creation Frames"\n        title=""\n        src="/static/a37f67fd1a2e32f9a4869a9ffc2cfbc8/a6d36/image1.png"\n        srcset="/static/a37f67fd1a2e32f9a4869a9ffc2cfbc8/222b7/image1.png 163w,\n/static/a37f67fd1a2e32f9a4869a9ffc2cfbc8/ff46a/image1.png 325w,\n/static/a37f67fd1a2e32f9a4869a9ffc2cfbc8/a6d36/image1.png 650w,\n/static/a37f67fd1a2e32f9a4869a9ffc2cfbc8/e548f/image1.png 975w,\n/static/a37f67fd1a2e32f9a4869a9ffc2cfbc8/3c492/image1.png 1300w,\n/static/a37f67fd1a2e32f9a4869a9ffc2cfbc8/1df5b/image1.png 1999w"\n        sizes="(max-width: 650px) 100vw, 650px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",t.createElement(a.p,null,"The creation frames are highlighted in blue. For more complex examples, the coroutine trace graph can change dramatically after the creation frames are added."),"\n",t.createElement(a.p,null,"Click the photo button to capture a coroutine dump:"),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 650px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 66.25766871165644%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAADGUlEQVR42pWQX2/bVBjGfQlfAfENplwhAgvT0ommQ2035QohTeJi09amKUPsgq+B4ZILEBISTBuTNrQBq7QmLk1ZW9a1VdLmTxPchPyzHfvYjo/t43MeZG9XsBuO9NPzvq90Xj3PKy2ey755+VLui/nL+S/nLi7I2eysPHMhJ8/MzMrZ/5CTz2ffl3Nz8/LcB5fkj65+KH/+8RU5e+GiPL+Q/2o2t/iG9OPtO+d2d57h2d4+qrUjHBwc4uCwisPqMY6OjlGLqf2Ll7NGq4FOs4naUR3Pnx/g22++e1eqbD09yyLBAMSEL/X/Ev/Do1/X3pbWNyoZ3/NQbRv44XFN/LS2L75/uCfurTXE/VJT3FuviwdKSzyq/CUevoJftlTxYKMt9o77qO7vpCXl90qG+gECFsGZ+oI4HkybgrghppTBpS80wWeYekFSe36UMKVMuJQJk7hQlI209HR7N2OaBJblwHE9EYYMIQsRcQ4WxURgIQPjHJE3Bfv7FCFj8H2awBgTEYtEbOrJevnFQmNC0OiMsFfribY6wqivwdQmsEZjuK4Hz6OJMxq7c2icBLpBoBsW3CkVMY7roVRW0tKfu9sZx3FhWC6GY1NMpz6oroN0u7BUFZN+H7o+geM66Kh19AcqdKMPj05AqQ2PBoL6oZh6PkolJS19fXsz0+o5iOIYARMsvuVgAKPdht5qweh0MBhoMImJk5NNNBpl9Ho78Lw6fL+bLAxZJDzqY71UTkt3fy6f7WuOCIJQuJ7Pw5BxaprcGQ65q2ncGY+5ZlFuEpuftLZ5vb7F6/U/OCFNHgQjbpgO76gDblouNiuVtKQoyntx5DASsUNwgVe+IGSwiAtiu8n9RmMLjhvCIj4GQ4KJ6aKsKO9Ivz1+ku72hmQ0NuzhSCeaZti6PrFNy7IJsRMsYtvGxLInJrFNy7Y1XbcbzWO721Xt065qd3sqUU9PvTt3778lzS8svr5S/OTM0nIhtVxYSS0tFVLXry+n4r5QKCaz5UIxtVJcTRWSupDorVufpVZXi6kbSzdSV69dS928+emZfD7/2j82AlNDRbPZ2gAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Coroutine Dump"\n        title=""\n        src="/static/ea00b15a2769b24cea025ad3c4db6f47/a6d36/image11.png"\n        srcset="/static/ea00b15a2769b24cea025ad3c4db6f47/222b7/image11.png 163w,\n/static/ea00b15a2769b24cea025ad3c4db6f47/ff46a/image11.png 325w,\n/static/ea00b15a2769b24cea025ad3c4db6f47/a6d36/image11.png 650w,\n/static/ea00b15a2769b24cea025ad3c4db6f47/e548f/image11.png 975w,\n/static/ea00b15a2769b24cea025ad3c4db6f47/3c492/image11.png 1300w,\n/static/ea00b15a2769b24cea025ad3c4db6f47/1df5b/image11.png 1999w"\n        sizes="(max-width: 650px) 100vw, 650px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",t.createElement(a.p,null,"You can click on the frames to navigate to the corresponding source code position:"),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 650px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 66.25766871165644%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAACx0lEQVR42pXR22oTQRgH8L3UVxDfQHIlRo3WFm1VYhW9EcELQVDbxIInRFR8BVcfoOCVIF6KoqJpkza1YmyLrTlpbZPm6GYPszs7e5r5y65WrIcLL378+ZiZb75hpOG9/VuPHR26mzx24t7QUFLu6xuQBwYG5f5/2Nd/QB46mJQPHj4qnzp7Ur5+5rQ8sP+QnDxy/P7g4PAW6eHDR3sLhXksLn3E28IH5PIFFOaXUCpXUCqVI8Vf8qdiGdXPVXypVrG0VMTCwgeMjz/YJU3PzO4OuPABhLwf+b88LgSePX+1Q8pN5RO27SDgAjphotZURK2liLVmVzRaXaHqpjCpK0zqRGlRV9iO/4tAMDcQ1HaRyUzEpan8TMKiDJ7P0VEdsdI0sNrWUWvpWGvrUAwXOuXQrQCa6UfUjYRKfKEaNnK5bFyazs8kqM3gBxy+7wvP8xAEAYQQkbBmjEV8P9jA8/zoTMhmDjIT2biUz79JmJRBMwhUzRAGMWFaFBa1QW0HBqFQehp6qh7V4dPWhecs6giLshAmJ3PfG4YbV+tFlCuzolZfhG6sgLEmqG3B9Thcz4fj+mCO9zciFPaIJpzI5hKGSVFdLuHd3LR4vzCDlXoJit6AaZkI18LbbeZFwsnCZE6Ykaihtd7wdWZyt6abot1piJXVCl/+UuHNVp1Tm3DTcvin5Q5frSm8vtbjzZbGdcPl1Ha5zX7HMD2VjUuZieweg1jwA8D1BFxfoNFsodVuQ9M0qGoPuq5H04TPdr3gD+GHaqaHx09yO6UXL1/H62sto9NVSLurGO1Ol5Qr86T48Q2pVufIp8/zpNGskJ6qEqWnE6Wn/fRVUUm7oxBFUYyFcse+LT/dLiWPDG9Opce2XRgZjY2MpCKXLt2MXbl8K3b5yq3Y1Wt3ojqVHoul0xc3SKXSsdHRVOzc+dHYjWsXt6XPHNr0DY9vXYHqDJWVAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="image9"\n        title=""\n        src="/static/61943c012e7c5f0d44c63a351856df0d/a6d36/image9.png"\n        srcset="/static/61943c012e7c5f0d44c63a351856df0d/222b7/image9.png 163w,\n/static/61943c012e7c5f0d44c63a351856df0d/ff46a/image9.png 325w,\n/static/61943c012e7c5f0d44c63a351856df0d/a6d36/image9.png 650w,\n/static/61943c012e7c5f0d44c63a351856df0d/e548f/image9.png 975w,\n/static/61943c012e7c5f0d44c63a351856df0d/3c492/image9.png 1300w,\n/static/61943c012e7c5f0d44c63a351856df0d/1df5b/image9.png 1999w"\n        sizes="(max-width: 650px) 100vw, 650px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",t.createElement(a.h2,{id:"installation"},"Installation"),"\n",t.createElement(a.ol,null,"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"Go to ",t.createElement(a.strong,null,"Settings / Preferences")," | ",t.createElement(a.strong,null,"Plugins")," in IntelliJ IDEA."),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"Switch to ",t.createElement(a.strong,null,"Marketplace")," and search for ",t.createElement(a.strong,null,"Coroutine Stacks"),":"),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 650px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 75.4601226993865%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsTAAALEwEAmpwYAAACn0lEQVR42q2Sy2sTQRjApxcLHgXBFaN/VfG46KkHr1paG0SrYA8WbCn2UJNgURHEx8lemqKlUKvpNq7GhDZN2mR3djO7O/vIax8zn2xSW60FCzrwm9c3/Jj55kMrIxOntgv5y9t49wrRiaioqthoNERCiIg1TdQ0TSwWi+LW1pZomYZomaQXx1gTVVUVMcYxVxVFGVpcXBxEd5O3z2FN7xiUAjEssB0PVKyBpmFwHBs8zwNCCGCMoaZoUK1hMAyjH3NdcBwHXNeNz3gLCwsX0NTMI2FNKlif8iUolOvRjmIyw6RMVTEzDJMFQcB8P2Bd32e247LtcpmVK1WmGZT5IWOcsxAAoNPp6KlU6iIaujYhPHy1Tqff5GD2XZGllys8/3mFV2sVXtrVObZa3O5wrnsRt5o+dxybN1tt7gcR5wAcAFgs9H2fZDKZBLr/YEZYk77RpZV1yK7m2MfN7+B4TQjCEPyQQRDxHhEHsN0m7NUUwKoKhDTAphQsy2LNZhNM0yTz8/MJND07J0hykebyBajUdKYSG/wwgt8b7/VhGPTyFufVPcwfY4xBu90m6XQ6ge7cmxRK5Rr9WtqB0k6dKQ0HOn7Q13C+z+H8mNZ7crfb7T/5+siYsIdN2qAtwIbHlIYN3V+ER8djOBD2bjgylhSqCqEqcUBp2CcSHtk7IhwdF3YVQrHh/i9h8kCoHiM8AWy/Dkkmk06gG6PjQkUhpkIcqOt2WNdp1PGD+Jsjzvkf40/idX8PeoUdhb7+OJVOoJvJW+dV3QoMuwWENoFQD/wg/OsN41KJ4YyB24kAm17rxbMnl9Dw8PAZSZJey7L8XpblJVmWsydBkqRsbmMj+2VzYyn1dvXD1NPll8/nJs8ihNAAQmgQIXT6H4kdAz8AUiLfPn9XLosAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Install"\n        title=""\n        src="/static/ae0e53bc9819a3d777fb00304d143b89/a6d36/image4.png"\n        srcset="/static/ae0e53bc9819a3d777fb00304d143b89/222b7/image4.png 163w,\n/static/ae0e53bc9819a3d777fb00304d143b89/ff46a/image4.png 325w,\n/static/ae0e53bc9819a3d777fb00304d143b89/a6d36/image4.png 650w,\n/static/ae0e53bc9819a3d777fb00304d143b89/e548f/image4.png 975w,\n/static/ae0e53bc9819a3d777fb00304d143b89/3c492/image4.png 1300w,\n/static/ae0e53bc9819a3d777fb00304d143b89/1df5b/image4.png 1999w"\n        sizes="(max-width: 650px) 100vw, 650px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"Select the plugin and click ",t.createElement(a.strong,null,"Install"),"."),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"After the installation has been completed, restart the IDE."),"\n"),"\n"),"\n",t.createElement(a.h2,{id:"feel-free-to-contribute"},"Feel Free to Contribute!"),"\n",t.createElement(a.p,null,"This is just the beginning! With new ideas and features, we can improve the tool to cover more use cases. If you’ve found a bug, don’t like how a feature works, or have other feedback, feel free to open an issue in our official GitHub repository: ",t.createElement(a.a,{href:"https://github.com/nikita-nazarov/coroutine-stacks"},"https://github.com/nikita-nazarov/coroutine-stacks")),"\n",t.createElement(a.p,null,"Thank you to Raehat and Nikita for building an awesome new tool to help developers be more productive!"))}var c=function(e){void 0===e&&(e={});const{wrapper:a}=Object.assign({},(0,i.ah)(),e.components);return a?t.createElement(a,e,t.createElement(s,e)):s(e)},l=n(94184),o=n.n(l),r=n(11883),g=n(8902),p=n(25058),m=n(90025),d=n(99787),u=n(85893);function A(e){var a,n;let{children:t,...i}=e;const s=(0,g.K)(),{location:c}=i,{allMdx:{nodes:l}}=(0,r.useStaticQuery)("914412448"),A=l.find((e=>(0,r.withPrefix)(e.fields.slug)===c.pathname)),{title:f,date:b}=A.frontmatter,h=(null===(a=A.frontmatter.socialImage)||void 0===a?void 0:a.publicURL)||(null===(n=A.frontmatter.coverImage)||void 0===n?void 0:n.publicURL);return i.pageContext.frontmatter={...i.pageContext.frontmatter,contactUs:!0},(0,u.jsxs)(p.ZP,{...i,socialImage:h,children:[(0,u.jsx)("p",{className:o()(s("ktl-text-3"),"ktl-text--gray",d.h),children:b}),(0,u.jsx)("h1",{className:o()("ktf-h2 ktf-h3--mm",d.T),children:f}),(0,u.jsx)(m.U,{children:t})]})}function f(e){return t.createElement(A,e,t.createElement(c,e))}},25058:function(e,a,n){n.d(a,{Ar:function(){return u}});var t=n(94184),i=n.n(t),s=n(97812),c=(n(43999),n(17077)),l=n(31866),o=n(90025),r=n(3962),g=n(21772),p=n(33520),m=n(85893);let d=function(e){return e.Regular="regular",e.Narrow="narrow",e.Wide="wide",e}({});function u(e){let{children:a,location:n,title:t,layout:o,socialImage:u=null,contactUs:f,greyLayout:b}=e;const h=o===d.Wide?a:(0,m.jsx)(A,{className:d.Narrow===o&&p.Ln,children:a});return(0,m.jsxs)(s.L.Provider,{value:n,children:[(0,m.jsx)(c.H,{title:t,image:u}),(0,m.jsx)(l.h,{}),(0,m.jsxs)("div",{className:i()(p.bK,{[p.G3]:Boolean(b)}),children:[h,f&&(0,m.jsx)(r.U,{}),(0,m.jsx)(g.$,{})]})]})}function A(e){let{className:a,children:n}=e;return(0,m.jsx)("div",{className:i()(a,"ktl-layout ktl-layout--center ktl-layout--spacing"),children:n})}function f(e){let{children:a,...n}=e;return(0,m.jsx)(u,{...n,children:(0,m.jsx)(o.U,{children:a})})}a.ZP=function(e){var a,n,t,i,s,c,l;let{pageContext:o,...r}=e;const g=null==o||null===(a=o.frontmatter)||void 0===a?void 0:a.title,p=null!==(n=null==o||null===(t=o.frontmatter)||void 0===t?void 0:t.layout)&&void 0!==n?n:d.Narrow,u=null!==(i=null==o||null===(s=o.frontmatter)||void 0===s?void 0:s.contactUs)&&void 0!==i&&i,A=null!==(c=null==o||null===(l=o.frontmatter)||void 0===l?void 0:l.greyLayout)&&void 0!==c&&c;return(0,m.jsx)(f,{...r,title:g,layout:p,contactUs:u,greyLayout:A})}},99787:function(e,a,n){n.d(a,{T:function(){return i},h:function(){return t}});var t="Post-module--date--f5c2e",i="Post-module--title--44f76"}}]);
//# sourceMappingURL=component---src-components-post-index-tsx-content-file-path-home-runner-work-kotlinfoundation-github-io-kotlinfoundation-github-io-src-pages-news-gsoc-2023-parallel-stacks-index-md-e083bad5c8459bdbaeb8.js.map