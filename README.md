# 🎬 Netflix Clone Project (React & TypeScript)

이 프로젝트는 React와 TypeScript를 활용하여 넷플릭스의 핵심 UI와 사용자 경험을 재현한 프론트엔드 프로젝트입니다.

---

## 📸 결과물 스크린샷
![Main Screen](여기에_이미지_주소_복사)

---

## 🚀 핵심 구현 기능

### 1. 효율적인 에셋 및 데이터 관리
* **Type-Safe Data**: `Movie` 인터페이스 정의를 통한 데이터 구조의 엄격한 관리
* **컴파일러 최적화**: `import type` 문법을 사용하여 TypeScript의 `verbatimModuleSyntax` 에러 완벽 해결
* **Asset Indexing**: 18개의 드라마 포스터 이미지를 중앙에서 관리하는 인덱스 시스템 구축

### 2. 정교한 UI/UX 구현
* **Responsive Grid Layout**: 가로 스크롤 대신 한 줄에 6개씩 배치되는 정교한 그리드 시스템 (CSS Grid)
* **Sticky Header**: 스크롤 감지를 통해 투명도와 배경색이 부드럽게 변하는 네비게이션 바
* **Interactive Animation**: 콘텐츠 호버 시 `transform: scale()`을 이용한 시각적 피드백 제공

---

## 📂 프로젝트 아키텍처
```plaintext
src/
 ├── assets/      # 18개의 드라마 포스터 및 로고 에셋
 ├── components/  # Header, MovieRow, Footer 공통 컴포넌트
 ├── data/        # 중앙 집중식 영화 데이터 및 타입 정의
 └── App.tsx      # 메인 레이아웃 및 섹션 구성

💡 개발 과정의 기술적 도전
컴파일러 최적화: verbatimModuleSyntax 설정으로 인한 타입 임포트 에러를 해결하며 TypeScript의 모듈 시스템에 대한 이해도를 높였습니다.

형상 관리 최적화: .gitignore 설정을 통해 node_modules 및 개인 설정 폴더(MINI-PROJECT/)를 Git 추적에서 제외하여 저장소 용량을 최적화하고 보안을 강화했습니다.

## 📺 주요 구현 기능 스크린샷
<img width="1892" height="984" alt="스크린샷 2026-02-03 152832" src="https://github.com/user-attachments/assets/297ab8fc-f95f-481b-a233-82d2f517eb3b" /><img width="1888" height="634" alt="스크린샷 2026-02-03 152839" src="https://github.com/user-attachments/assets/28f10700-5060-44f3-8d74-df258ce0bc61" />

