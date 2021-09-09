---
twoPerson: true
popups: []
id: airie8Ke
listed: false
language: de
shortTitle: B
title: Park B
duration: ~ 20 Min
srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/mp3%2Fv0%2Fde_ahvo7Cee%2Fde_airie8Ke.mp3?alt=media&token=5047e4dd-7c06-470c-b445-12e53ded9446
iconUri: https://the-walks.netlify.app/icons/Park.png
userPrompt:
  - title: |-
      Damit dieser Walk synchron funktioniert, solltest du ein paar Einstellungen vorzunehmen. Fangen wir mit der Leichtesten an: der Funktion “Nicht stören”.
      Die Einstellung “Nicht stören” ist nicht der Flugmodus. Sie erhält während deines Walks die Internet-Verbindung. Mit iOS (Apple) gehst du jetzt zu “Einstellungen”. Aktiviere dort “Nicht stören”. Bei den meisten Android-Geräten (Google) findest du diese Funktion unter Einstellungen → Töne → Nicht stören."
    triggerTime: 0
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/static%2Fmedias%2Fmulti_Zeubeel8_loop.mp3?alt=media&token=88349085-3303-48b9-bdc6-fd7b09519a26
    actions:
      - title: Okay, weiter.
        action: continue
  - title: "Jetzt kommen wir zur zweiten Einstellung: der Erlaubnis auf deine Kamera zugreifen zu können. Keine Sorge, wir wollen nicht die Kontrolle über dein Gerät übernehmen. Es geht nur darum, dass du während des Walks ein Foto mit deiner Kamera machst und dieses in der App hochlädst. Dafür brauchen wir dein Einverständnis."
    triggerTime: 0
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/static%2Fmedias%2Fmulti_Zeubeel8_loop.mp3?alt=media&token=88349085-3303-48b9-bdc6-fd7b09519a26
    actions:
      - title: Einverstanden
        action: camera
      - title: Kein Foto
        action: continue
  - title: |-
      Damit wir dein Foto auf der Weltkarte von The Walks geographisch zuordnen können, benötigen wir deine GPS-Koordinate. Diese wird in der Foto-Datei gespeichert.
      Bist du damit einverstanden?
    triggerTime: 0
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/static%2Fmedias%2Fmulti_Zeubeel8_loop.mp3?alt=media&token=88349085-3303-48b9-bdc6-fd7b09519a26
    actions:
      - title: Ja
        action: geoLocation
      - title: Nein
        action: continue
  - title: "Danke für dein Vertrauen. Das war’s schon. Jetzt geht’s los. Drückt gleichzeitig auf den Button. Zählt gemeinsam: 3. 2. 1."
    triggerTime: 0
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/static%2Fmedias%2Fmulti_Zeubeel8_loop.mp3?alt=media&token=88349085-3303-48b9-bdc6-fd7b09519a26
    actions:
      - title: Start
        action: continue
  - title: Foto machen und fortfahren oder ohne Foto fortfahren.
    triggerTime: 786
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/mp3%2Fv0%2Fde_ahvo7Cee%2Fde_ahvo7Cee_loop_1.mp3?alt=media&token=7a551962-46cb-43f4-a172-70036f06cce9
    actions:
      - title: Foto machen
        action: picture
        postAction: continue
      - title: Kein Foto
        action: continue
  - title: Foto machen und fortfahren oder ohne Foto fortfahren.
    triggerTime: 992
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/mp3%2Fv0%2Fde_ahvo7Cee%2Fde_ahvo7Cee_loop_2.mp3?alt=media&token=8804115a-8015-44dd-b74d-86529859400a
    actions:
      - title: Foto machen
        action: picture
        postAction: continue
      - title: Kein Foto
        action: continue
  - title: Weiter zur Bildergalerie
    triggerTime: 1028
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/static%2Fmedias%2Fmulti_Zeubeel8_loop.mp3?alt=media&token=88349085-3303-48b9-bdc6-fd7b09519a26
    actions:
      - title: Galerie
        action: map
      - title: Nein
        action: continue
---
