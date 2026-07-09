---
layout: post
title: "언리얼엔진 5.8, MCP를 \"공식\" 지원한다"
categories: unreal
---

2026년 6월 17일 나온 **언리얼엔진 5.8**에 **MCP 서버 플러그인**이 실험(Experimental) 기능으로 들어왔다. 그동안은 서드파티 MCP 서버를 붙여야 했는데, 이번엔 Epic이 엔진에 직접 넣어 배포했다.

## MCP가 뭔데

**MCP(Model Context Protocol)** 는 Anthropic이 2024년 11월에 공개한 오픈 표준이다. AI가 외부 도구와 대화하는 방식을 규격으로 정해둔 것 — 쉽게 말해 **"AI와 프로그램을 잇는 공용 USB 단자"** 라고 보면 된다.

핵심 장점은 **표준**이라는 점이다. 한 번 MCP로 열어두면 Claude, ChatGPT, Cursor, Gemini 등 MCP를 지원하는 **어떤 AI 에이전트든 그대로 붙는다.** 특정 AI에 락인되지 않는다.

## 5.8에선 뭐가 되나

플러그인은 **에디터 안에 MCP 서버를 심는다.** 그러면 로컬 연결로 AI 에이전트(Claude Code, Cursor 등)가 에디터를 직접 조작할 수 있다.

- 액터 스폰, 조명 구성, 머티리얼 인스턴스 생성
- 블루프린트 탐색·조작, 애셋/레벨/메시 다루기
- 자동화 테스트 실행

즉 **"에디터를 AI가 다룰 수 있는 하나의 도구로 취급"** 하는 구조다.

## 연동하는 법

1. `Edit > Plugins` 열기
2. **"Unreal MCP"** 검색 후 **Enabled** 체크 (의존 플러그인 Toolset Registry가 자동으로 같이 켜짐)
3. 에디터 재시작
4. 쓰려는 AI 에이전트(Claude Code, Cursor 등)의 MCP 설정에 언리얼이 띄운 로컬 서버 주소를 등록

> 참고: 플러그인 브라우저엔 `Unreal MCP`, 엔진 내부 식별자는 `ModelContextProtocol`로 표기된다.

## 아직은 실험 단계

말 그대로 **Experimental**이다. 포럼엔 벌써 "연결이 바로 끊긴다"는 버그 리포트도 있다. 프로덕션에 넣기보단 **어떤 워크플로가 가능한지 감 잡는 용도**로 보는 게 맞다.

---

### 참고 자료

- [Unreal MCP in Unreal Editor — UE 5.8 공식 문서](https://dev.epicgames.com/documentation/unreal-engine/unreal-mcp-in-unreal-editor)
- [UE 5.8 릴리스 노트](https://dev.epicgames.com/documentation/unreal-engine/unreal-engine-5-8-release-notes)
- [포럼: MCP 서버 연결 끊김 버그 리포트](https://forums.unrealengine.com/t/5-8-experimental-modelcontextprotocol-mcp-server-instantly-drops-connections/2729488)
