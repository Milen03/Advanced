import{render as baseRender, html, TemplateResult} from '../node_modules/lit-html/lit-html.js'

const mainElement=document.querySelector('main')

export const render=(templateResult)=> baseRender(templateResult, mainElement)
export{
    html,
    baseRender
}