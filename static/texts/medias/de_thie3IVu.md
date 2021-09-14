---
popups: []
id: thie3IVu
listed: false
language: de
shortTitle: A
title: Supermarkt A
duration: ~ 20 Min
srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/mp3%2Fv0%2Fde_uma9ooK4%2Fde_thie3IVu.mp3?alt=media&token=00568ce1-249c-4df9-b78c-e9745f4cdacd
iconUri: https://the-walks.netlify.app/icons/Supermarkt.png
userPrompt:
  - title: >-
      Damit dieser Walk synchron funktioniert, solltest du ein paar
      Einstellungen vorzunehmen. Fangen wir mit der Leichtesten an: der Funktion
      “Nicht stören”.

      Die Einstellung “Nicht stören” ist nicht der Flugmodus. Sie erhält während deines Walks die Internet-Verbindung. Mit iOS (Apple) gehst du jetzt zu “Einstellungen”. Aktiviere dort “Nicht stören”. Bei den meisten Android-Geräten (Google) findest du diese Funktion unter Einstellungen → Töne → Nicht stören."
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/static%2Fmedias%2Fmulti_Zeubeel8_loop.mp3?alt=media&token=88349085-3303-48b9-bdc6-fd7b09519a26
    triggerTime: 0
    actions:
      - title: Okay, weiter.
        action: continue
  - title: "Jetzt kommen wir zur zweiten Einstellung: der Erlaubnis auf deine Kamera
      zugreifen zu können. Keine Sorge, wir wollen nicht die Kontrolle über dein
      Gerät übernehmen. Es geht nur darum, dass du während des Walks ein Foto
      mit deiner Kamera machst und dieses in der App hochlädst. Dafür brauchen
      wir dein Einverständnis."
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/static%2Fmedias%2Fmulti_Zeubeel8_loop.mp3?alt=media&token=88349085-3303-48b9-bdc6-fd7b09519a26
    actions:
      - title: Einverstanden
        action: camera
      - title: Kein Foto
        action: continue
    triggerTime: 0
  - title: >-
      Damit wir dein Foto auf der Weltkarte von The Walks geographisch zuordnen
      können, benötigen wir deine GPS-Koordinate. Diese wird in der Foto-Datei
      gespeichert.

      Bist du damit einverstanden?
    triggerTime: 0
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/static%2Fmedias%2Fmulti_Zeubeel8_loop.mp3?alt=media&token=88349085-3303-48b9-bdc6-fd7b09519a26
    actions:
      - title: Ja
        action: geoLocation
      - title: Nein
        action: continue
  - title: "Danke für dein Vertrauen. Das war’s schon. Jetzt geht’s los. Drückt
      gleichzeitig auf den Button. Zählt gemeinsam: 3. 2. 1."
    triggerTime: 0
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/static%2Fmedias%2Fmulti_Zeubeel8_loop.mp3?alt=media&token=88349085-3303-48b9-bdc6-fd7b09519a26
    actions:
      - title: Start
        action: continue
  - title: Foto machen und fortfahren oder ohne Foto fortfahren.
    triggerTime: 645
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/mp3%2Fv0%2Fde_uma9ooK4%2Fde_uma9ooK4_loop_1.mp3?alt=media&token=e2eeee6c-c6e8-4432-8e07-228bdecf0ec6
    actions:
      - title: Foto machen
        action: picture
        postAction: continue
      - title: Kein Foto
        action: continue
  - title: Weiter zur Bildergalerie
    triggerTime: 1328
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/static%2Fmedias%2Fmulti_Zeubeel8_loop.mp3?alt=media&token=88349085-3303-48b9-bdc6-fd7b09519a26
    actions:
      - title: Gallery
        action: map
      - title: No
        action: continue
---
