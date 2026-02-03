# 🎬 Netflix Clone Project

React와 TypeScript를 사용하여 제작한 넷플릭스 클론 프로젝트입니다.
Vite를 기반으로 빠르고 효율적인 개발 환경을 구축하였으며, TMDB API를 활용하여 다양한 영화 정보를 카테고리별로 제공합니다.

## 📚 목차

- [기술 스택](#-기술-스택)
- [주요 기능](#-주요-기능)
- [설치 및 실행](#-설치-및-실행)
- [프로젝트 구조](#-프로젝트-구조)

## 🚀 기술 스택

| 분류 | 기술 |
| --- | --- |
| **Framework** | React (v18) |
| **Language** | TypeScript |
| **Build Tool** | Vite |
| **Styling** | Styled-components |
| **HTTP Client** | Axios |
| **API** | TMDB (The Movie Database) |

## ✨ 주요 기능

*   **메인 배너**: 최신 트렌드 영화 중 하나를 랜덤으로 선정하여 대형 배너로 노출합니다.
*   **카테고리별 영화 목록**:
    *   넷플릭스 오리지널
    *   장르별 영화 (액션, 코미디, 로맨스 등)
*   **반응형 UI**: 데스크톱, 태블릿, 모바일 등 다양한 디바이스 환경에 최적화된 레이아웃을 제공합니다.
*   **슬라이더 기능**: 많은 양의 영화 포스터를 가로 스크롤 형태로 탐색할 수 있습니다.

## 🛠 설치 및 실행

이 프로젝트를 로컬 환경에서 실행하려면 Node.js가 설치되어 있어야 합니다.

1.  **의존성 설치 (Install Dependencies)**
    ```bash
    npm install
    ```

2.  **환경 변수 설정 (Environment Variables)**
    최상위 디렉토리에 `.env` 파일을 생성하고 TMDB API 키를 설정합니다.
    ```env
    VITE_TMDB_API_KEY=your_api_key_here
    ```

3.  **개발 서버 실행 (Run Dev Server)**
    ```bash
    npm run dev
    ```

## 📂 프로젝트 구조

```text
src/
├── api/            # API 요청 설정 및 엔드포인트 관리
├── components/     # 재사용 가능한 UI 컴포넌트 (Banner, Row, Footer 등)
├── pages/          # 페이지 단위 컴포넌트 (MainPage 등)
└── App.tsx         # 메인 앱 컴포넌트
```
