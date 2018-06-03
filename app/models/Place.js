import Model from "react-native-models";

export default class Place extends Model {
    // className used instead name because babel replaces him at run-time.
    static get className() {
        return "Place";
    }

    constructor(name = "", price_range = 1, description = "", subway = "", style = "", address = "") {
        super({
            name: "String",
            price_range: "Number",
            description: "String",
            subway: "String",
            style: "String",
            address: "String",
            latitude: "Number",
            longitude: "Number"
        });

        this.setName(name);
        this.setPriceRange(price_range);
        this.setDescription(description);
        this.setSubway(subway);
        this.setStyle(style);
        this.setAddress(address);

    }
}