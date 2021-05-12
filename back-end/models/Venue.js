class Venue {
    constructor(VenueId, Country, Province, StreetAddress, VenueName, City, ZipCode) {
        this.VenueId = VenueId;
        this.Country = Country;
        this.Province = Province;
        this.StreetAddress = StreetAddress;
        this.VenueName = VenueName;
        this.City = City;
        this.ZipCode = ZipCode;
    }
}

module.exports = Venue;