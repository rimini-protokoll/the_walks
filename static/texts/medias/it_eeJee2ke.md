---
iconUri: https://the-walks.netlify.app/icons/Park.png
id: eeJee2ke
language: it
shortTitle: A
title: Parc A
twoPerson: true
popups: []
duration: ~ 20 Min
listed: false
srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/mp3%2Fv0%2Fit_ahvo7Cee%2Fit_eeJee2ke.mp3?alt=media&token=fd1d1a80-3195-4371-9fb6-fde3abb93253
userPrompt:
  - title: "Affinché questa passeggiata funzioni sincronicamente, è necessario
      configurare alcune impostazioni. Cominciamo con la più semplice: la
      funzione \"Non disturbare\". L'impostazione \"Non disturbare\" non è come
      la \"modalità aereo\". Durante la passeggiata si rimane connessi a
      internet. Con iOS (Apple), vai su \"Impostazioni\". Attiva \"Non
      disturbare\". Con la maggior parte dei dispositivi Android (Google),
      troverete questa funzione su \"Impostazioni\" → \"Suoni\" → \"Non
      disturbare\"."
    triggerTime: 0
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/static%2Fmedias%2Fmulti_Zeubeel8_loop.mp3?alt=media&token=88349085-3303-48b9-bdc6-fd7b09519a26
    actions:
      - title: Ok, avanti.
        action: continue
  - title: "Ora veniamo alla seconda impostazione: il permesso di accedere alla tua
      fotocamera. Non preoccuparti, non vogliamo prendere il controllo del tuo
      dispositivo. Si tratta solo di scattare una foto con la tua fotocamera
      durante la passeggiata e caricarla sull'app. Abbiamo bisogno del tuo
      permesso per farlo."
    triggerTime: 0
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/static%2Fmedias%2Fmulti_Zeubeel8_loop.mp3?alt=media&token=88349085-3303-48b9-bdc6-fd7b09519a26
    actions:
      - title: D'accordo
        action: camera
      - title: Nessuna foto
        action: continue
  - title: Per poter assegnare geograficamente la tua foto sulla mappa mondiale di
      The Walks, abbiamo bisogno delle tue coordinate GPS. Questo sarà salvato
      nel file della foto. Sei d'accordo?
    triggerTime: 0
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/static%2Fmedias%2Fmulti_Zeubeel8_loop.mp3?alt=media&token=88349085-3303-48b9-bdc6-fd7b09519a26
    actions:
      - title: Sì
        action: geoLocation
      - title: No
        action: continue
  - title: >-
      Grazie per la tua fiducia. Questo è tutto. Ora andiamo. Premete entrambi
      nello stesso momento il pulsante.

      Contate insieme: 3. 2. 1.
    triggerTime: 0
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/static%2Fmedias%2Fmulti_Zeubeel8_loop.mp3?alt=media&token=88349085-3303-48b9-bdc6-fd7b09519a26
    actions:
      - title: Inizio
        action: continue
  - title: Fare una foto e proseguire oppure proseguire senza foto.
    triggerTime: 787
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/mp3%2Fv0%2Fit_ahvo7Cee%2Fit_ahvo7Cee_loop_1.mp3?alt=media&token=e12a0212-592e-4a44-a55c-c9500938bab2
    actions:
      - title: Fare una foto
        action: picture
        postAction: continue
      - title: Nessuna foto
        action: continue
  - actions:
      - title: AVANTI
        action: continue
    triggerTime: 787
    title: Pronti per continuare? Premete entrambi nello stesso momento il pulsante
      AVANTI.
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/mp3%2Fapi-v1%2Fit_eeJee2ke%2Fmulti_Zeubeel8_loop.mp3?alt=media&token=1faca005-76ab-481c-9e95-45ec7634ddc9
  - title: Fare una foto e proseguire oppure proseguire senza foto.
    triggerTime: 959
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/mp3%2Fv0%2Fit_ahvo7Cee%2Fit_ahvo7Cee_loop_2.mp3?alt=media&token=0c1806f2-b99d-488e-987b-d9e38fbcdd14
    actions:
      - title: Fare una foto
        action: picture
        postAction: continue
      - title: Nessuna foto
        action: continue
  - title: Continua alla galleria
    triggerTime: 1028
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/static%2Fmedias%2Fmulti_Zeubeel8_loop.mp3?alt=media&token=88349085-3303-48b9-bdc6-fd7b09519a26
    actions:
      - title: Galleria
        action: map
      - title: No
        action: continue
---
