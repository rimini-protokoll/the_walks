---
iconUri: https://the-walks.netlify.app/icons/Park.png
id: airie8Ke
language: es
shortTitle: B
title: Parque B
twoPerson: true
popups: []
duration: ~ 20 minutos
listed: false
srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/mp3%2Fapi-v1%2Fes_airie8Ke%2Fwalk_8_PARK__SP__B__.mp3?alt=media&token=fe75c8d7-4f45-4ae3-b442-9a34423df739
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
  - title: Tomar una foto y continuar o continuar sin foto.
    triggerTime: 786
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/mp3%2Fapi-v1%2Fes_airie8Ke%2Fwalk_8_PARK__Loop_Foto_1__SP__13_06min_.mp3?alt=media&token=6100d432-d4bb-4204-83e6-fc19900e5d45
    actions:
      - title: Tomar foto
        action: picture
        postAction: continue
      - title: Sin foto
        action: continue
  - title: Tomar una foto y continuar o continuar sin foto.
    triggerTime: 960
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/mp3%2Fapi-v1%2Fes_airie8Ke%2Fwalk_8_Loop_Foto_2_SP_16_31_865min_.mp3?alt=media&token=8eb21dc8-3fbf-429d-a081-cfef17d5c5ae
    actions:
      - title: Tomar foto
        action: picture
        postAction: continue
      - title: Sin foto
        action: continue
  - title: Continuar a galería
    triggerTime: 1028
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/static%2Fmedias%2Fmulti_Zeubeel8_loop.mp3?alt=media&token=88349085-3303-48b9-bdc6-fd7b09519a26
    actions:
      - title: Galería
        action: map
      - title: No
        action: continue
---
