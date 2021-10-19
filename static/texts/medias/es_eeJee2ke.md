---
iconUri: https://the-walks.netlify.app/icons/Park.png
id: eeJee2ke
language: es
shortTitle: A
title: Parque A
twoPerson: true
popups: []
duration: ~ 20 minutos
listed: false
srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/mp3%2Fapi-v1%2Fes_eeJee2ke%2Fwalk_8_PARK__SP__A__.mp3?alt=media&token=44d743d6-14e5-435c-b5d5-67799bf52739
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
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/mp3%2Fapi-v1%2Fes_eeJee2ke%2Fwalk_8_PARK__Loop_Foto_1__SP__13_06min_.mp3?alt=media&token=b53d78ca-4b58-4bec-8e83-d8cff4aa04ad
    actions:
      - title: Tomar foto
        action: picture
        postAction: continue
      - title: Sin foto
        action: continue
  - title: Tomar una foto y continuar o continuar sin foto.
    triggerTime: 960
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/mp3%2Fapi-v1%2Fes_eeJee2ke%2Fwalk_8_Loop_Foto_2_SP_16_31_865min_.mp3?alt=media&token=5015f318-fb91-48c0-a851-eff518aeea69
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
