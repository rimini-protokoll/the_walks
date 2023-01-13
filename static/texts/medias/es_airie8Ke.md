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
  - title: 'Para que este Walk funcione de manera sincronizada debes hacer dos
      ajustes. Empecemos con el más fácil: la función "No molestar". El ajuste
      "No molestar" no es el modo avión. Mantiene la conexión a internet durante
      tu Walk. Con iOS (Apple) vas a "Ajustes" → "Concentración". Ahí activas
      "No molestar". En la mayoría de los dispositivos Android (Google), esta
      función la encuentras bajo Ajustes → Sonidos → No molestar.'
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
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/mp3%2Fapi-v1%2Fes_airie8Ke%2Fwalk_8_PARK__Loop_Foto_1__SP__13_06min_.mp3?alt=media&token=6100d432-d4bb-4204-83e6-fc19900e5d45
    actions:
      - title: Tomar foto
        action: picture
        postAction: continue
      - title: Sin foto
        action: continue
  - actions:
      - title: CONTINUAR
        action: continue
    title: ¿Listos para continuar? Opriman entonces ambos simultáneamente en
      CONTINUAR.
    triggerTime: 786
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/mp3%2Fapi-v1%2Fes_airie8Ke%2Fmulti_Zeubeel8_loop.mp3?alt=media&token=66453fa7-4036-4f66-98a0-bc95b123fab6
  - title: Tomar una foto y continuar o continuar sin foto.
    triggerTime: 992
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
