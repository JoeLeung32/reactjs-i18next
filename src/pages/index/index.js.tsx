import React from 'react'
import { useTranslation } from 'react-i18next'

const Index = () => {
    const { t, i18n } = useTranslation()
    const langs = [
        { name: '繁體中文', arr: ['/zh/', '/zht/', '/?lang=zh', '/?lang=zht'] },
        { name: '简体中文', arr: ['/zh/', '/zhs/', '/?lang=zh', '/?lang=zhs'] },
        {
            name: '繁體中文 - 台灣',
            arr: ['/zh-tw/', '/tw/', '/?lang=zh-tw', '/?lang=tw'],
        },
        {
            name: '繁體中文 - 香港',
            arr: ['/zh-hk/', '/hk/', '/?lang=zh-hk', '/?lang=hk'],
        },
        {
            name: '简体中文 - 中国大陆',
            arr: ['/zh-cn/', '/cn/', '/?lang=zh-cn', '/?lang=cn'],
        },
        {
            name: '简体中文 - 马来西亚',
            arr: ['/zh-my/', '/my/', '/?lang=zh-my', '/?lang=my'],
        },
        { name: 'English', arr: ['/en/', '/?lang=en'] },
    ]
    return (
        <div>
            <h2>{t('Welcome to React')}</h2>
            <h4>i18n.language = {i18n.language}</h4>
            <dl>
                <dt>Browser Default:</dt>
                <dd>
                    <a href="/">Default</a>
                </dd>
                {langs &&
                    langs.map((item) => {
                        let links = new Array(0)
                        if (item.arr && item.arr.length) {
                            item.arr.forEach((object) => {
                                links.push(`<a href="${object}">${object}</a>`)
                            })
                        }
                        return (
                            <>
                                <dt>{item.name}</dt>
                                <dd>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: links.join(', '),
                                        }}
                                    />
                                </dd>
                            </>
                        )
                    })}
            </dl>
        </div>
    )
}

export default Index
