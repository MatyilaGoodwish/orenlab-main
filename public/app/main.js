import { FooterComponent } from "./Layouts/footer.js";
import { HeaderComponent } from "./Layouts/header.js";
import { TopBarComponent } from "./Layouts/topbar.js";
import { LayoutModel } from "./httpModels/general.model.js"; 

class Main{
    static Layout(){
        var headerPlaceholder = document.getElementById('headerPlaceholder')
        var topbarPlaceholder = document.getElementById('topBarPlaceholder')
        var header = HeaderComponent.renderHeader(document.getElementById('headerContent').innerHTML)
        var topBar = TopBarComponent.renderTopBar(document.getElementById('topBarContent').innerHTML)
        headerPlaceholder.innerHTML = header(LayoutModel.viewBag())
        topbarPlaceholder.innerHTML = topBar(LayoutModel.viewBag())
    }
    static FooterTemplateRender(){
        var footerTopPlaceholder = document.getElementById('footerPlaceholder')
        var test = FooterComponent.renderFooter(document.getElementById('footerContent').innerHTML)
        footerTopPlaceholder.innerHTML = test(LayoutModel.viewBag())
    }
 
}
//init layout
Main.Layout()

//init component
Main.FooterTemplateRender()

 
