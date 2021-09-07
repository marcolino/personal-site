#!/usr/bin/env node
//
// Genereate a new event from a folder of photos

const fs = require("fs");
const path = require("path");
const sizeOf = require("image-size");
const argv = require('minimist')(process.argv.slice(2));

const usage = () => {
  console.error(`Usage: ${__filename}
    --imagesFolder=IMAGES_FOLDER
    --eventLabel=EVENT_LABEL
    --eventDate=EVENT_DATE
  `);
  process.exit(1);
}

if (!argv.imagesFolder) usage();
const imagesFolder = argv.imagesFolder;
if (!argv["eventLabel"]) usage();
const eventLabel = argv.eventLabel;
if (!argv["eventDate"]) usage();
const eventDate = argv.eventDate;
// const imagesFolder = "/home/marco/Desktop/Festona";
// const eventLabel = "Festa fine 20 anni Marco";
// const eventDate = "1991-08-31";

const eventFolder = `${eventLabel} - ${eventDate}`;
const eventsFolder = "public/events";
const imageExtensions = [".png", ".jpg", ".jpeg", ".gif", ".ico"];
const partiesDataFile = "./src/data/events/parties.js";

if (!fs.existsSync(imagesFolder)) {
  throw(new Error("No images source folder $imagesFolder"));
}

const eventFullFolder = `${eventsFolder}/${eventFolder}`;
//console.log(`eventFullFolder ${eventFullFolder}`);

if (fs.existsSync(eventFullFolder)) {
  throw(new Error("Event folder $eventFullFolder already present"));
}

if (!fs.existsSync(eventFullFolder)) {
  fs.mkdirSync(eventFullFolder, (err) => {
    throw(new Error(`Cannot create event folder $eventFullFolder: ${err}`));
  });
}


// copy all images from source images folder to event folder
const files = fs.readdirSync(imagesFolder);
const images = [];
for (var i = 0; i < files.length; i++) {
  var filename = path.join(imagesFolder, files[i]);
  var stat = fs.lstatSync(filename);
  if (stat.isDirectory()) {
    // ignore subdirectories
    console.log(`ignoring subdirectory "${filename}"`);
  } else {
    const ext = path.extname(filename);
    if (imageExtensions.includes(ext)) {
      //console.log("copying file", filename, "to", eventFullFolder);
      fs.copyFileSync(filename, `${eventFullFolder}/${path.basename(filename)}`, fs.constants.COPYFILE_EXCL, (err) => {
        if (err) throw err;
      });
      const name = path.basename(filename);
      const dimensions = sizeOf(filename);
      const { width, height } = dimensions;
      images.push({name, width, height});
    }
  };
};

let parties = null;
try {
  parties = fs.readFileSync(partiesDataFile);
} catch(err) {
  console.error(err);
  throw err;
}
const file = parties.toString();
const rawData = file.replace(/[\s\S]*const data = (\[[\s\S]*\]);[\s\S]*/m, "$1");
const data = eval(rawData);
const count = data.length;
const key = count + 1;
data.push({
  key: key,
  label: eventLabel,
  value: eventDate,
  //link: null,
  photoGallery: {
    folder: eventFolder,
    images: images,
  },
});

const rawDataBefore = file.replace(/([\s\S]*const data = )[\s\S]*/m, "$1");
const rawDataAfter = file.replace(/[\s\S]*const data = \[[\s\S]*\](;[\s\S]*)/m, "$1");
const newData = rawDataBefore + JSON.stringify(data, null, 2) + rawDataAfter;
//console.log("newData:", newData, typeof newData);

try {
  fs.writeFileSync(partiesDataFile, newData);
} catch(err) {
  console.error(err);
  throw err;
}
