"use strict";(self.webpackChunkkotlinfoundation_github_io=self.webpackChunkkotlinfoundation_github_io||[]).push([[116],{71542:function(e,n,t){t.r(n),t.d(n,{Layout:function(){return y},LayoutMDAppearance:function(){return E},LayoutSize:function(){return b},MarkdownLayout:function(){return w},PageMarkdownLayout:function(){return k},default:function(){return x}});var l=t(67294),a=t(11151);function i(e){const n=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",ul:"ul",li:"li",h3:"h3",code:"code",strong:"strong"},(0,a.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.h1,null,"Language Committee guidelines"),"\n",l.createElement(n.p,null,"The Kotlin Language Committee has to approve every ",l.createElement(n.a,{href:"https://kotlinlang.org/docs/kotlin-evolution.html#incompatible-changes"},"incompatible change")," before it lands in a stable version. The committee determines whether the change is appropriate and motivated enough to be introduced and what deprecation procedures have to be carried out to ensure comfortable migration for end users."),"\n",l.createElement(n.p,null,"These guidelines describe the process the Committee follows and the criteria used for decision making. We realize that these criteria can not be fully formalized and treat them as general guidelines, not a mechanical set of rules."),"\n",l.createElement(n.h2,null,"Review process"),"\n",l.createElement(n.p,null,"Incompatible changes are submitted to the Language Committee by the ",l.createElement(n.a,{href:"/structure/"},"Lead Language Designer"),". The Committee evaluates the implications of such changes, considering the following:"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"Substance: what is going to be changed"),"\n",l.createElement(n.li,null,"Impact: who will be affected by the change and in what ways"),"\n",l.createElement(n.li,null,"Motivation: why the change is needed"),"\n",l.createElement(n.li,null,"Detectability: can problematic code be automatically detected"),"\n",l.createElement(n.li,null,"Migration: to what extent can the code be migrated automatically"),"\n"),"\n",l.createElement(n.h3,null,"Estimating impact"),"\n",l.createElement(n.p,null,"When in doubt, we inspect large bodies of code available to us and test the implementations in EAP builds to collect information about the expected impact of a change."),"\n",l.createElement(n.h3,null,"Proposals"),"\n",l.createElement(n.p,null,"A proposal is usually written by a developer responsible for the change or the relevant subsystems. See the ",l.createElement(n.a,{href:"/submitting-incompatible-changes/"},"Guide to submitting incompatible changes"),"."),"\n",l.createElement(n.p,null,"When an issue has all the necessary details, it can be scheduled for review by the Language Committee. Approved proposals are to be implemented by the development team and shipped in the appropriate stable release."),"\n",l.createElement(n.h2,null,"Scope"),"\n",l.createElement(n.p,null,"Only features and components published as ",l.createElement(n.a,{href:"https://kotlinlang.org/docs/components-stability.html#stability-levels-explained"},"Stable")," are in the scope of Language Committee. Besides, the Language Committee's scope is limited to the following:"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"Language: syntax, static checks, execution semantics of language constructs"),"\n",l.createElement(n.li,null,"The interop subsystem of the language: how foreign declarations are seen from Kotlin, and how Kotlin declarations are seen from other languages"),"\n",l.createElement(n.li,null,"Compatibility of binary artifacts produced by kotlinc with one another and with other binaries (e.g. Java binaries)"),"\n",l.createElement(n.li,null,"Standard library: API and contracts of the declarations in kotlin-stdlib (and its extensions such as for ",l.createElement(n.code,null,"kotlin-stdlib-jdk7"),")"),"\n",l.createElement(n.li,null,"CLI parameters of the compiler except for the ",l.createElement(n.code,null,"-X/-XX")," keys"),"\n",l.createElement(n.li,null,"KDoc syntax"),"\n"),"\n",l.createElement(n.p,null,"For example, the following matters are out of scope for the Language Committee:"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"Pre-stable language features & APIs"),"\n",l.createElement(n.li,null,"Build tools and plugins for them (e.g. Gradle support)"),"\n",l.createElement(n.li,null,"IDE and static analysis tools (other than the compiler)"),"\n",l.createElement(n.li,null,"Java2Kotlin converter and other source code manipulation tools"),"\n",l.createElement(n.li,null,"APIs and contracts of libraries other than the standard library"),"\n",l.createElement(n.li,null,"API of the compiler"),"\n",l.createElement(n.li,null,"Scripting support and Compiler REPL"),"\n",l.createElement(n.li,null,"Internal packages of the standard library"),"\n"),"\n",l.createElement(n.p,null,"Also, see ",l.createElement(n.a,{href:"#appendix-a-examples-of-non-issues"},"Appendix A")," for examples of changes that are not considered to be compatibility issues."),"\n",l.createElement(n.h2,null,"Migration aids and deprecation"),"\n",l.createElement(n.p,null,"Normally, incompatible changes to stable features only land in feature releases. We announce the changes in a previous release (it may be an incremental update to the previous feature release, but should allow enough time for users to migrate their code)."),"\n",l.createElement(n.p,null,"The announcement is best done through compiler warnings, or in some cases IDE inspections and/or other tools. If places in the code that should be changed in advance to prevent compatibility issues in the future can be detected automatically, we announce the change and publish detection tools."),"\n",l.createElement(n.p,null,"If the necessary changes to user code can be automated, we publish a migration tool along with the announcement. Preferably, the IDE should suggest running the migration when it encounters deprecated constructs in the code."),"\n",l.createElement(n.p,null,"When automatic detection and/or migration is not practically possible, we publish instructions on how user code should be adjusted."),"\n",l.createElement(n.h3,null,"Insignificant changes"),"\n",l.createElement(n.p,null,"Some types of changes can be made without a deprecation cycle:"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"Small fixes that virtually no users will encounter can normally be made right away (but still require committee review)"),"\n",l.createElement(n.li,null,"Bugs causing compiler errors in good code can be fixed right away"),"\n",l.createElement(n.li,null,"Bugs causing bad code to compile, but always fail at runtime can be fixed right away"),"\n"),"\n",l.createElement(n.h3,null,"Incompatible changes to the language"),"\n",l.createElement(n.p,null,"The typical deprecation cycle for an incompatible language change:"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"The change planned for version B is announced in release notes to a previous version A","\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"The compiler reports deprecation warnings (messages provide some guidance to possible replacements)"),"\n",l.createElement(n.li,null,"Automated migration tools are available in the IDE"),"\n",l.createElement(n.li,null,"For eligible changes, the ",l.createElement(n.code,null,"-progressive")," flag enables the change before version B (e.g. in version A or an incremental update to it)"),"\n"),"\n"),"\n",l.createElement(n.li,null,"Version B ships with the change enabled (e.g. warnings turn into errors)","\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"Migrations aids are kept available in the IDE"),"\n",l.createElement(n.li,null,"Backward compatibility flags in the compiler (",l.createElement(n.code,null,"-language-version")," and ",l.createElement(n.code,null,"-api-version"),") support the behavior of version A"),"\n"),"\n"),"\n",l.createElement(n.li,null,"Future versions can remove migration aids and compatibility flags, but a version capable of automated migration should be kept available for a reasonable amount of time"),"\n"),"\n",l.createElement(n.h3,null,"Incompatible changes to the libraries"),"\n",l.createElement(n.p,null,"The typical deprecation cycle for libraries:"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"The change planned for version B is announced in release notes to a previous version A","\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"Relevant declarations are marked as ",l.createElement(n.code,null,"@Deprecated(level = WARNING)")),"\n",l.createElement(n.li,null,"Migration is automated through ReplaceWith or sometimes custom tooling"),"\n",l.createElement(n.li,null,"In some cases an optional support dependency that exposes the same API is published"),"\n"),"\n"),"\n",l.createElement(n.li,null,"Version B marks the declarations as ",l.createElement(n.code,null,"@Deprecated(level = ERROR)")),"\n",l.createElement(n.li,null,"Version C can mark the declarations as ",l.createElement(n.code,null,"@Deprecated(level = HIDDEN)"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"Note: for inline functions, complete removal is sometimes possible at this point"),"\n"),"\n"),"\n"),"\n",l.createElement(n.h2,null,"Changes to these guidelines"),"\n",l.createElement(n.p,null,"Changes to these guidelines need to be approved by the Kotlin Language Committee."),"\n",l.createElement(n.p,null,"Any proposed change needs to be published in advance providing a reasonable time to allow for comments on the change by the Kotlin Community."),"\n",l.createElement(n.h2,null,"Appendix A. Examples of non-issues"),"\n",l.createElement(n.p,null,"The following cases are not considered to be compatibility issues and thus are out of scope for the Language Committee."),"\n",l.createElement(n.h3,null,"Changes related to binaries and translation"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"A binary compiled against kotlin-stdlib fails to link or run because kotlin-stdlib is absent or outdated (older version than used during compilation)."),"\n",l.createElement(n.li,null,"Adding generic parameters to existing declarations does not change the ABI on the JVM (due to erasure)."),"\n",l.createElement(n.li,null,"Changes to signatures of functions marked ",l.createElement(n.code,null,"@InlineOnly")," are not changing the ABI on the JVM."),"\n",l.createElement(n.li,null,"Adding supertypes to existing library classes/interfaces."),"\n"),"\n",l.createElement(n.h3,null,"Source language changes"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"Code compilable with a newer version fails to compile with an older version (e.g. due to usages of new language features)."),"\n",l.createElement(n.li,null,"The code breaks only if the user alters the build configuration or compiler settings explicitly (i.e. in addition to advancing the compiler version)."),"\n"),"\n",l.createElement(n.h3,null,"Library changes"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"Relaxing a contract on existing APIs."),"\n",l.createElement(n.li,null,"Clarification for unspecified behaviors."),"\n",l.createElement(n.li,null,"Changes in ",l.createElement(n.code,null,"hashCode()")," are not breaking changes."),"\n",l.createElement(n.li,null,"Changes in ",l.createElement(n.code,null,"toString()")," on other than ",l.createElement(n.code,null,"Boolean"),", ",l.createElement(n.code,null,"Numeric"),", and ",l.createElement(n.code,null,"String")," types are not breaking changes."),"\n",l.createElement(n.li,null,"Issues connected with loading of two different versions of the same library at runtime or link time."),"\n"),"\n",l.createElement(n.h3,null,"Changes affecting performance"),"\n",l.createElement(n.p,null,"We recognize that runtime performance and bytecode size are important metrics, and will make reasonable effort to keep them in a good shape, but we don't consider every slowdown (e.g. in edge cases or in very cold code) and every extra byte in the classfile a breaking change."),"\n",l.createElement(n.h2,null,"Appendix B. Assumptions for pragmatic language evolution"),"\n",l.createElement(n.p,null,"We make decisions on language changes under the assumption that most user code is designed with the following considerations in mind. We do not optimize for smooth migration that disregards these considerations."),"\n",l.createElement(n.h3,null,"Availability of the standard library"),"\n",l.createElement(n.p,null,"All Kotlin code should be linked and run against the Standard Library of at least the same version as specified by the ",l.createElement(n.code,null,"-api-version")," upon compilation."),"\n",l.createElement(n.h3,null,"Type inference and overload resolution algorithms"),"\n",l.createElement(n.p,null,"Improvements in type inference algorithms may result in more precise static types known for some expressions, this may cause changes in overload resolution and even in signatures of declarations that don't specify return types explicitly."),"\n",l.createElement(n.p,null,l.createElement(n.strong,null,"Overloads of the same function should be intended to do the same thing"),". Language improvements may cause a different overload to be selected in a new language version."),"\n",l.createElement(n.p,null,l.createElement(n.strong,null,"Declarations sensitive to API/ABI stability (e.g. public APIs) should specify return types explicitly"),". Language improvements may cause a different type to be inferred for a given body expression. Also, some innocuous-looking changes in the source code, done by the user, may cause similar effects."),"\n",l.createElement(n.h3,null,"Non-public API"),"\n",l.createElement(n.p,null,l.createElement(n.strong,null,"Internal declarations have no separate compilation guarantees"),". While sometimes accessible from other languages (e.g. Java), declarations marked ",l.createElement(n.strong,null,"internal")," in Kotlin should not be called from outside the module they are declared in."),"\n",l.createElement(n.p,null,l.createElement(n.strong,null,"Private and synthetic declarations should not be relied upon"),". On some platforms, reflection has access to declarations marked private and synthetic. We do not provide any compatibility guarantees for code that relies on such access."),"\n",l.createElement(n.h3,null,"Impedance mismatches across language boundaries"),"\n",l.createElement(n.p,null,"A Kotlin API exposed to another language may yield values that work in that language differently from Kotlin. For example, Kotlin's unsigned integers will look signed for Java clients, and the programmer that works with the same API in the Java code will be surprised by getting different result. While an undesirable situation, this is sometimes inevitable, and should not be considered a breaking change (it does not fall under the intuitive definition of one anyway)."))}var o=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?l.createElement(n,e,l.createElement(i,e)):i(e)},r=t(94184),s=t.n(r),c=t(97812),u=(t(43999),t(49293)),m=t(31866),d=t(97229),h=t(79226),g=t(21772),p=t(33520),f=t(85893);let b=function(e){return e.Regular="regular",e.Narrow="narrow",e.Wide="wide",e}({}),E=function(e){return e.Modern="modern",e.Classic="classic",e}({});function y(e){let{children:n,location:t,title:l,layout:a,socialImage:i=null,contactUs:o,greyLayout:r}=e;const d=a===b.Wide?n:(0,f.jsx)(v,{className:b.Narrow===a&&p.Ln,children:n});return(0,f.jsxs)(c.L.Provider,{value:t,children:[(0,f.jsx)(u.H,{title:l,image:i}),(0,f.jsx)(m.h,{}),(0,f.jsxs)("div",{className:s()(p.bK,{[p.G3]:Boolean(r)}),children:[d,o&&(0,f.jsx)(h.U,{}),(0,f.jsx)(g.$,{})]})]})}const v=e=>{let{className:n,children:t}=e;return(0,f.jsx)("div",{className:s()(n,"ktl-layout ktl-layout--center ktl-layout--spacing"),children:t})};function w(e){let{appearance:n,children:t,...l}=e;const a=E.Modern===n?d.S:d.U;return(0,f.jsx)(y,{...l,children:(0,f.jsx)(a,{children:t})})}function k(e){var n,t,l,a,i,o,r,s,c;let{pageContext:u,...m}=e;const d=null==u||null===(n=u.frontmatter)||void 0===n?void 0:n.title,h=null!==(t=null==u||null===(l=u.frontmatter)||void 0===l?void 0:l.layout)&&void 0!==t?t:b.Narrow,g=null!==(a=null==u||null===(i=u.frontmatter)||void 0===i?void 0:i.contactUs)&&void 0!==a&&a,p=null!==(o=null==u||null===(r=u.frontmatter)||void 0===r?void 0:r.appearance)&&void 0!==o?o:E.Modern,y=null!==(s=null==u||null===(c=u.frontmatter)||void 0===c?void 0:c.greyLayout)&&void 0!==s&&s;return(0,f.jsx)(w,{...m,title:d,layout:h,appearance:p,contactUs:g,greyLayout:y})}function x(e){return l.createElement(k,e,l.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-components-layout-index-tsx-content-file-path-home-runner-work-kotlinfoundation-github-io-kotlinfoundation-github-io-src-pages-language-committee-guidelines-mdx-11d490ccc75cf0932316.js.map