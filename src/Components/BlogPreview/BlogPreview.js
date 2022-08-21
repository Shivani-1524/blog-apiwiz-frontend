import React from 'react'
import ReactMarkdown from 'react-markdown'
import './blogpreview.css'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'



const BlogPreview = ({ blogContent }) => {
    return (
        <div className='preview-container'>
            <ReactMarkdown
                linkTarget="_blank"
                skipHtml={true}
                remarkPlugins={[remarkGfm]}
                components={{
                    a: ({ node, children, ...props }) => <a className="blogcontent-link" rel="noreferrer noopener" target="_blank" {...props}>{children}</a>,
                    img: ({ node, ...props }) => <img className='blogcontent-img' {...props} alt="blog graphics" />,
                    code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline && match ? (
                            <SyntaxHighlighter
                                children={String(children).replace(/\n$/, '')}
                                language={match[1]}
                                PreTag="div"
                                {...props}
                            />
                        ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        )
                    }
                }}>{blogContent.content}</ReactMarkdown>
        </div>
    )
}

export { BlogPreview }