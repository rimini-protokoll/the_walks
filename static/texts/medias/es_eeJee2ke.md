---
twoPerson: true
popups: []
iconUri: https://the-walks.netlify.app/icons/Park.png
id: eeJee2ke
language: es
shortTitle: A
title: Parque A
duration: ~ 20 minutos
listed: false
srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/mp3%2Fapi-v1%2Fes_eeJee2ke%2Fwalk_8_PARK__SP__A__.mp3?alt=media&token=44d743d6-14e5-435c-b5d5-67799bf52739
userPrompt:
  - title: 'Para que este Walk funcione de manera sincronizada debes hacer dos
      ajustes. Empecemos con el más fácil: la función "No molestar". El ajuste
      "No molestar" no es el modo avión. Mantiene la conexión a internet durante
      tu Walk. Con iOS (Apple) vas a "Ajustes". Ahí activas "No molestar". En la
      mayoría de los dispositivos Android (Google), esta función la encuentras
      bajo Ajustes → Sonidos → No molestar.'
    triggerTime: 0
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/static%2Fmedias%2Fmulti_Zeubeel8_loop.mp3?alt=media&token=88349085-3303-48b9-bdc6-fd7b09519a26
    actions:
      - title: Okey, continuar.
        action: continue
  - title: "Ahora viene el segundo ajuste: permitir el acceso a tu cámara. No te
      preocupes, no queremos asumir el control de tu dispositivo. De lo único
      que se trata es que durante el Walk tomes una foto con tu cámara y la
      cargues en la aplicación. Para ello necesitamos tu consentimiento."
    triggerTime: 0
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/static%2Fmedias%2Fmulti_Zeubeel8_loop.mp3?alt=media&token=88349085-3303-48b9-bdc6-fd7b09519a26
    actions:
      - title: Aceptar
        action: camera
      - title: Sin foto
        action: continue
  - title: >-
      Para poder posicionar geográficamente tu foto en el mapa mundial de The
      Walks, necesitamos tus coordenadas GPS. Las coordenadas se guardan en el
      archivo de foto.

      ¿Estás de acuerdo?
    triggerTime: 0
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/static%2Fmedias%2Fmulti_Zeubeel8_loop.mp3?alt=media&token=88349085-3303-48b9-bdc6-fd7b09519a26
    actions:
      - title: Sí
        action: geoLocation
      - title: No
        action: continue
  - title: "Gracias por tu confianza. Eso fue todo. Ahora podemos empezar. Opriman
      simultáneamente el botón. Cuenten juntos: 3. 2. 1."
    triggerTime: 0
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/static%2Fmedias%2Fmulti_Zeubeel8_loop.mp3?alt=media&token=88349085-3303-48b9-bdc6-fd7b09519a26
    actions:
      - title: Inicio
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
    triggerTime: 992
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
