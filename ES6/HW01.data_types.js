/**
 * @author Andrea Ferroni
 * @package {Pirple} - Keeping Up With the Javascripts - Part 1: ES6
 * @file HW01.data_types.js
 */

var dataSource = "WikiPedia";
var dataSourceURL = "https://it.wikipedia.org/wiki/Don't_Stop_Me_Now";
var myFavouriteSong = "Don't stop me now";
var artist = "Queen";
var released = "26 January 1979";
var lenght = "3:29"
var lengthInSeconds = 3 * 60 + 29;
var album = "Jazz";
var group = {
    name: "Queen",
    performers: {
        guitar: "Brian May",
        voice: "Freddie Mercury",
        bassGuitar: "John Deacon",
        drum: "Roger Taylor"
    },
    albumNamesByYear: {
        1973: ["Queen"],
        1974: ["Queen II", "Sheer Heart Attack"],
        1975: ["A Night at the Opera"],
        1976: ["A Day at the Races"],
        1977: ["News of the World"],
        1978: ["Jazz"],
        1980: ["The Game", "Flash Gordon(Original Soundtrack)"],
        1982: ["Hot Space"],
        1984: ["The Works"],
        1986: ["A Kind of Magic"],
        1989: ["The Miracle"],
        1991: ["Innuendo"],
        1995: ["Made in Heaven"]
    },
    getAlbumByYear: function (year) {
        if (typeof this.albumNamesByYear[year] === "undefined")
            return ["sorry: no album released"];
        return this.albumNamesByYear[year];
    }
};
var songWriter = "Freddie Mercury";
var releasedAsSingle = true;

console.log(["Data from", dataSource, "- URL:", dataSourceURL].join(" "));
console.log("My favourite song is '" + myFavouriteSong.toUpperCase() + "' (" + lenght + ", " + lengthInSeconds + "secs) by " + artist);
console.log("Released in " + released + "and contained in the album " + album);
console.log("Released as single: " + releasedAsSingle);
console.log("Wrote by " + songWriter + " performer of " + group.name);
console.log("");
console.log("Let's see some album released by Queen");
console.log("  · 1972: " + group.getAlbumByYear(1972).join(", "));
console.log("  · 1973: " + group.getAlbumByYear(1973).join(", "));
console.log("  · 1974: " + group.getAlbumByYear(1974).join(", "));
console.log("  · 1975: " + group.getAlbumByYear(1975).join(", "));
console.log("  · 1976: " + group.getAlbumByYear(1976).join(", "));
console.log("...and so on 'till 1995 with " + group.getAlbumByYear(1995).join(", "));