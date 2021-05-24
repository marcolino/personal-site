#!/usr/bin/env bash
#
# Translate locale files with empty messages

sourcesPattern='src/**/*.js'
localesFolder='src/locales'
localeFile='translation.json'
i18nextConfigFile='.i18nextrc.js'
baseLocale="en"

tmpFile1='/tmp/i18next-parser.1.'$$'.json'
tmpFile2='/tmp/i18next-parser.2.'$$'.json'

missingTranslationsCountGlobal=0
for translationsFile in "${localesFolder}/"*"/${localeFile}"; do
  if [ "$translationsFile" = "${localesFolder}/${baseLocale}/${localeFile}" ]; then
    continue # skip base locale file
  fi

  missingTranslationsCount=`egrep '\: "",$' "$translationsFile" --count`
  if [ $missingTranslationsCount -gt 0 ]; then
    language=`echo "${translationsFile}" | sed -e 's/.*locales\/\(.*\)\/.*/\1/'`
    echo "missing translations count for language $language: $missingTranslationsCount"
  fi
  missingTranslationsCountGlobal=$(($missingTranslationsCountGlobal + $missingTranslationsCount))
done

if [ $missingTranslationsCountGlobal -gt 0 ]; then
  echo "missing translations globally: $missingTranslationsCountGlobal. Please translate."
  exit 1
else
  exit 0
fi
