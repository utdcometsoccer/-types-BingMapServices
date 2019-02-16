// Type definitions for [~THE LIBRARY NAME~] [~OPTIONAL VERSION NUMBER~]
// Project: BingMapServices
// Definitions by: Idaho Edokpayi <https://github.com/utdcometsoccer/>


declare namespace JSX{
    interface Element {}
}
declare interface IPoint{}
declare interface IMapClick{}

/*~ This declaration specifies that the class constructor function
 *~ is the exported object from the file
 */
export = BingMapServices;

/*~ Write your module's methods and properties in this class */
declare class BingMapServices {
    constructor(Options:BingMapServices.BingMapServicesOptions);

    AutoSuggest(Query: string):Promise<string[]>;
    GeoCode(Address:string):Promise<IPoint[]>;
    ReverseGeoCode(Point:IPoint):Promise<string[]>;
    Map(Center:IPoint,ClickHandler:IMapClick):JSX.Element;
}

declare namespace BingMapServices {
    export interface BingMapServicesOptions {
        Key: string;
        RestEndPointUrl:string;
    }
}