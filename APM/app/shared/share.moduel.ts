import {NgModule} from "@angular/core"
import {StarComponent} from "../shared/star.component"
import {FormsModule} from "@angular/forms"
import {CommonModule} from "@angular/common"
@NgModule(
    {
        imports:[CommonModule ],
        exports:[CommonModule, FormsModule, StarComponent],
        declarations:[StarComponent]
    }
)
export class ShareModuel{

}