import {ReactNode} from "react";
import cn from "classnames";
import { LocationContext } from "./locationContext";

import "@rescui/typography/lib/font-jb-sans-auto.css";
import "@jetbrains/kotlin-web-site-ui/out/components/typography/index.css";
import "@jetbrains/kotlin-web-site-ui/out/components/grid/index.css";
import "@jetbrains/kotlin-web-site-ui/out/components/cta-block/index.css";

import "./typography.css";
import "./heading.css";

import { SEO } from "../Seo";
import { Header as Header } from "../Header";
import { Markdown, ModernMarkdown } from "../Markdown";
import { ContactUs } from "../ContactUs/ContactUs";
import { Footer } from "../Footer";

import * as styles from "./layout.module.css";

export enum LayoutSize {
    Regular = 'regular',
    Narrow = 'narrow',
    Wide = 'wide',
}

interface MDLayoutProps {
    title?: string;
    layout?: LayoutSize;
    contactUs?: boolean;
    appearance?: LayoutMDAppearance;
    greyLayout?: boolean;
}

export enum LayoutMDAppearance {
    Modern = 'modern',
    Classic = 'classic'
}

export interface BaseLayoutProps {
    location: Location;
    children: null | ReactNode;
    greyLayout?: boolean;
    socialImage?: string;
}

type MarkdownLayoutProps = BaseLayoutProps & {
    pageContext?: undefined | {
        frontmatter?: MDLayoutProps
    }
};

type LayoutProps = BaseLayoutProps & MDLayoutProps;

export function Layout({ children, location, title, layout, socialImage = null, contactUs, greyLayout }: LayoutProps) {
    const content = layout === LayoutSize.Wide
        ? children
        : (
            <RegularLayout className={LayoutSize.Narrow === layout && styles.narrow}>
                {children}
            </RegularLayout>
        );

    return (
        <LocationContext.Provider value={location}>
            <SEO title={title} image={socialImage}/>
            <Header/>
            <div className={cn(styles.layout, {[styles.greyLayout]: Boolean(greyLayout)})}>
                {content}
                {contactUs && <ContactUs/>}
                <Footer/>
            </div>
        </LocationContext.Provider>
    );
}

const RegularLayout = ({className, children}) => (
    <div className={cn(className, 'ktl-layout ktl-layout--center ktl-layout--spacing')}>
        {children}
    </div>
);

export function MarkdownLayout({appearance, children, ...props} : LayoutProps) {
    const Tag = LayoutMDAppearance.Modern === appearance ? ModernMarkdown : Markdown;
    return (
        <Layout {...props}>
            <Tag>{children}</Tag>
        </Layout>
    );
}

export function PageMarkdownLayout({pageContext, ...props } : MarkdownLayoutProps) {
    const title = pageContext?.frontmatter?.title;
    const layout = pageContext?.frontmatter?.layout ?? LayoutSize.Narrow;
    const contact = pageContext?.frontmatter?.contactUs ?? false;
    const appearance = pageContext?.frontmatter?.appearance ?? LayoutMDAppearance.Modern;
    const greyLayout = pageContext?.frontmatter?.greyLayout ?? false;

    return (
        <MarkdownLayout {...props} title={title} layout={layout} appearance={appearance} contactUs={contact} greyLayout={greyLayout} />
    );
}

export default PageMarkdownLayout;