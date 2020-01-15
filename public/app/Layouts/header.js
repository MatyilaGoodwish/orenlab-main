export class HeaderComponent{
    static renderHeader(src){
        return Handlebars.compile(src)
    }
}