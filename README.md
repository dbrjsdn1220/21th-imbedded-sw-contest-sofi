# SOFI - 시각 장애인을 위한 음성 인식 식품 스캐너

**제21회 임베디드 SW 경진대회 대상 수상 (산업통상자원부 장관상)**

SOFI는 시각 장애인을 위한 스마트 식품 정보 인식 시스템입니다.  
웹 앱에서 식품을 촬영하면 AI 서버가 바코드 및 식품 정보를 분석하고,  
음성으로 식품명/유통기한, 사용자의 알레르기 여부를 경고합니다.  
Google Assistant와 TTS 기능을 통해 모든 기능을 음성으로 제어할 수 있도록 구성했습니다.

---

## 📌 주요 기능

- ESP32-CAM으로 식품 이미지 촬영 및 서버 전송
- 바코드 인식(Pyzbar), 유통기한 및 성분 정보 추출(OCR)
- 사용자 등록 알레르기 정보와 비교 후 TTS로 경고
- Google Assistant API와 webOS 기반 음성 명령 처리
- 사용자 정보 및 스캔 결과 저장(json)

---

## 🧠 기술 스택

- **Frontend**: HTML, JavaScript (webOS 호환)
- **Backend**: Python (Flask)
- **AI/인식 처리**: CLOVA OCR, Pyzbar
- **음성 처리**: Google Assistant API, Google TTS, LS2 API
- **Hardware**: ESP32-CAM, Arduino, Servo Motor

---

## 🧩 시스템 구성도

사용자 → Web App → Camera 촬영 요청<br>
 ↓<br>
ESP32-CAM → Flask 서버 → 이미지 저장 및 처리<br>
 ↓<br>
바코드 / 텍스트 인식<br>
 ↓<br>
사용자 알레르기 정보와 대조 → TTS 경고

---

## 🗂 프로젝트 구조

- `aiserver/`: Flask 기반의 AI 서버 코드
- `arduino/`: ESP32-CAM 관련 아두이노 코드
- `mobile_app/`: 모바일 애플리케이션 코드
- `website/`: webOS 기반의 웹 애플리케이션 코드

---

## 🏆 결과

- 제21회 임베디드 SW 경진대회 대상 수상 (산업통상자원부 장관상)
- [프로젝트 보고서 보기 (PDF)](./report.pdf)
- [YouTube 시연 영상](https://youtu.be/GVSaJLW1eDQ)
