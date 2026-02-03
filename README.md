🎬 Netflix Clone Project (React & TypeScript)
이 프로젝트는 React와 TypeScript를 활용하여 넷플릭스의 핵심 UI와 사용자 경험을 재현한 프론트엔드 클론 코딩 프로젝트입니다. 실제 에셋 데이터를 효율적으로 관리하고, CSS Grid와 Styled-components를 사용하여 반응형 레이아웃을 구현하는 데 집중했습니다.

🛠 Tech Stack
Language: TypeScript (v5.x)

Library: React (v18.x)

Styling: Styled-components

Build Tool: Vite

Version Control: Git / GitHub

📺 핵심 구현 기능
1. 효율적인 에셋 및 데이터 관리
Type-Safe Data: Movie 인터페이스를 정의하여 데이터 구조를 엄격하게 관리하고, import type 문법을 사용해 TypeScript의 verbatimModuleSyntax 에러를 해결했습니다.

Asset Indexing: 18개의 드라마 포스터 이미지를 한곳에서 관리하는 인덱스 파일을 구축하여 유지보수성을 높였습니다.

2. 정교한 UI/UX 구현
Responsive Grid Layout: 가로 스크롤 방식이 아닌, 한 줄에 정확히 6개씩 배치되는 그리드 시스템을 구축하여 실제 서비스와 유사한 시각적 안정감을 주었습니다.

Sticky Header: 스크롤 이벤트를 감지하여 배경색이 투명에서 검은색으로 부드럽게 변하는 네비게이션 바를 구현했습니다.

Interactive Hover Effect: 콘텐츠 카드에 마우스를 올릴 때 transform: scale()을 활용한 확대 애니메이션을 적용했습니다.

3. 프로젝트 아키텍처
Plaintext
src/
 ├── assets/          # 18개의 드라마 포스터 및 로고 에셋
 ├── components/      # Header, MovieRow, Footer 공통 컴포넌트
 ├── data/            # 중앙 집중식 영화 데이터 및 타입 정의
 └── App.tsx          # 메인 레이아웃 및 섹션 구성
💡 개발 과정의 기술적 도전
컴파일러 최적화: verbatimModuleSyntax 설정으로 인한 타입 임포트 에러를 해결하며 TypeScript의 모듈 시스템에 대한 이해도를 높였습니다.

형상 관리 최적화: .gitignore 설정을 통해 node_modules 및 개인 설정 폴더(MINI-PROJECT/)를 Git 추적에서 제외하여 저장소 용량을 최적화하고 보안을 강화했습니다.

## 📺 주요 구현 기능 스크린샷
<img width="1892" height="984" alt="스크린샷 2026-02-03 152832" src="https://github.com/user-attachments/assets/297ab8fc-f95f-481b-a233-82d2f517eb3b" /><img width="1888" height="634" alt="스크린샷 2026-02-03 152839" src="https://github.com/user-attachments/assets/28f10700-5060-44f3-8d74-df258ce0bc61" />

