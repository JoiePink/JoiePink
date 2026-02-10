declare module 'markdown-it-table-of-contents' {
  import type MarkdownIt from 'markdown-it'

  interface TableOfContentsOptions {
    includeLevel?: number[]
    containerClass?: string
    slugify?: (text: string, rawToken: any) => string
    markerPattern?: RegExp
    omitTag?: string
    listType?: 'ul' | 'ol'
    format?: (content: string, md: MarkdownIt, anchor?: string | null) => string
    containerHeaderHtml?: string
    containerFooterHtml?: string
    transformLink?: (anchor: string | null) => string | null
    transformContainerOpen?: (containerClass: string, containerHeaderHtml?: string) => string
    transformContainerClose?: (containerFooterHtml?: string) => string
    getTokensText?: (tokens: any[], rawToken: any) => string
  }

  function markdownItTableOfContents(
    md: MarkdownIt,
    opts?: TableOfContentsOptions
  ): void

  export default markdownItTableOfContents
}

