---
twoPerson: true
popups: []
iconUri: https://the-walks.netlify.app/icons/Park.png
id: airie8Ke
language: ro
shortTitle: B
title: Parc B
duration: ~ 20 Min
listed: false
srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/mp3%2Fapi-v1%2Fro_airie8Ke%2Fwalk_8_PARK__RO__B__.mp3?alt=media&token=af0142b7-e969-45cc-ac10-478b5e1f41df
userPrompt:
  - title: 'Pentru ca plimbarea să se realizeze sincronizat, trebuie modificate
      câteva setări. Să începem cu cea mai ușoară: funcția “Nu deranjați / Do
      Not Disturb “. Setarea “Nu deranjați/ Do Not Disturb“ nu este aceeași cu
      modul avion. Această setare te menține conectat la internet în timpul
      plimbării. De pe iOS (Apple), accesează "Setări". Activează acolo opțiunea
      "Nu deranjați/ Do Not Disturb". În cazul majorității dispozitivelor
      Android (Google), vei găsi această funcție la Setări → Sunete → Nu
      deranjați.'
    triggerTime: 0
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/static%2Fmedias%2Fmulti_Zeubeel8_loop.mp3?alt=media&token=88349085-3303-48b9-bdc6-fd7b09519a26
    actions:
      - title: Ok, mai departe.
        action: continue
  - title: "Astfel ajungem la cea de-a doua setare: permisiunea de a accesa camera
      foto. Nu îți face griji, nu încercăm să preluăm controlul asupra
      dispozitivului tău. Este vorba doar de posibilitatea de a face o
      fotografie în timpul plimbării, folosind camera foto a telefonului, și de
      a încărca poza în aplicație. Avem nevoie de permisiunea ta pentru a face
      acest lucru."
    triggerTime: 0
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/static%2Fmedias%2Fmulti_Zeubeel8_loop.mp3?alt=media&token=88349085-3303-48b9-bdc6-fd7b09519a26
    actions:
      - title: De acord
        action: camera
      - title: Fără fotografie
        action: continue
  - title: >-
      Pentru ca noi să putem plasa fotografia ta pe harta mondială The Walks,
      avem nevoie de coordonatele tale GPS. Acestea vor fi salvate în fișierul
      cu fotografii.

      Ești de acord?
    triggerTime: 0
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/static%2Fmedias%2Fmulti_Zeubeel8_loop.mp3?alt=media&token=88349085-3303-48b9-bdc6-fd7b09519a26
    actions:
      - title: Yes
        action: geoLocation
      - title: No
        action: continue
  - title: >-
      Îți mulțumim pentru încrederea acordată. Asta a fost tot. Și acum, să
      pornim! Apăsați butonul în același timp.

      Numărați împreună: 3. 2. 1.
    triggerTime: 0
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/static%2Fmedias%2Fmulti_Zeubeel8_loop.mp3?alt=media&token=88349085-3303-48b9-bdc6-fd7b09519a26
    actions:
      - title: Start
        action: continue
  - title: Fă o fotografie și continuă sau continuă fără fotografie.
    triggerTime: 786
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/mp3%2Fapi-v1%2Fro_airie8Ke%2Fwalk_8_PARK__Loop_Foto__RO__13_06min_.mp3?alt=media&token=a9267452-7478-49e0-8e5e-5a75b29e6ce7
    actions:
      - title: Fotografiază
        action: picture
        postAction: continue
      - title: Nu fotografia
        action: continue
  - title: Fă o fotografie și continuă sau continuă fără fotografie.
    triggerTime: 992
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/mp3%2Fapi-v1%2Fro_airie8Ke%2Fwalk_8_Loop_2_RO_16_31_865min_02_10_.mp3?alt=media&token=d8707fbc-839a-4134-97e5-6bbd71b4bcfe
    actions:
      - title: Fotografiază
        action: picture
        postAction: continue
      - title: Nu fotografia
        action: continue
  - title: Mai departe către galerie
    triggerTime: 1028
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/static%2Fmedias%2Fmulti_Zeubeel8_loop.mp3?alt=media&token=88349085-3303-48b9-bdc6-fd7b09519a26
    actions:
      - title: Galerie
        action: map
      - title: Nu
        action: continue
---
