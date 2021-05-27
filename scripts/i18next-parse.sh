#!/usr/bin/env bash
#
# Parse sorce code to produce locale files to be translated

sourcesPattern='src/**/*.js'
localesFolder='src/locales'
localeFile='translation.json'
i18nextConfigFile='.i18nextrc.js'
baseLocale="en"

tmpFile1='/tmp/i18next-parser.1.'$$'.json'
tmpFile2='/tmp/i18next-parser.2.'$$'.json'

for outputFile in "${localesFolder}/"*"/${localeFile}"; do
  if [ "$outputFile" = "${localesFolder}/${baseLocale}/${localeFile}" ]; then
    continue # skip base locale file
  fi
  i18next "$sourcesPattern" --output "$outputFile" --config "$i18nextConfigFile" --silent >/dev/null # --fail-on-warnings # extract strings to be localized from source files
  sed -i -e '/^[{}]$/d' "$outputFile" # remove curl braces before sorting
  sed -i -e 's/,$//' "$outputFile" # remove trailing commas before sorting
  sort "$outputFile" -o "$tmpFile1" # sort
  sed -i -e '$ ! s/$/,/' "$tmpFile1" # add commas again
  ( echo "{"; cat "$tmpFile1"; echo "}" ) > "$tmpFile2" # add curl braces again
  mv "$tmpFile2" "$outputFile"
  rm -f "$tmpFile1"
done
