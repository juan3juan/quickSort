import {Component, OnChanges, Input, Output, EventEmitter} from "@angular/core"
@Component(
    {
        selector: "stars",
        moduleId: module.id,
        templateUrl:"star.component.html",
        styleUrls:["star.component.css"]
    }
)
export class StarComponent implements OnChanges
{
    @Input() rating: number;
    @Output() notify: EventEmitter<number>=new EventEmitter<number>();
    starWidth: number;
    ngOnChanges(): void
    {
        this.starWidth=this.rating*86/5;
    }
    onClick()
    {
        this.notify.emit(this.rating);
    }
}