#!/usr/bin/env bash
#
# Favicon and Apple Touch Icon Generator
#
# This bash script takes an image as a parameter, and uses ImageMagick to convert it to several
# other formats used on modern websites. The following copies are generated:
# 
# * apple-touch-icon.png
# * favicon.ico
# * icon-192.png
# * icon-512.png
# * icon.svg (if source is svg format)
# * ms-icon-144x144.png
#
# Concept from http://bergamini.org/computers/creating-favicon.ico-icon-files-with-imagemagick-convert.html

SRC_IMAGE="$1"
DIR="${2:-./public/icons}"
CONVERT_CMD=`which convert`

mkdir -p "$DIR"
if [ $? -ne 0 ]; then
    echo "Can't create output directory $DIR"
    exit 1;
fi

if [ -z "$CONVERT_CMD" ] || [ ! -f "$CONVERT_CMD" ] || [ ! -x "$CONVERT_CMD" ]; then
    echo "ImageMagick needs to be installed to run this script ($CONVERT_CMD command not found)."
    exit 2;
fi

if [ -z "$SRC_IMAGE" ]; then
	echo "You must supply a source image as the argument to this command."
	exit 3;
fi

if [ ! -f "$SRC_IMAGE" ]; then
  echo "Source image \"$SRC_IMAGE\" does not exist."
  exit 4;
fi

w=`identify -format '%w' "$SRC_IMAGE"`
h=`identify -format '%h' "$SRC_IMAGE"`
if [ $w -lt 512 -o $h -lt 512 ]; then
  echo "Warning: source image size should be at least 512x512 for best results"
fi

magic=`identify -format '%m' "$SRC_IMAGE"`
if [ "$magic" != "SVG" ]; then
  echo "Warning: source image is not SVG format, will not generate \"icon.svg\""
fi

echo "Generating square base image"
"$CONVERT_CMD" "$SRC_IMAGE" -resize 512x512! -transparent white "$DIR"/favicon-512.png

if [ "$magic" = "SVG" ]; then
  echo "Generating svg image"
  cp "$SRC_IMAGE" "$DIR"/icon.svg
fi

echo "Generating various sizes for favicon"
"$CONVERT_CMD" "$DIR"/favicon-512.png -resize 16x16 "$DIR"/favicon-16.png
"$CONVERT_CMD" "$DIR"/favicon-512.png -resize 32x32 "$DIR"/favicon-32.png
"$CONVERT_CMD" "$DIR"/favicon-512.png -resize 64x64 "$DIR"/favicon-64.png
"$CONVERT_CMD" "$DIR"/favicon-512.png -resize 128x128 "$DIR"/favicon-128.png
"$CONVERT_CMD" "$DIR"/favicon-512.png -resize 256x256 "$DIR"/favicon-256.png

echo "Generating favicon"
"$CONVERT_CMD" "$DIR"/favicon-16.png "$DIR"/favicon-32.png "$DIR"/favicon-64.png "$DIR"/favicon-128.png "$DIR"/favicon-256.png -colors 256 "$DIR"/favicon.ico
"$CONVERT_CMD" "$DIR"/favicon-256.png -colors 256 "$DIR"/favicon.ico

echo "Generating icons"
cp "$DIR"/favicon-512.png "$DIR"/icon-512.png
"$CONVERT_CMD" "$DIR"/icon-512.png -resize 192x192 "$DIR"/icon-192.png

echo "Generating touch icon"
"$CONVERT_CMD" "$DIR"/favicon-512.png -resize 180x180 "$DIR"/apple-touch-icon.png

echo "Generating MS icon"
"$CONVERT_CMD" "$DIR"/favicon-512.png -resize 144x144 "$DIR"/ms-icon-144x144.png

echo "Removing temporary files"
rm -rf "$DIR"/favicon-*.png

echo "Done"
exit 0